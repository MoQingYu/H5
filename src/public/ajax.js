function creatXHR(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    } else if(window.ActiveXObject){
        var versions = ['MSXML2.XMLHttp','Microsoft.XMLHTTP'];
        for(var i = 0, len = versions.length; i < len; i++){
            try{
                return new ActiveXObject(versions[i]);
            } catch(e) {

            }
        }
    }else{
        throw new Error("浏览器不支持XHR对象");
    }
}

var xhr = createXHR();

function ajax(obj){
    obj.url = obj.url + "?rand=" + Math.random();
    obj.data = params(obj.data);
    if(obj.method === "get"){
        obj.url += obj.url.indexOf('?') === -1 ? '?' + obj.data : '&' + obj.data;
    }
    if(obj.async === true){
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                callback();
            }
        }
        xhr.open(obj.method, obj.url, obj.async);
        if(obj.method === 'post'){
            xhr.serRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(obj.data);
        }else{
            xhr.send(null);
        }
        if(obj.async === false){
            callback();
        }
        function callback(){
            if(xhr.status === 200) {
                onj.success(xhr.responseText);
            }else{
                alert("获取数据错误！错误代号：" + xhr.status + ",错误信息：" + xhr.statusText);
            }
        }
    }
    function params(data){
        var arr = [];
        for(var i in data){
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
    }
    return arr.join('&');
}