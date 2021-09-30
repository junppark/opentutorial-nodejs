// function a(){
//   console.log('a')
// }
var a = function(){
  console.log('a')
}
// a()

function showfunc(callback){
  callback()
}
showfunc(a)