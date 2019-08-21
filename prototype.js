!function () {
    var width_ = window.screen.availWidth, height_ = window.screen.availHeight;
    // var width_ = window.innerWidth,height_ = window.innerHeight;
    var div = document.createElement("div");
    var div_s = document.createElement("div");
    document.body.appendChild(div);
    div.appendChild(div_s);
    div.setAttribute('class','cover');
    div_s.setAttribute('class','cover_box');
    div.setAttribute('style',`width:${width_}px;height:${height_}px;`);
    div.style.display = 'none';
    iYiu = function(){
        this.width_ = window.screen.availWidth;
        this.height_ = window.screen.availHeight;
        this._tmp = div;
        this.init = function (option) {
            var pdf;
            !option?pdf = '':option.length>10?pdf = option.slice(0, 7)+'...':pdf = option;
            this.createHtml(pdf);
            this.fadeIn(18);
            this.outload(2000);
        };
        this.createHtml = function (option) {
            var txt;
            option?txt = option:txt = '';
            div_s.innerHTML = txt;
            this.fadeIn(18);
            this.outload(2000);
        }
        this.inload = function (option) {
            option?div_s.innerHTML = `<img src="./image/puff.svg" width="30" alt=""><br/><span>${this.interceptString(option,5)}</span>`:div_s.innerHTML = `<img src="./image/audio.svg" width="20" alt="">`;
            this.fadeIn(18);
        };
        
    }
    iYiu.prototype = {
        constructor : iYiu,
        setDate:function (_Obj) {
            var result = _Obj;
            return result;
        },
        outload : function (time) {
            var that = this;
            var c = setTimeout(function(){
                that.fadeOut(30,c);
                console.log(div)
            },time)
        },
        fadeIn : function (speed){
            if(div.style.opacity !=1){
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
            if(div.style.opacity !=0){
                var speed = speed || 30 ;
                var num = 10;
                var st = setInterval(function(){
                    num--;
                    div.style.opacity = num / 10 ;
                    if(num<=0)  {   clearInterval(st);time?clearTimeout(time):''; div.style.display = 'none'; }
                },speed);
            }
        },
        interceptString : function (str,num) {
            if(num == null) return str;
            if(str.length > num) {
                return str.slice(0, num);
            }else {
                return str;
            }
        }
    }
}();