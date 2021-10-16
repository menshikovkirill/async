module.exports =  function (Homework) {
    return async (array, fn, initialValue, cb) => {
        let resultAns = initialValue;
        let isNotEmptyArray = true;
        while(isNotEmptyArray) {
            let elem;
            const promiseArrayElem = new Promise(res => array.pop(e => res(e)));
            await promiseArrayElem.then(res => {elem = res});

            const promiseFn = new Promise(res => fn(resultAns, elem, "", "", (e) => res(e)));
            await promiseFn.then(res => {resultAns = res});

            let length;
            const promiseLength = new Promise((res) => array.length(e => res(e)));
            await promiseLength.then(res => {length = res});

            isNotEmptyArray = length;
        }

        cb(resultAns);
    }
}