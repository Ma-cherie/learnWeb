// 动态生成过滤器
function combineFilter(config) {
    return function (data) {
        for(let prop in config){
            // 例如         sex  filterArrByGender  'all'
            // console.log(prop,state[prop]);
            // data = config[prop](data,state[prop])
            data = config[prop](data,store.getState(prop))
        }
        return data;
    }
}

// 根据combineFilter生成的过滤器
// 这里的config要和全局过滤条件相对应
const lastFilter = combineFilter({
    text: filterArrByText,
    sex: filterArrByGender
})