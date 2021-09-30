// refactoring
module.exports = {
  html: function(title, list, body) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
    </body>
    </html>
    `
  },
  list: function(filelist) {
    var list = '<ul>';
    var i = 0;
    while (i < filelist.length) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i++
    }
    list += '</ul>'
    return list
  }
}
// function templateHTML (title, list, body) {
//   return `
//   <!doctype html>
//   <html>
//   <head>
//     <title>WEB - ${title}</title>
//     <meta charset="utf-8">
//   </head>
//   <body>
//     <h1><a href="/">WEB</a></h1>
//     ${list}
//     ${body}
//   </body>
//   </html>
//   `
// }

// function templateList(filelist) {
//   var list = '<ul>';
//   var i = 0;
//   while (i < filelist.length) {
//     list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
//     i++
//   }
//   list += '</ul>'
//   return list
// }

