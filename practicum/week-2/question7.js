/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(m) {
  let n = [];
  for(var i=0;i<m[0].length;i++){
    let r = [];
    for(var j=0;j<m.length;j++){
      let temp = m[j];
      r.push(temp[i]);
    }
    n.push(r);
  }
  return n;
};
