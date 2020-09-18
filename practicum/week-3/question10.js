/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
  while(s.includes(" ")){
    s = s.replace(" ", '');
    s = s.replace("?", '');
    s = s.replace("!", '');
    s = s.replace(",", '');
    s = s.replace(".", '');
  }
  s = s.toLowerCase();
  let len = 0;
  if(s.length%2 == 0){
    len = s.length/2;
  }else{
    len = (s.length-1)/2
  }
  for(let i=0;i<len;i++){
    if(s[i] !== s[s.length-1-i]){
      return false;
    }
  }
  return true;
};
