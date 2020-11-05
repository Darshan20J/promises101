(function () {

    // -----------------------------------------------------------
    // a pending promise
    const aPendingPromise = () => {
        return new Promise(resolve => {

        });
    }

    // call aPendingPromise function and print it to the console
    console.log(aPendingPromise())
    // -----------------------------------------------------------

    // -----------------------------------------------------------
    const aResolvedPromise = () => {
        return new Promise(resolve => {
            resolve()
        })
    }

    // call aResolvedPromise function and print it to the console
    console.log(aResolvedPromise());
    // -----------------------------------------------------------

    // -----------------------------------------------------------
    const aResolvedPromiseWithValue = () => {
        return new Promise(resolve => {
            resolve('Its Darshan and Resolved a promise with new value just now!')
        })
    }
    console.log(aResolvedPromiseWithValue())
    // -----------------------------------------------------------

    // -----------------------------------------------------------
    // a Rejected promise
    const aRejectedPromise = () => {
        return new Promise((resolve, reject) => {
            reject('PROMISE_REJECT: Promise Rejected, so it will be an uncaught error')
        })
    }
    console.log(aRejectedPromise());
})()