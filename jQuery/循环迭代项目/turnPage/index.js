(function () {
    // 封装翻页对象
    function TurnPage(option,wrap) {
        this.wrap = wrap || $('body');
        this.curPage = option.curPage || 1;
        this.totalPage = option.totalPage || 1;
        this.changeCb = option.changeCb || function () {};
        this.init = function () {
            this.fillHTML();
            this.initStyle();
            this.bindEvent();
        }
    }


    TurnPage.prototype.fillHTML = function () {
        // 分页ul
        let oul = $('<ul class="turn-page"></ul>');
        // 上一页
        if (this.curPage > 1) {
            $('<li class="prev">上一页</li>').appendTo(oul)
        }
        // 第一页
        $('<li class="num">1</li>').appendTo(oul)
        .addClass(this.curPage == 1 ? 'active' : '');;
        // 前省略号
        if (this.curPage -2 > 2) {
            $('<span>...</span>').appendTo(oul);
        }
        // 中间页码
        for (let i = this.curPage -2 ; i <= this.curPage + 2 ; i++){
            if(i > 1 && i < this.totalPage){
                $(`<li class="num">${i}</li>`).appendTo(oul)
                .addClass(i == this.curPage? 'active' : '');
            }
        }
        // 后省略号
        if (this.curPage + 2 < this.totalPage - 1) {
            $('<span>...</span>').appendTo(oul);
        }
        // 最后一页
        if (this.totalPage != 1) {
            $(`<li class="num">${this.totalPage}</li>`).appendTo(oul)
                .addClass(this.totalPage == this.curPage ? 'active' : '');
        }
        // 下一页
        if(this.curPage < this.totalPage){
            $('<li class="next">下一页</li>').appendTo(oul);
        }
        // 添加到wrap中
        this.wrap.empty().append(oul);
        
    } 
        
    TurnPage.prototype.initStyle = function () {
        $('.turn-page',this.wrap).find('*').css({
            padding: 0,
            margin: 0
        }).end().find('li').css({
            listStyle: 'none',
            display: 'inline-block',
            padding: '5px 10px',
            border: '1px solid #ddd',
            margin: '0 5px',
            color: '#333',
            cursor: 'pointer'
        }).filter('.active').css({
            backgroundColor: '#428bca',
            color: 'aliceblue'
        })
    }

    TurnPage.prototype.bindEvent = function () {
        const self = this;
        $(this.wrap).off('click').on('click','.turn-page > li',function (e) {
            // 点击上一页
            if ($(this).hasClass('prev')) {
                self.curPage --;
            // 点击下一页
            } else if ($(this).hasClass('next')){
                self.curPage++;
            // 点击页码
            } else if ($(this).hasClass('num')){
                self.curPage = parseInt($(this).text());
            }
            self.fillHTML();
            self.initStyle();
            self.changeCb(self.curPage);
        })

    }

    // 将方法扩展到原型链上
    $.fn.extend({
        page: function (options) {
            let obj = new TurnPage(options,this);
            obj.init();
            return this;
        }
    })
})();