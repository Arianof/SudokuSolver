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