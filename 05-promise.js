(function () {
    const aSimplePromise = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve('Promise Resolved and this is the value returned from a promise'), 1000)
        })
    }

    aSimplePromise()
        .then(value => console.log(value))
        .then(console.log('another then'))
        .then(console.log('another then...'))
        .then(console.log('then can go like this.....'))
})()