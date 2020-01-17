// 根据文本来过滤函数 纯函数
function filterArrByText(data, text) {
    if (!text) {
        return data;
    }
    else {
        return data.filter((ele, index, self) => {
            return ele.name.includes(text);
        })
    }
}