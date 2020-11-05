(() => {
    // set time out duration
    const timeOutDuration = 5000


    // this is a simple function that prints to the console
    const callBackFunction = () => {
        console.log(`${timeOutDuration} Time elapsed `)
    }

    // make a call to callback after timeOutDuration
    setTimeout(callBackFunction, timeOutDuration)
})()