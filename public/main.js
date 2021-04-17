const btnGetCss = document.querySelector('#btn-get-css')
const btnGetJs = document.querySelector('#btn-get-js')
const btnGetHtml = document.querySelector('#btn-get-html')
const btnGetXml = document.querySelector('#btn-get-xml')
const btnGetJson = document.querySelector('#btn-get-json')
btnGetCss.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "/style.css");
    xhr.onreadystatechange = function (e) {
        console.log(e)
        if(xhr.readyState === 4 && xhr.status === 200) {
            let styleElement = document.createElement('style');
            styleElement.innerHTML = xhr.responseText;
            document.head.appendChild(styleElement)
        }
    }
    xhr.send();
})
btnGetJs.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "/2.js");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let scriptElement = document.createElement('script');
            scriptElement.innerHTML = xhr.responseText;
            document.body.appendChild(scriptElement)
        }
    }
    xhr.send();
})
btnGetHtml.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "/3.html");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let fragment = document.createElement('div');
            fragment.innerHTML = xhr.responseText;
            document.body.appendChild(fragment)
        }
    }
    xhr.send();
})
btnGetXml.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "/4.xml");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseXML)
        }
    }
    xhr.send();
})
btnGetJson.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "/5.json");
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    }
    xhr.send();
})