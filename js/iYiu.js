!function () {
    var width_ = window.screen.availWidth, height_ = window.screen.availHeight;
    var div = document.createElement("div");
    var div_two = document.createElement("div");
    document.body.appendChild(div);
    div.appendChild(div_two);
    div.setAttribute('class','cover');
    div_two.setAttribute('class','cover_box');
    div.setAttribute('style',`width:${width_}px;height:${height_}px;`);
    div.style.display = 'none';
    iYiu = function(option){
        this.width_ = window.screen.availWidth;
        this.height_ = window.screen.availHeight;
        this._div = document.createElement("div");
        this.init = function (option) {

        };
    }
    iYiu.prototype = {
        constructor : iYiu,
        setDate:function (_Obj) {
            var result = _Obj;
            return result;
        },
        message : function (option) {
            var str;
            option&&typeof option === 'string'?str = option:'未知错误';
            this.createHtml('message',str);
            this.fadeIn(18);
            this.outload(2000);
        },
        inload : function (option) {
            var str;
            option&&option instanceof Object? str = `<img style="${option.message?'margin:4px 0 6px;':''}" src="${option.icon?option.icon:'./image/puff.svg'}" width="30" alt="">${option.message?`<span>${this.interceptString(option.message,3)}</span>`:''}`:str = `<img src="./image/puff.svg" width="30" alt="">`;
            this.createHtml('loading',str);
            this.fadeIn(18);
        },
        createHtml : function (type,msg='') {
            div_two.appendChild(this._div);
            this._div.innerHTML = msg;
            if(type === 'message'){
                this._div.setAttribute('class','cover_box_message');
            }else if(type === 'loading'){
                this._div.setAttribute('class','cover_box_loading');
            }
        },
        outload : function (time) {
            var that = this;
            var c = setTimeout(function(){
                that.fadeOut(30,c);
            },time)
        },
        fadeIn : function (speed){
            if(div.style.opacity != 1){
                var speed = speed || 30 ;
                var num = 0;
                var st = setInterval(function(){
                    num++;
                    div.style.opacity = num/10;
                    div.style.display = '';
                    if(num>=10)  {  clearInterval(st);  }
                },speed);
            }
        },
        fadeOut : function (speed,time){
            if(div.style.opacity != 0){
                var speed = speed || 30 ;
                var num = 10;
                var st = setInterval(function(){
                    num--;
                    div.style.opacity = num / 10 ;
                    if(num<=0) { clearInterval(st);time?clearTimeout(time):''; div.style.display = 'none'; }
                },speed);
            }
        },
        interceptString : function (str,num) {
            if(num == null) return str;
            str.length > num? str = str.slice(0, num) + '...' : str = str;
            return str
        },
        strCutting : function (option) {
            !option? option = '' : option.length>10? option = option.slice(0, 7)+'...' : option = option;
            return option
        }
    }
}();