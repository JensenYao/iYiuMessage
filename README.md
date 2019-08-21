# iYiuMessage
iYiu Message 提示消息组件

#初版

##使用方法

new iYiu() new出实例对象；

##对象中对应的方法

message(string) 为消息类提示！
string 为正常的提示语即可。

inload(Object) 加载类提示！
Object 为所接收的对象，对象内存icon为自定义图标，message为提示语，练个参数都可为空。

outload(number) 取消加载类提示！
number 为取消提示的时间。

#使用方法
var iYiu = new iYiu();

iYiu.message('成功的提示！');

iYiu.inload({
    icon:'图片地址',
    message:'加载中'
});

iYiu.outload(1000);
