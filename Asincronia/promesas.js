const ejercicio = new Promise((resolve) => {
    x = 1;
    y = 2;

    if (true) {
        resolve(x);
    } else {
        reject(y);
    }
})

    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, 1000);
        return value++
    })
    .then(value => {
        setTimeout(() => {
            console.log(value++);
        }, 2000);
        return ++value
    })
    .then(value => {
        setTimeout(() => {
            console.log(++value);
        }, 3000);
        return value++
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, 4000);
        return value
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, 5000);
        return value
    })

    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, 5000);
    })
