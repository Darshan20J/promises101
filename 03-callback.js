(function () {
    // call a function after specific intervals
    setTimeout(() => {
        console.log('This is called after 1 second')
        setTimeout(() => {
            console.log('This is called after 2 second')
        }, 2000)
    }, 1000)
})()