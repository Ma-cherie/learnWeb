// 1160 拼写单词
var countCharacters = function (words, chars) {
    // 掌握的单词的长度和
    let len = 0;
    // 循环words，判断能否掌握
    words.forEach(word => {
        let flag = true;
        let charsArr = chars.split('')// 因为不能重复用chars的字母，所以每次要临时用数组存和删chars
        for (let i = 0; i < word.length; i++) {
            if (!charsArr.includes(word[i])) { // 不存在
                flag = false;
                break;
            } else { // 存在，删除
                let index = charsArr.indexOf(word[i]);
                charsArr.splice(index, 1);
            }
        }
        if (flag) len += word.length;
    })
    // 返回
    return len;
};

// 用官方解法map...我觉得没我的好
var countCharacters = function (words, chars) {
    // 掌握的单词的长度和
    let len = 0;
    // chars的map，字母与出现次数
    const charsMap = new Map();
    for (let i = 0; i < chars.length; i++) {
        if (!charsMap.has(chars[i]))
            charsMap.set(chars[i], 1);
        else
            charsMap.set(chars[i], charsMap.get(chars[i]) + 1);
    }
    console.log(charsMap)
    // 循环words，判断能否掌握，word的map，与chars对比
    words.forEach(word => {
        let flag = true;
        // word的map
        const wordMap = new Map();
        for (let i = 0; i < word.length; i++) {
            if (!wordMap.has(word[i]))
                wordMap.set(word[i], 1);
            else
                wordMap.set(word[i], wordMap.get(word[i]) + 1);
        }
        console.log(wordMap)
        // 对比
        for (const [key, value] of wordMap) {
            if (!charsMap.get(key) || wordMap.get(key) > charsMap.get(key)) {
                flag = false;
                break;
            }
        }
        if (flag) len += word.length;
    })
    // 返回
    return len;
};