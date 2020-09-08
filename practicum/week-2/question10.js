/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
  let mindif = 11111;
  let m = [];
  let group = [];
  for(var i=0;i<input.length;i++){
    for(var j=i+1;j<input.length;j++){
      if(i!=j){
        if(mindif > (Math.min(Math.abs(input[i]-input[j]),Math.abs(input[j]-input[i])))){
          mindif = (Math.min(Math.abs(input[i]-input[j]),Math.abs(input[j]-input[i])));
        }
      }
    }
  }
  for(var i=0;i<input.length;i++){
    for(var j=i;j<input.length;j++){
      if(i!=j){
       let temp = [];
       if(mindif === (input[i]-input[j])){
        temp.push(input[j]);
        temp.push(input[i]);
        group.push(temp);
       }
       if(mindif === (input[j]-input[i])){
        temp.push(input[i]);
        temp.push(input[j]);
        group.push(temp);
       }
      }
    }
  }
  return group;
};
