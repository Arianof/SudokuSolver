let board = [
 [],
 [],
 [],
 [],
 [],
 [],
 [],
 [],
 []
]
export function insertValues(){
 const inputs = document.querySelectorAll('input');
 for(let i = 0 ; i < 81 ; i++){
     if(inputs[i].value){
       board[Math.floor(i / 9)][i % 9] = parseInt(inputs[i].value);
       inputs[i].classList.add('input_el');
     }else{
      board[Math.floor(i / 9)][i % 9] = 0;
      inputs[i].classList.add('empty_el');
     }
 }
}

export function solve(row , col){
   if(row == 8 && col == 9)
      return true;
  
   if(col == 9){
    row++;
    col = 0;
   }

   if(board[row][col])
      return solve(row, col + 1);

   for(let i = 1 ; i < 10 ; i++){
       if(isSafe(row , col , i)){
          board[row][col] = i;
          if(solve(row , col + 1))
             return true;
       }
       board[row][col] = 0;
   }
   return false;
}
function isSafe(row , col , num){
 for(let i = 0 ; i < 9 ;i++){
     if(board[row][i] == num)
        return false;
 }
 for(let i = 0 ; i < 9 ;i++){
     if(board[i][col] == num)
        return false;
 }
 let startRow = row - row % 3; 
 let startCol = col - col % 3;
 
 for(let i = 0 ; i < 3 ; i++)
     for(let j = 0 ; j < 3 ; j++)
         if(board[i + startRow][j + startCol] == num)
            return false;

 return true;
}
export function insertAnswers(){
 const inputs = document.querySelectorAll('input');
 let k = 0;
 for(let i = 0 ; i < 9; i++){
     for(let j = 0 ; j < 9 ; j++){
         inputs[k].value = board[i][j];
         k++;
     }
 }
}
