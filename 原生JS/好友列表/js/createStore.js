function createStore(initialState) {
    let state = initialState || {};
    let list = [];
    function getState(type) {
        return state[type];
    }
    function dispatch(action) {
        state[action.type] = action.value;
        list.forEach(ele => {
            ele();
        })
    }
    function subscribe(func) {
        list.push(func);
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}

const store = createStore({
    text: '',
    sex: 'all'
});