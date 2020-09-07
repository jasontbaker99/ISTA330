/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let row = [];
  let triangle = [1];
  for(var i=0;i<n-1;i++){
    let temp = row
    row = [1];
    for(var j=0;j<temp.length-1;j++){
      row.push((temp[j]+temp[j+1]));
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
