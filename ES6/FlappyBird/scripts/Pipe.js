// 水管类
class Pipe extends Rectangle{
    constructor(height,top,speed,dom){
        super(52, height, gameWidth, top, speed, 0, dom);
    }
    // 消失移除
    onMove(){
        if (this.left <= -this.width) {
            this.dom.remove();
        }
    }
}
// 水管对类
class PipePair {
    constructor(speed){
        this.spaceHeight = 150;// 上下水管的间隙
        this.minHeight = 80; // 水管最小高度
        this.maxHeight = gameHeight - landHeight - this.spaceHeight - this.minHeight; //水管最大高度
        const upPipeHeight = getRandom(this.minHeight, this.maxHeight);//上水管高度
        const downPipeHeight = gameHeight - landHeight - this.spaceHeight - upPipeHeight;//下水管高度
        const downPipeTop = landTop - downPipeHeight;//下水管垂直位置
        const upDom = document.createElement('div');
        const downDom = document.createElement('div');
        upDom.className = 'pipe up';
        downDom.className = 'pipe down';
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
        this.upPipe = new Pipe(upPipeHeight, 0, speed, upDom);
        this.downPipe = new Pipe(downPipeHeight, downPipeTop, speed, downDom);
    }

    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }

    isUseless(){
        return this.upPipe.left <= -this.upPipe.width;
    }
}

// 水管生产者类
class pairProducer {
    constructor(speed){
        this.speed = speed; //水管对的移动速度
        this.timer = null; //定时器
        this.tick = 2000;  //生产间隔
        this.pairs = [];//水管数组
    }
    startProduce(){
        setInterval(() => {
            this.pairs.push(new PipePair(this.speed));
            // 移除左侧消失的管子
            for(let i = 0 ; i < this.pairs.length; i++){
                if (this.pairs[i].isUseless()) {
                    this.pairs.splice(i,1);
                    i--;
                }
            }
        }, this.tick);
    }
    stopProduce(){
        clearInterval(this.timer);
    }
}

// 返回范围内随机数
function getRandom(min = 0,max = 1) {
    return Math.random() * (max - min) + min;
}