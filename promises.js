function getTemperature(temp, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(temp > 200) {
                reject('Temp to hot');
            }
            if(temp < 100) {
                reject('Temp tooo cold');
            }
            resolve("Yay! Right temp");
        }, delay)
    })
}

getTemperature().then(response => console.log(response)).catch(e => console.log(e))

Promise.all([getTemperature(199, 1000), getTemperature(100, 2000), getTemperature(100, 3000)])
    .then(response => console.log('response' + response))
    .catch(e => console.log('error' + e))
