/**
 * 类：矩形（抽象类）
 * 属性：宽、高、水平位置、垂直位置、水平速度、垂直速度、dom元素
 * 备注：
 * 前面几个属性的类型都是number,在render时会加上'px'
 * 速度单位：像素/秒
 */
class Rectangle{
    constructor(width,height,left,top,xSpeed,ySpeed,dom){
        if (new.target === Rectangle) {
            throw new Error('Rectangle类是抽象类,你不能直接创建Rectangle对象!')
        }
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
        this.render();
    }
    // 渲染
    render(){
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.top = this.top + 'px';
        this.dom.style.left = this.left + 'px';
    }

    // 移动，过多少时长移动多少位置
    move(duration){
        const xDis = this.xSpeed * duration;
        const yDis = this.ySpeed * duration;
        this.left = this.left + xDis;
        this.top = this.top + yDis;

        // 控制坐标范围。有onMove方法就执行，像是天空和地面要重置位置
        if (this.onMove) {
            this.onMove();
        }
        this.render();
    }
}