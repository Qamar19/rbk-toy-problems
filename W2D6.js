/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.
loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d
*/

function loopAString(string) {
  var i =0;
  while(i< string.length){
  	console.log(string[i])
  	i++;
  }
}
loopAString('abcd');


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here
function reverseStr(string){
  var str='';
  var i = 0;
  while(i <= string.length){
    //str += string[string.length-i];
    console.log(string[string.length-i],i-1)
    i++;
  }
}
reverseStr('hello')



