/**
 * 类：小鸟
 */
const birdDom = document.querySelector('.bird');
const birdStyle = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyle.width);
const birdHeight = parseFloat(birdStyle.height);
const birdTop = parseFloat(birdStyle.top);
const birdLeft = parseFloat(birdStyle.left);

class Bird extends Rectangle{
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom);
        // 重力加速度，向下的加速度
        this.g = 1200;
        // 最低高度，只能到地面
        this.maxY = gameDom.offsetHeight - landHeight - this.height;
        // 小鸟翅膀的状态
        this.swingStatus = 1;
        // 小鸟翅膀煽动计时器
        this.timer = null;
        this.render();
    }

    // 移动
    move(duration){
        super.move(duration);
        this.ySpeed += this.g * duration;
    }

    // 控制坐标范围
    onMove(){
        if (this.top < 0) {
            this.top = 0
        }
        if (this.top > this.maxY) {
            this.top = this.maxY;
        }
    }

    // 往上跳
    jump(){
        this.ySpeed = -450;
    }

    // 煽动翅膀
    startSwing(){
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus = (this.swingStatus + 1) <= 3 ? (this.swingStatus + 1) : 1;
            this.render();
        }, 200);
    }
    // 停止煽动翅膀
    stopSwing(){
        clearInterval(this.timer);
    }
    // 渲染小鸟
    render(){
        super.render();
        // console.log(this.swingStatus)
        this.dom.className = `bird swing${this.swingStatus}`;
    }

}