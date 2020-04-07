var findNumberIn2DArray = function (matrix, target) {
    if (!matrix || matrix.length == 0 || matrix[0].length == 0)
        return false;
    let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }
    return false;
};

// 二
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix || matrix.length == 0 || matrix[0].length == 0)
        return false;
    let n = matrix.length;
    let m = matrix[0].length;
    let i = 0;
    let j = m - 1;
    while (i <= n - 1 && 0 <= j) {
        if (matrix[i][j] == target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;    // 往左一步
        } else {
            i++;    // 往下一步
        }
    }
    return false;
};