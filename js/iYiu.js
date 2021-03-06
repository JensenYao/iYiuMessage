!function () {
    function popup (option){
        this.width_ = window.screen.availWidth;
        this.height_ = window.screen.availHeight;
        this._div = document.createElement("div");
        this.dom_box = document.createElement("div");
        this.div_two = document.createElement("div");
        this.init = function (option) {

        };
    }
    popup.prototype = {
        constructor : popup,
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
            if(option&&option instanceof Object){
                var load_img = '';
                switch (option.icon){
                    case 'icon-1':
                        load_img = `<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                                <stop stop-color="#fff" stop-opacity="0" offset="0%"></stop>
                                <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"></stop>
                                <stop stop-color="#fff" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)">
                                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2" transform="rotate(118.415 18 18)">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
                                </path>
                                <circle fill="#fff" cx="36" cy="18" r="1" transform="rotate(118.415 18 18)">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
                                </circle>
                            </g>
                        </g>
                    </svg>`;
                        break;
                    case 'icon-2':
                        load_img = `<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                        <g fill="none" fill-rule="evenodd" stroke-width="2">
                            <circle cx="22" cy="22" r="9.19894">
                                <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                                <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="22" cy="22" r="19.1968">
                                <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
                                <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
                            </circle>
                        </g>
                    </svg>`;
                        break;
                    case 'icon-3':
                        load_img = `<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                        <circle cx="15" cy="15" r="14.0788">
                            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="60" cy="15" r="9.92117" fill-opacity="0.3">
                            <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="105" cy="15" r="14.0788">
                            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate>
                        </circle>
                    </svg>`;
                        break;
                    case 'icon-4':
                        load_img = `<svg width="135" height="140" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                        <rect y="12.9812" width="15" height="114.037" rx="6">
                            <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="30" y="25.4812" width="15" height="89.0375" rx="6">
                            <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="60" width="15" height="64.0375" rx="6" y="37.9813">
                            <animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="90" y="25.4812" width="15" height="89.0375" rx="6">
                            <animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        <rect x="120" y="12.9812" width="15" height="114.037" rx="6">
                            <animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate>
                            <animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate>
                        </rect>
                        </svg>`;
                        break;
                    default:
                        load_img = `<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="2">
                                <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                                <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(131.354 18 18)">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </g>
                        </g>
                    </svg>`;
                }
                str = `${load_img}${option.message?`<span>${this.interceptString(option.message,3)}</span>`:''}`;
            }else {
                str = `<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                        <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(131.354 18 18)">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                        </path>
                    </g>
                </g>
            </svg>`;
            }
            this.createHtml('loading',str);
            this.fadeIn(18);
        },
        createHtml : function (type,msg='') {
            document.body.appendChild(this.dom_box);
            this.dom_box.appendChild(this.div_two);
            this.dom_box.setAttribute('class','cover');
            this.div_two.setAttribute('class','cover_box');
            this.dom_box.setAttribute('style',`width:${this.width_}px;height:${this.height_}px;`);
            this.dom_box.style.display = 'none';
            this.div_two.appendChild(this._div);
            this._div.innerHTML = msg;
            if(type === 'message'){
                this._div.setAttribute('class','cover_box_message');
            }else if(type === 'loading'){
                this._div.setAttribute('class','cover_box_loading');
            }else if(type === 'modal'){
                this._div.setAttribute('class','cover_box_modal');
                this._div.appendChild(this.div_iYiu);
            }
        },
        outload : function (time) {
            var that = this;
            var c = setTimeout(function(){
                that.fadeOut(30,c);
            },time?time:1000)
        },
        fadeIn : function (speed){
            if(this.dom_box.style.opacity != 1){
                var speed = speed || 30 ,that = this;
                var num = 0;
                var st = setInterval(function(){
                    num++;
                    that.dom_box.style.opacity = num/10;
                    that.dom_box.style.display = '';
                    if(num>=10)  {  clearInterval(st);  }
                },speed);
            }
        },
        fadeOut : function (speed,time){
            if(this.dom_box.style.opacity != 0){
                var speed = speed || 30 , num = 10,that = this;
                var st = setInterval(function(){
                    num--;
                    that.dom_box.style.opacity = num / 10 ;
                    if(num<=0) { clearInterval(st);time?clearTimeout(time):''; that.dom_box.style.display = 'none'; that.dom_box.remove(); }
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
    iYiu = function (option) {
        this.div_iYiu = document.createElement("div");
        this.btn_noe = document.createElement("button");
        this.btn_two = document.createElement("button");
        this.btn_theer = document.createElement("span");
    }
    
    iYiu.prototype = new popup();
    iYiu.prototype.createBox = function (param,success,error) {
        this.div_iYiu.setAttribute('class','yiu-message-box__btns');
        this.btn_noe.setAttribute('class','yiu-button yiu-button--default yiu-button--small');
        this.btn_two.setAttribute('class','yiu-button yiu-button--default yiu-button--small yiu-button--primary');
        this.btn_noe.setAttribute('type','button');
        this.btn_two.setAttribute('type','button');
        this.btn_noe.innerHTML = '取消';
        this.btn_two.innerHTML = '确认';
        this.div_iYiu.appendChild(this.btn_noe);
        this.div_iYiu.appendChild(this.btn_two);
        let that = this, str = `<div class="yiu-message-box__header"><div class="yiu-message-box__title"><span>${param.title}</span></div><div aria-label="Close" class="yiu-message-box__headerbtn" onclick="x()"><i class="yiu-message-box__close yiu-icon-close"></i></div></div>
        <div class="yiu-message-box__content"><div class="yiu-message-box__message"><p>${param.message}</p></div><div class="yiu-message-box__input" style="display: none;"><div class="yiu-input"><input type="text" autocomplete="off" placeholder="" class="yiu-input__inner"></div><div class="yiu-message-box__errormsg" style="visibility: hidden;"></div></div></div>`;
        that.createHtml('modal',str);
        that.fadeIn(2);
        that.onClick(that.btn_noe,function (e) {
            if(error&&typeof error == 'function'){
                that.outload();
                return error(e.target.innerText)
            }
        })
        that.onClick(that.btn_two,function (e) {
            if(success&&typeof success == 'function'){
                that.outload();
                return success(e.target.innerText)
            }
        })
    }
    iYiu.prototype.onClick = function (dom,callback) {
        dom.addEventListener("click",function(e){
            return callback(e);
        },true);
    }
    
}(window);
function x(){
    iYiu.prototype.outload(20)
}
