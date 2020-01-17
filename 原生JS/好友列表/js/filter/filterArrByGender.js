// 根据性别来过滤函数 all f m
function filterArrByGender(data, gender) {
    if (gender == 'all') {
        return data;
    } else {
        return data.filter((ele, index, self) => {
            return ele.sex == gender;
        })
    }
}
