/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
   let mid = 0;
   let n = input.length;
   if((n/2)%1 === 0){
    mid = n/2;
    return (input[mid-1]+input[mid])/2;
   }else{
    mid = (n-1)/2;
    return input[mid];
   }
};
