const MyPromise = (() =>{
    // Promise的三个状态
    const PENDING = "pending",
        RESOLVED = "resolved",
        REJECTED = "rejected",
        PromiseValue = Symbol('PromiseValue'), //状态数据
        PromiseStatus = Symbol('PromiseStatus'),//当前状态
        changeStatus = Symbol('changeStatus');//改变状态方法名
    
    // Promise构造函数
    return class {
        constructor(executor){
            this[PromiseStatus] = PENDING;
            this[PromiseValue] = undefined;
            // 改变状态的
            const resolve = (data) => {
                this[changeStatus](RESOLVED,data);
            }
            const reject = (err) => {
                this[changeStatus](REJECTED, err);
            }
            try {
                executor(resolve, reject);
            } catch (error) {
                reject(error);
            }
        }

        // 改变状态的私有函数
        [changeStatus](newStatus,newValue){
            if (this[PromiseStatus] !== PENDING) {
                return;
            }
            this[PromiseStatus] = newStatus;
            this[PromiseValue] = newValue;
        }
    }
})()