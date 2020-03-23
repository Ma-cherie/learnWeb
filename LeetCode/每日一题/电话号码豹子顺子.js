// 快手笔试 第三题


// 拿到电话号码
const line = '14612244221,14612544221,14612644221'
const phoneArr = line.split(',');
if (phoneArr.length == 0) console.log(null);

let ansArr = []; // 电话号码、分数、类型
for (let i = 0; i < phoneArr.length; i++) {
    let phoneNumber = phoneArr[i]; // 当前手机号
    let num = phoneNumber.slice(3); // 后8位
    let shunzi = getShun(num);
    let baozi = getBao(num);
    // console.log(shunzi,baozi)
    if (shunzi == 0 && baozi == 0)
        continue;
    else {
        let score, type;
        if (baozi >= shunzi) {
            score = baozi;
            type = 'baozi';
        } else {
            score = shunzi;
            type = 'shunzi';
        }
        insert(ansArr, phoneNumber, score, type);
    }
}
console.log()
if (ansArr.length == 0) console.log(null);
let resArr = [];
ansArr.forEach(ele => resArr.push(ele.num))
console.log(resArr.join(','))



// 插入函数
function insert(arr, num, score, type) {
    let obj = { num: num, score: score, type: type };
    // console.log(obj)
    if (arr.length == 0) {
        arr.push(obj);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]; //当前号码对象
        if (obj.score > cur.score) {
            arr.splice(i, 0, obj);
            return;
        } else if (obj.score >= cur.score) {
            if (obj.type == 'baozi' && cur.type == 'shunzi') {
                arr.splice(i, 0, obj);
                return;
            } else {
                arr.splice(i + 1, 0, obj);
                return;
            }
        }
    }
    arr.push(obj);
    return;
}

// 顺子号码工具函数，返回顺子长度
function getShun(num) {
    let maxlen = 0; //最长的顺子长度
    for (let i = 0; i < 6; i++) { // 只试前五位
        let curNum = parseInt(num[i]); // 当前顺子开头数字
        let len = 1; //顺子长度
        let temp = 1;
        for (let j = i + 1; j < num.length; j++) {
            let newNum = parseInt(num[j]); // 顺子里的数字
            // console.log(curNum, newNum)
            if (newNum == curNum + temp || newNum == curNum - temp) {
                len++;
                temp++;
                // console.log('yo')
            }
            else
                break;
        }
        maxlen = len > maxlen ? len : maxlen;
        len = 1;
        temp = 1;
    }
    return maxlen >= 3 ? maxlen : 0;
}

// 豹子号码工具函数，返回豹子长度
function getBao(num) {
    let maxlen = 0; //最长的豹子长度
    for (let i = 0; i < 6; i++) { // 只试前六位
        let curNum = parseInt(num[i]); // 当前豹子开头数字
        let len = 1; //豹子长度
        for (let j = i + 1; j < num.length; j++) {
            let newNum = parseInt(num[j]);
            if (newNum == curNum) {
                len++;
            }
            else
                break;
        }
        maxlen = len > maxlen ? len : maxlen;
        len = 1;
    }
    return maxlen >= 3 ? maxlen : 0;
}
// console.log(getBao('12348512'))