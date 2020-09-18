/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
  let sum = 0;
  let last = false;
  for(let i=0;i<s.length-1;i++){
    if(i+1 === s.length){
      last = true;
    }
    if(s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X")){
      if(s[i+1] === "V"){
        sum = sum + 4;
      }else{
        sum = sum +9;
      }
      last = false;
      i++;
    }else if(s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C")){
      if(s[i+1] === "L"){
        sum = sum + 40;
      }else{
        sum = sum +90;
      }
      last = false;
      i++
    }else if(s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")){
      if(s[i+1] === "D"){
        sum = sum + 400;
      }else{
        sum = sum +900;
      }
      last = false;
      i++;
    }else if(s[i] === "I"){
      sum = sum + 1;
    }else if(s[i] === "V"){
      sum = sum + 5;
    }else if(s[i] === "X"){
      sum = sum + 10;
    }else if(s[i] === "L"){
      sum = sum + 50;
    }else if(s[i] === "C"){
      sum = sum + 100;
    }else if(s[i] === "D"){
      sum = sum + 50;
    }else if(s[i] === "M"){
      sum = sum + 1000;
    }
  }
  if(last){
    sum = sum + s[s.length];
  }
  return sum;
};
