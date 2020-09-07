/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  let mx = 0;
  let len = 0;
  if(input.length/2 %1 === 0){len = input.length/2}
  else{len = (input.length-1)/2}
  for(var i=2;i<len;i+=2){
    //document.writeln(i);
    for(var j=0;j<input.length-i;j++){
      let s = input.substring(j,j+i);
      let compareA = "";
      let compareB = "";
      for(var x=0;x<s.length/2;x++){
        compareA += "a";
        compareB += "b";
      }
      if(s.substring(0,s.length/2) === compareA && s.substring(s.length/2,s.length) === compareB){
        mx++;
      }
    }
  }
  if(input.length%2 != 0){
    let compareA = "";
    let compareB = "";
    for(var x=0;x<input.length/2;x++){
      compareA += "a";
      compareB += "b";
    }
    if(s.substring(0,input.length/2) === compareA && input.substring(input.length/2,input.length) === compareB){
      mx++;
    }
  }
  document.writeln(mx+"");
  return mx;
};
