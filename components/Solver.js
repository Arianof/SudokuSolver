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