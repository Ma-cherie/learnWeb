// 替换空格
// const regexp = /\s+/g;
// const str = "Have   a   nice day!";
// const newStr = str.replace(regexp,"%20");
// console.log(newStr)

// 找出a
// const regexp2 = /a/g;
// const str2 = "Have   a \n  nice day!";
// const arr = str.match(regexp2);
// console.log(arr)

// 检验收尾是否都有数字
// const reg = /^\d.*\d$/;
// const str = '1asdjkalsd1';
// console.log(reg.test(str))

// 把-命名 改为 小驼峰命名
// const reg = /-(\w)/g;
// const str = 'the-first-name';
// console.log(str.replace(reg,function ($,$1) {
//     // console.log($,$1)
//     return $1.toUpperCase();
// }))

// 字符串去重
// const reg = /(\w)\1*/g;
// const str = 'aaaaaabbbccccccccccc';
// console.log(str.replace(reg,'$1'));

// 将形如aaaabbbb转换为bbbbaaaa
// const reg = /(\w)\1*(\w)\2*/g;
// const str = 'aaaabbbb';
// console.log(str.replace(reg, function ($,$1,$2) {
//     const length = $.length / 2;
//     return $2.repeat(length) + $1.repeat(length);
// }));

// 将10000000000 0每3位加,用正则
// 第一种做法: 将字符串逆转
// const reg = /\d{3}\B/g;
// const str = '100000000000';
// let reverseStr = str.split('').reverse().join('');
// let newReverseStr = reverseStr.replace(reg, function ($) {
//     return $ + ','
// })
// let newStr = newReverseStr.split('').reverse().join('');
// console.log(newStr)

// 第二种做法: 将''换为','
const reg = /(?=(\B)(\d{3})+$)/g;
const str = '100000000000';
console.log(str.replace(reg,','))

