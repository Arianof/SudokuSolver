export function showBoard(){
       const board = document.querySelector('#puzzle');
       const squares = 81;
       for(let i = 0; i< squares; i++){
           const inputElement = document.createElement('input');
           inputElement.setAttribute('type' , 'number');
           inputElement.setAttribute('max' , '9');
           inputElement.setAttribute('min' , '1');
           inputElement.setAttribute('id' , 'cell');
        
           board.appendChild(inputElement);
       }

}