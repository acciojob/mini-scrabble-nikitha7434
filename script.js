//your code here


let len =document.getElementById("letterCount");

let str =document.getElementById("evaluatedText");

str.addEventListener('keyup' ,(e) =>{


    let str1=str.value;
    
    len.innerHTML= str1.length;

})





