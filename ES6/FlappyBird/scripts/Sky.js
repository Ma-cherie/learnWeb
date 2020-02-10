/**
 * 类：天空
 */
const skyDom = document.querySelector('.sky');
const skyStyle = getComputedStyle(skyDom);
const skyWidth = parseFloat(skyStyle.width);
const skyHeight = parseFloat(skyStyle.height);

class Sky extends Rectangle{
    constructor(){
        super(skyWidth, skyHeight, 0, 0, -100, 0, skyDom);
    }
    // 控制坐标范围
    onMove(){
        if (this.left <= -this.width / 2) {
            this.left = 0;
        }
    }
}

