function Ajax() {}

Ajax.prototype.post = function( url, params) {
    return creatAjax("POST", url, params);
}

Ajax.prototype.get = function(url="", params="") {
    return creatAjax("GET", url, params);
}


function creatAjax(method, url, params) {
   return new Promise((resolve, reject)=>{
        let http;
        if(window.XMLHttpRequest){
            http = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            try{
                http = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(err) {
                console.error(err)
            }
        }
        http.open(method, url, true);
        http.send(params);
        http.onreadystatechange = function() {
            if(http.readyState === 4) {
                if(http.status === 200) {
                    resolve(http.responseText);
                } else {
                    reject(http.status);
                }
            }
        }
   })
}

export const ajax = new Ajax();