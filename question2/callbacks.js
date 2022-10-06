let resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            {let success = {'message': 'delayed success!'}
            resolve(success)},500)})
}

let rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            {let error = {'error': 'delayed exception!'}
            reject(error)},500)})
}
resolvedPromise().then((msg) => console.log(msg));
rejectedPromise().catch((msg) => console.error(msg));