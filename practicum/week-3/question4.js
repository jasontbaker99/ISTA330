/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  let power = [];
  let len = Math.pow(2,input.length);
  for(let i=0;i<len;i++){
    let temp = [];
    for(let j=0;j<input.length;j++){
      if((i & (1 << j)) > 0){
        temp.push(input[j]);
      }
    }
    power.push(temp);
  }
  power.sort();
  power.sort(function(b, a){
    return b.length - a.length;
  });
  //for(let i=0;i<power.length;i++){
  //  document.writeln("["+power[i]+"]");
  //}
  return power;
};
