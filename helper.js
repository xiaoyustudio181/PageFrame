//== Helper version 180301.1444
function findID(id) {return document.getElementById(id);}
function findClass(className) {return document.getElementsByClassName(className);}
function findTag(tag) {return document.getElementsByTagName(tag);}
function newElement(tagName) {return document.createElement(tagName);}
function newTextNode(text) {return document.createTextNode(text);}
function readObj(obj) {//显示对象包含的所有信息
    var div=newElement('div');
    div.style.fontSize='20px';
    div.style.paddingLeft='8px';
    document.body.appendChild(div);
    div.appendChild(newElement('hr'));
    div.appendChild(newTextNode(obj.toString()));
    for(var key in obj){
        if(typeof obj[key]=='function')
            continue;
        generateline(key);
    }
    for(key in obj){
        if(typeof obj[key]!='function')
            continue;
        generateline(key);
    }
    function generateline(key) {
        var p=newElement('p');
        var text=newTextNode(key+' => '+obj[key]);
        p.appendChild(text);
        div.appendChild(p);
    }
    div.appendChild(newElement('hr'));
}
//=================================================绑定事件
function bindClick(id,func) {findID(id).addEventListener('click',func);}
//=================================================方法封装
function random(min,max) {return Math.floor(Math.random()*(max-min+1)+min);}//两数间的随机数[min,max]
function msg(Content,Type) {
    switch (Type){
        case 'a':alert(Content);break;
        case 'l':console.log(Content);break;
        case 'd':console.dir(Content);break;
        case 'i':console.info(Content);break;
        case 'w':console.warn(Content);break;
        case 'e':console.error(Content);break;
        default:console.log(Content);break;
    }
}
function getNowTime(TypeID) {
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
    
    switch (TypeID){
        case 1:return year+'年'+month+'月'+date+'日 '+day+' '+hours+':'+minutes+':'+seconds+'.'+milliseconds;
        default:return year+'-'+month+'-'+date+' '+hours+':'+minutes+':'+seconds;
    }
    
}
//=================================================方法新增
Array.prototype.remove = function(element) {//数组移除指定元素
    var index = this.indexOf(element);
    if (index > -1)this.splice(index, 1);
};
//=================================================