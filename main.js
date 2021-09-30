var http = require('http');
var fs = require('fs');
var url = require('url');
var template = require('./lib/template.js')

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if(pathname === '/'){
    if(queryData.id === undefined) {
      fs.readdir('./data', function(err, filelist){
        var title = 'welcome'
        var description = 'hello, node.js'
        var list = template.list(filelist)
        var html = template.html(title, list, `<h2>${title}</h2><p>${description}</p>`);
        response.writeHead(200);
        response.end(html);
      })
    } else {
      fs.readdir('./data', function(err, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.list(filelist)
          var html = template.html(title, list, `<h2>${title}</h2><p>${description}</p>`);
          response.writeHead(200);
          response.end(html);
        });
      }); 
    }
  }else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(1234);

//https://opentutorials.org/course/3332/21064