// Promise
function test() {
    return new Promise((resolve,reject) => {
        const score = (Math.random() * 100).toFixed(2);
        if (score > 80) {
            resolve(`${score}优秀`);
        }
        else if (score >= 60) {
            resolve(`${score}还可以`)
        }else{
            reject(new Error(`${score}不及格`))
        }
    })
}

// test().then(res => {
//     console.log(res);
// },err => {
//     console.log(err);
// })

// Promise链
// const pro1 = new Promise((resolve,reject) => {
//     resolve(1);  
//     // reject(1);
// })

// const pro2 = pro1.then(res => {
//     // return res * 2;
//     // throw res * 2;
// },err => {
//     // return err * 3;
//     // throw err * 3;
// })

// pro2.then(data => {
//     console.log(data)
// },err =>{
//     console.log(err * 3);
// })









const pro1 = new Promise((resolve,reject) => {
    let num ;
    setTimeout(() => {
        num = (Math.random() * 100).toFixed(0);
        if (num > 50) {
            resolve(`pro1:${num}`)
        } else {
            reject(new Error(`pro1:${num}`))
        }
    }, 1000);
    
}).then(res => {
    console.log(res)
    return new Promise((resolve, reject) => {
        let num;
        setTimeout(() => {
            num = (Math.random() * 100).toFixed(0);
            if (num > 50) {
                resolve(`pro2:${num}`)
            } else {
                reject(new Error(`pro2:${num}`))
            }
        }, 1000);
    });
},err => {
    console.log(err);
    return new Promise((resolve, reject) => {
        let num;
        setTimeout(() => {
            num = (Math.random() * 100).toFixed(0);
            if (num > 50) {
                resolve(`pro2:${num}`)
            } else {
                reject(new Error(`pro2:${num}`))
            }
        }, 1000);
    });
}).then(res => {
    console.log(res); 
}, err =>{
    console.log(err); 
})