/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
  let s = n.toString();
  let sum = 0;
  let mn = 10;
  let mx = -1;
  for(var i=0;i<s.length;i++){
    if(mx < parseInt(s[i])){mx = parseInt(s[i])}
    if(mn > parseInt(s[i])){mn = parseInt(s[i])}
  }
  sum = mx - mn;
}
