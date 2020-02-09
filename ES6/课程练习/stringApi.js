// const str = "so cool!\n";

// console.log(str.includes('cool',4))
// console.log(str.startsWith('cool',3)) 
// console.log(str.endsWith('cool'))
// console.log(str.repeat(3));
// const string = '字符串';
// const str = `我想要
// 换行和拼接${string}`
// console.log(str)
let love = '王者荣耀';
let str = myTag`这是模板字符串${love}啊~`;
// arguments: [["这是模板字符串","啊~"], '王者荣耀']
function myTag(parts) {
    let values = [].slice.call(arguments,1);
    console.log(parts,values);
    // parts.length = values.length + 1
    let resultStr = '';
    for(let i = 0; i < values.length; i++){
        resultStr += parts[i] + values[i];
    }
    resultStr += parts[values.length];
    return resultStr;
}
console.log(str);