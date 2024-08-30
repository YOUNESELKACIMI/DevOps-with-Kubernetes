const randomString = Math.random().toString(16).substring(2,20)


const printString = () => {
    let date = new Date().toISOString()
    console.log(date+": "+randomString)
}

setInterval(printString,5000)



