const speed = -100; //地面和水管的移动速度
const gameDom = document.querySelector('.game');
const gameStyle = getComputedStyle(gameDom);
const gameWidth = parseFloat(gameStyle.width);
const gameHeight = parseFloat(gameStyle.height);


class Game{
    constructor(){
        this.sky = new Sky();
        this.land = new Land(speed);
        this.bird = new Bird();
        this.producer = new pairProducer(speed);
        this.timer = null;
        this.tick = 16;
        this.regEvent();
        this.gameover = false;
    }
    // 开始游戏
    start(){
        if (this.timer) {
            return;
        }
        if (this.gameover) {
            window.location.reload();
        }
        this.bird.startSwing();
        this.producer.startProduce();
        this.timer = setInterval(() => {
            const duration = this.tick / 1000
            this.sky.move(duration);
            this.land.move(duration);
            this.bird.move(duration);
            this.producer.pairs.forEach(pair => {
                pair.move(duration);
            });
            // 判断游戏是否结束
            if (this.isGameOver()) {
                alert('游戏结束! 按回车再来一次~');
                this.stop();
                this.gameover = true;
            }
        }, this.tick);
        
    }
    // 游戏停止
    stop(){
        clearInterval(this.timer);
        this.timer = null;
        this.bird.stopSwing();
        this.producer.stopProduce();
    }
    // 游戏结束
    isGameOver(){
        // 鸟碰到地面
        if (this.bird.top === this.bird.maxY) {
            return true;
        }
        // 鸟碰到柱子
        for(let i = 0; i < this.producer.pairs.length; i++){
            const pair = this.producer.pairs[i];
            //看柱子对pair是否跟bird进行了碰撞
            if (this.isHit(this.bird, pair.upPipe) || this.isHit(this.bird, pair.downPipe)) {
                return true;
            }
        }
        return false;
    }

    // 判断两个矩形是否碰撞
    isHit(rec1, rec2) {
        // 横向：两个矩形的中心点的横向距离，是否小于矩形宽度之和的一半
        // 纵向：两个矩形的中心点的纵向距离，是否小于矩形高度之和的一半
        var centerX1 = rec1.left + rec1.width / 2;
        var centerY1 = rec1.top + rec1.height / 2;
        var centerX2 = rec2.left + rec2.width / 2;
        var centerY2 = rec2.top + rec2.height / 2;
        var disX = Math.abs(centerX1 - centerX2); //中心点横向距离
        var disY = Math.abs(centerY1 - centerY2);//中心点总想距离
        if (disX < (rec1.width + rec2.width) / 2 &&
            disY < (rec1.height + rec2.height) / 2
        ) {
            return true;
        }
        return false;
    }

    // 关联键盘事件
    regEvent(){
        window.onkeydown = (e) => {
            // console.log(e.code);
            if (e.code == "Space" || e.keyCode === 32) {
                game.bird.jump();
            }else if(e.code == "Enter" || e.keyCode === 13){
                if (this.timer) {
                    this.stop()
                }
                else{
                    this.start();
                }
            }
        }
    }
}

const game = new Game();