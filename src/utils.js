export const generateRoom = (peopleNames, row, column) =>{  
  const peopleMatrix = [];
  for (let i=0; i < row; i++){
    peopleMatrix[i] = [];
    for(let y=0; y < column; y++){
      peopleMatrix[i][y] = peopleNames.splice(-1,  1)[0];
    }
  }
  return peopleMatrix;
}
export const createpeopleNames = (peopleNames, people, length) =>{
  for(let i = 0; i < length; i++) {
    peopleNames[i] = i < people ? `user${i+1}` : '';
  }
  return peopleNames;
}

export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const amountUnhappy = (matrix,  row, column) => {
  let points = 0;
  const used = [];
  for (let i=0; i < row; i++){    
    for(let y=0; y < column; y++){
      if (matrix[i][y] && i+1 < row && matrix[i+1][y] && !finded(used, matrix[i+1][y])) {
        points = points + 1;
        used.push(matrix[i][y]);
      } 
      if (matrix[i][y] && y+1 < column && matrix[i][y+1] && !finded(used, matrix[i][y+1])) {
        points = points + 1;
        used.push(matrix[i][y]);
      } 
      if (matrix[i][y] && i-1 >= 0 && matrix[i-1][y] && !finded(used, matrix[i-1][y])) {
        points = points + 1;
        used.push(matrix[i][y]);
      }
      if (matrix[i][y] && y-1 >= 0 && matrix[i][y-1] && !finded(used, matrix[i][y-1])) {
        points = points + 1;
        used.push(matrix[i][y]);
      }
    }
  }
  return points;
}

const finded = (arr, item) =>{
  return !!arr.find(i => i === item);
}
export const TOP = 'top';
export const RIGHT = 'right';
export const BOTTOM = 'bottom';
export const LEFT = 'left';
export const ITEM = 'item';

export const border = ([i, y], row, column, matrix) => {
  
  const border=[], used = [];
  if (matrix[i][y] && i+1 < row && matrix[i+1][y] && !finded(used, matrix[i+1][y])) {   
    border.push(BOTTOM);
    used.push(matrix[i][y]);
  } 
  if (matrix[i][y] && y+1 < column && matrix[i][y+1] && !finded(used, matrix[i][y+1])) {    
    border.push(RIGHT);
    used.push(matrix[i][y]);
  } 
  if (matrix[i][y] && i-1 >= 0 && matrix[i-1][y] && !finded(used, matrix[i-1][y])) {    
    border.push(TOP);
    used.push(matrix[i][y]);
  }
  if (matrix[i][y] && y-1 >= 0 && matrix[i][y-1] && !finded(used, matrix[i][y-1])) {    
    border.push(LEFT);
    used.push(matrix[i][y]);
  }
  return border;
}
export const formatBorder = (b) => {
  let classBorder = ITEM;
    b.forEach(c =>{
      switch (c){
        case TOP:
          classBorder = `${classBorder} ${TOP}`;
          break;
        case RIGHT:
          classBorder = `${classBorder} ${RIGHT}`;
          break;
        case BOTTOM:
          classBorder = `${classBorder} ${BOTTOM}`;
          break;
        case LEFT:
          classBorder = `${classBorder} ${LEFT}`;
          break;              
      }
    });
    return classBorder;
}