/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
  let num = 0;
  if(n == 0){num = 0}
  if(n == 1){num = 1}
  if(n >= 2){
    let count = 1;
    let prev1 = 1;
    let prev2 = 0;
    let curr;
    while(count != n){
      curr = prev1 + prev2;
      prev2 = prev1;
      prev1 = curr;
      count ++;
    }
    num = curr;
  }
  return num;
};
