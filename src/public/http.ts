
const baseUrl = "";

async function http(url = '', params = {}, method = 'GET', type = 'fetch') {

  method = type.toUpperCase();
  url = baseUrl + url;

  if (method === "GET") {
    let dataStr = '';
    Object.keys(params).forEach(key => {
      dataStr += `${key}=${params[key]}&`
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
  }

  if (window.fetch && type === "fetch") {
    let requestConfig = {
      credentials: "include",
      method,
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      cache: "force-cache"
    }

    if (method === "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(params)
      })
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (err) {
      throw new Error(err);
    }
  } else {
    return new Promise((resolve, reject) => {
      let xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (err) {
          console.error(err)
        }
      }
      xhr.open(method, url, true);
      xhr.send(params);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let result = xhr.response;
            if (typeof result !== 'object') {
              result = JSON.parse(result)
            }
            resolve(result);
          } else {
            reject(xhr.status);
          }
        }
      }
    })
  }
}

export default http;