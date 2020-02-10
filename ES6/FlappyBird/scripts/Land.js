/**
 * 类：地面
 */
const landDom = document.querySelector('.land');
const landStyle = getComputedStyle(landDom);
const landWidth = parseFloat(landStyle.width);
const landHeight = parseFloat(landStyle.height);
const landTop = parseFloat(landStyle.top);
const landLeft = parseFloat(landStyle.left);

class Land extends Rectangle {
    constructor(speed) {
        super(landWidth, landHeight, landLeft, landTop, speed, 0, landDom);
    }
    // 控制坐标范围
    onMove() {
        if (this.left <= -this.width / 2) {
            this.left = 0;
        }
    }
}

