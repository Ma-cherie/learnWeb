// 替换空格
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    const regExp = / /g;
    return s.replace(regExp, '%20');
};