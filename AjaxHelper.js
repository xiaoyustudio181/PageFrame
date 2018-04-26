//version 180406.1739
function AjaxHelper(requestMethod, url, data, callback, isFormData, isAsync) {
    var test = requestMethod.toUpperCase();//值应为"get"或"post"
    if (test !== 'GET' && test !== 'POST') {
        throw new Error('发送请求的方式不正确。请检查AjaxHelper的参数。');
    } else this.requestMethod = test;
    if (typeof callback != 'function') {
        throw new Error('接收请求的回调函数不正确。请检查AjaxHelper的参数。');
    }
    if (isFormData == undefined) {//默认值
        isFormData = false;
    }
    if (isAsync == undefined) {//默认值
        isAsync = true;
    }
    var ip = 'localhost';//192.168.10.176
    var baseUrl = '/MyThinkPHP3.2.3Full/index.php/Admin/';
    //跨域访问的写法：'http://' + this.ip + '/MyThinkPHP3.2.3Full/index.php/Admin/'
    //本域访问的写法：'/MyThinkPHP3.2.3Full/index.php/Admin/'
    var options = {};
    //=====================================
    var url = {url: baseUrl + url + '.html'};//
    var type = {type: requestMethod};
    var async = {async: isAsync};//同步异步
    var data = {data: data};
    var dataType = {dataType: 'json'};
    //========使用FormData提交需要（可提交上传文件）formData=new FormData($('#form1')[0])
    var cache = {cache: true};
    var contentType = {contentType: false};
    var processData = {processData: false};
    //=====================================
    var success = {
        success: callback
        /*success: function (data) {
            console.log(data);
        }*/
    };
    var error = {
        error: function (xhr, status, message) {
            console.error('Ajax异常消息: ' + status + ' ' + message);
        }
    };
    //=====================================
    if (isFormData) {
        options = Object.assign(url, type, async, data, dataType, success, error,
            cache, contentType, processData);
    } else {
        options = Object.assign(url, type, async, data, dataType, success, error);
    }
    if (isAsync) {//异步
        $.ajax(options);
        return 0;
    } else {//同步
        return $.ajax(options).responseJSON;
    }
};