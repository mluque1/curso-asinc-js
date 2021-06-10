let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const XHTTP = new XMLHttpRequest();
        XHTTP.open('GET', url_api, true);
        XHTTP.onreadystatechange = (() => { 
            if (XHTTP.readyState === 4){
                (XHTTP.status === 200) 
                    ? resolve(JSON.parse(XHTTP.responseText))
                    : reject(new Error('Error ' + url_api))
            }
        });
        XHTTP.send();
    });
}

module.exports = fetchData;