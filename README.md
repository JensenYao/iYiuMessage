# iYiuMessage
iYiu Message 提示消息组件

## 初版

初版写出来有一段时间了，一直没有时间去整理发布博客，今天来给大家介绍一下iYiuMessage。<br>


iYiuMessage 简单的运用 prototype 来完成的第一版。<br>

它现在可以自定义 Message 信息，也可以自定义 loading 信息和提示图标的样式。<br>

下面说一下它使用的方法：<br>

### 引入和创建iYiuMessage实例
````
<script src="./js/iYiu.js" type="text/javascript"></script><br>
<script type="text/javascript">
    //创建iYiuMessage实例
    var iYiuMessage = new iYiu();
</script>
````
### Message消息提示：
````
iYiuMessage.message('我是错误信息，但是我不告诉你哪里错了！');
````
#### 效果： 

<img alt="" class="has" src="https://img-blog.csdnimg.cn/20190827183656312.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0plbnNlbl9ZYW8=,size_16,color_FFFFFF,t_70">


### Loading加载提示（一）：
````
iYiuMessage.inload();//加载
iYiuMessage.outload(6000);//结束加载
````
#### 效果：

<img alt="" class="has" src="https://img-blog.csdnimg.cn/20190827183850637.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0plbnNlbl9ZYW8=,size_16,color_FFFFFF,t_70">

### Loading加载提示（二）：
````
iYiuMessage.inload({
    icon:'./image/oval.svg'
});
iYiuMessage.outload(6000);
````
#### 效果：

<img alt="" class="has" src="https://img-blog.csdnimg.cn/2019082718404610.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0plbnNlbl9ZYW8=,size_16,color_FFFFFF,t_70">


### Loading加载提示（三）：
````
iYiuMessage.inload({
    icon:'./image/oval.svg',
    message:'加载中'
});
iYiuMessage.outload(6000);
````
#### 效果：

<img alt="" class="has" src="https://img-blog.csdnimg.cn/20190827184154707.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0plbnNlbl9ZYW8=,size_16,color_FFFFFF,t_70">

## 8月29日更新

#### 暂定为 0.0.2版吧！

新增createBox询问模态框实例如下：( 可能存在一些小小的BUG )

### createBox询问模态框：
````
iYiuMessage.createBox({
    title:'删除',
    message:'你请定要删除该组件吗？'
},function(res){
    iYiuMessage.inload('我点的是确认');
},function(err){
    iYiuMessage.message('我点的是取消');
})
````
#### 效果：

<img alt="" class="has" src="https://img-blog.csdnimg.cn/20190829192220322.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0plbnNlbl9ZYW8=,size_16,color_FFFFFF,t_70">


 
