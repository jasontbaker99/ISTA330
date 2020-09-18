/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
  let coor = [0,0];
  let been = [[0,0]];
  for(let i=0;i<s.length;i++){
    if(s[i] === "N"){
      coor[1] = coor[1]+1;
    }
    if(s[i] === "S"){
      coor[1] = coor[1]-1;
    }
    if(s[i] === "E"){
      coor[0] = coor[0]+1;
    }
    if(s[i] === "W"){
      coor[0] = coor[0]-1;
    }
    if(been.includes(coor)){
      return true;
    }
    let temp = [0,0];
    temp[0] = coor[0];
    temp[1] = coor[1];
    been.push(temp);
  }
  return false;
};
