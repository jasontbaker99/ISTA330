
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     let double = [];
     let once = [];
     for(let i=0;i<input.length;i++){
       if(once.includes(input[i])){
         if(!double.includes(input[i])){
           double.push(input[i]);
         }
       }else{
         once.push(input[i]);
       }
     }
    return double;
 };
