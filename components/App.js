import { showBoard } from "./ShowBoard.js";
import { insertValues } from "./Solver.js";
import { solve } from "./Solver.js";
import { insertAnswers } from "./Solver.js";
const solveBtn = document.getElementById('solve_btn');
const resetBtn = document.getElementById('reset_btn');

function main(){
 showBoard();
 solveBtn.addEventListener('click' , () =>{
  insertValues();
  if(solve(0 , 0)){
    insertAnswers();
  }else{
   alert("Can't Solve this Sudoku!");
  }
 })
 resetBtn.addEventListener('click' , () =>{
  window.location.reload(true);
 })

}
main();