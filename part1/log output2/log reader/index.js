require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()

const {Sequelize,Model,DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });

class Count extends Model {}
Count.init({
    count:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    underscored: true,
    timestamps: true,
    modelName:'count'
})

Count.sync({ force: true })

let count = 0
const url = "http://localhost:8081/log_Generator"

app.get('/log_reader',async (req,res)=>{

    const response = await axios.get(url)
    console.log(response.data)
    const log = response.data.log

    count++        
    const countObject= {count}
    console.log(countObject)
    await Count.create(countObject)

    res.status(200).send(`<p>file content: this text is from file</p><p>env variable: ${process.env.MESSAGE}</p><p>${log}</p><p>${count}</p>`)
    //res.status(200).send(`${log} \n\n ${count}`)
})

const PORT = process.env.PORT || 8082

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})