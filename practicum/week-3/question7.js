/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
  return minP(M,M.length-1,M[0].length-1);//M.length-1,M[0].length-1);  
};

var minP = function(M, m, n) { 
  if (m == 0 && n == 0) {
    return M[m][n]; 
  }else{
    if(m < 0){
      return M[m][n] + minP(M, m, n-1);    
    }
    if(n < 0){
       return M[m][n] + minP(M, m-1, n); 
    }
    return M[m][n] + Math.min(minP(M, m-1, n), minP(M, m, n-1) ); 
  } 
};
