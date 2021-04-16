const btnGetCss = document.querySelector('#btn-get-css')
const btnGetJs = document.querySelector('#btn-get-js')
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
