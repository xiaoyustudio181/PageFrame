/*
* @describe 返回找到的DOM元素
* @param id 元素的id
* */
function findID(id) {
    return document.getElementById(id);
}
/*
* @describe 返回找到的DOM元素
* @param className 元素的类名
* */
function findClass(className) {
    return document.getElementsByClassName(className);
}
/*
* @describe 返回找到的DOM元素
* @param tagName 元素的标签名
* */
function findTag(tagName) {
    return document.getElementsByTagName(tagName);
}
/*
* @describe 返回新的DOM元素
* @param tagName 元素的标签名
* */
function newElement(tagName) {
    return document.createElement(tagName);
}
/*
* @describe 返回新的文本节点
* @param text 文本节点的内容
* */
function newTextNode(text) {
    return document.createTextNode(text);
}
/*
* @describe 绑定点击事件到id
* @param id 元素的id
* @param func 绑定的方法
* */
function bindClick(id,func) {
    findID(id).addEventListener('click',func);
}
/*
* @describe 返回两数间的随机数 [min,max]
* @param min 返回的最小值
* @param max 返回的最大值
* */
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
/*
* @describe 输出消息到控制台
* @param content 输出的内容
* @param mode 输出的模式
* */
function msg(content,mode) {
    switch (mode){
        case 'd':console.dir(content);break;
        case 'i':console.info(content);break;
        case 'w':console.warn(content);break;
        case 'e':console.error(content);break;
        default:console.log(content);break;
    }
}
/*
* @describe 输出消息到页面
* @param content 输出的内容
* */
function write(content) {
    document.write('<br/>'+content);
}
/*
* @describe 获取当前时间的字符串
* @param mode 输出的模式
* */
function getNowTime(mode) {
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var day=now.getDay();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    var milliseconds=now.getMilliseconds();

    if(hours.toString().length==1)hours="0"+hours;
    if(minutes.toString().length==1)minutes="0"+minutes;
    if(seconds.toString().length==1)seconds="0"+seconds;
    if(milliseconds.toString().length==1)milliseconds="00"+milliseconds;
    else if(milliseconds.toString().length==2)milliseconds="0"+milliseconds;
    
    switch(day){
        case 1:day='星期一';break;
        case 2:day='星期二';break;
        case 3:day='星期三';break;
        case 4:day='星期四';break;
        case 5:day='星期五';break;
        case 6:day='星期六';break;
        case 0:day='星期天';break;
        default:break;
    }
    
    switch (mode){
        case 1:return year+'年'+month+'月'+date+'日 '+day+' '+hours+':'+minutes+':'+seconds+'.'+milliseconds;
        default:return year+'-'+month+'-'+date+' '+hours+':'+minutes+':'+seconds;
    }
    
}
/*
* @describe 数组移除指定元素
* @param element 要移除的元素
* */
Array.prototype.remove = function(element) {
    var index = this.indexOf(element);
    if (index > -1){
        this.splice(index, 1);
    }
};
