//your code here


let len =document.getElementById("letterCount");

let str =document.getElementById("evaluatedText");

str.addEventListener('keyup' ,(e) =>{


    let str1=str.value;
    
    document.getElementById("length").innerHTML= str1.length;

})





