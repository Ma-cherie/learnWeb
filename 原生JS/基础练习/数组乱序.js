/**
 * 数组乱序
 * @param {*} arr 
 */
// function shuffle(arr) {
//     arr.sort((a,b) => Math.random() - 0.5);
// }

// function shuffle(arr) {
//     for(let i = 0 ; i < arr.length ; i++){
//         let j = Math.floor(Math.random() * arr.length);
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
// }

// 1，2，3，4，5，6，7随机到6，把第六个和最后一个交换，认为数组长度-1
function shuffle(arr) {
    let len = arr.length; // 可以交换的数组长度，根据len生成随机数
    for (let i = arr.length - 1 ; i > 0 ; i--) {
        let random = Math.floor(Math.random() * len);
        [arr[i], arr[random]] = [arr[random], arr[i]];
        len--;
    }
}

let arr = [5,2,3,1,4];
shuffle(arr);
console.log(arr)