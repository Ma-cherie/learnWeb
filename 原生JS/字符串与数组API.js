const arr = [1,2,3];

Array.prototype.pzj_reverse = function () {
    // 严谨性判断
    if(Object.prototype.toString.call(this) != '[object Array]') throw new Error('this is not a Array')
    const arr = this;
    // 直接改变原数组，双指针
    let i = 0, j = arr.length - 1; 
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
    // 利用新的空间，不改变原数组
    // const newArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     newArr.push(arr[i])
    // }
    // return newArr;
}
Array.prototype.pzj_join = function (s) {
    // 严谨性判断，但是没有做正则参数的功能
    if (Object.prototype.toString.call(this) != '[object Array]') throw new Error('this is not a Array')
    if (s == undefined) s = ',';
    const arr = this;
    // 结果
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].toString() + s;
    }
    result = result.slice(0, result.length - 1)
    return result;
}
// console.log(arr.pzj_reverse())
// console.log(arr.pzj_join())
// console.log(arr.join())


String.prototype.pzj_split = function (s) {
    // 严谨性判断，但是没有做正则参数的功能
    if (Object.prototype.toString.call(this) != '[object String]' && typeof(this) != 'string') 
        throw new Error('this is not a String')
    const str = this;
    if (s == undefined) s = [str];
    const resultArr = [];
    let word = '';
    for(let i = 0 ; i < str.length ; i ++){
        if(str[i] == s){
            resultArr.push(word);
            word = '';
            continue;
        }
        word += str[i];
    }
    resultArr.push(word);
    return resultArr;
}
const str = 'Have a nice day'
console.log(str.pzj_split(' '))
console.log(str.split(' '))