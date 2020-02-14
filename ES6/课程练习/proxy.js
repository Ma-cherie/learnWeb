const obj = {
    a: 1,
    b: 2
}

const objProxy = new Proxy(obj,{
    get(target,key){
        return target[key];
    },
    set(target,key,value){
        target[key] = value;
        render(target);
    },

})

function render(target) {
    let htmlStr = "";
    for (const key in target) {
         htmlStr += `
            <p><span>${key}:</span> <span>${target[key]}</span></p>
        `;
    }
    document.getElementsByClassName('wrapper')[0].innerHTML = htmlStr;
}

render(objProxy)
objProxy.a = 5;