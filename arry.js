/*
* @Author: Administrator
* @Date:   2017-03-03 16:56:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-03 17:37:04
*/

Array.prototype.unique3 = function(){
 var res = [];
 var json = {};
 for(var i = 0; i < this.length; i++){
  if(!json[this[i]]){
   res.push(this[i]);
   json[this[i]] = 1;
  }
 }
 return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique3());

