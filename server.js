const http = require('http');
const fs = require('fs')
const url = require('url')
const port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}



const server = http.createServer(function(request, response){
    var baseURL = 'http://' + request.headers.host + '/';
    const parsedUrl = new url.URL(request.url, baseURL)
    const pathWithQuery = request.url
    let queryString = ''
    let search = parsedUrl.search
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    const path = parsedUrl.pathname
    const query = parsedUrl.query
    const method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('收到请求 路径（带查询参数）为：' + pathWithQuery)

    if(path === '/index.html' || path === '/'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        const res = fs.readFileSync('public/index.html')
        response.write(res)
        response.end()
    } else if (path === '/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        const res = fs.readFileSync('public/main.js')
        response.write(res)
        response.end()
    } else if (path === '/2.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        const res = fs.readFileSync('public/2.js')
        response.write(res)
        response.end()
    } else if (path === '/3.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        const res = fs.readFileSync('public/3.html')
        response.write(res)
        response.end()
    }else if (path === '/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        const res = fs.readFileSync('public/style.css')
        response.write(res)
        response.end()
    } else if (path === '/4.xml') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/xml;charset=utf-8')
        const res = fs.readFileSync('public/4.xml')
        response.write(res)
        response.end()
    }  else if (path === '/5.json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        const res = fs.readFileSync('public/5.json')
        response.write(res)
        response.end()
    }  else if(path === '/x'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(`body{color: red;}`)
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
