
let number = 10;


function counting(){    
    setTimeout(() => {
       s = document.getElementById('numbers').innerHTML = number;  
    },1000)
    setTimeout(() => {
         document.getElementById('numbers').innerHTML = number -1;
    },2000)

    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -2;
   },3000)  

   setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -3;
    },4000)
    
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -4;
    },5000)
    
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -5;
    },6000)
    
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -6;
    },7000)
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -7;
    },8000)
    
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -8;
    },9000)
    
    setTimeout(() => {
        document.getElementById('numbers').innerHTML = number -9;
    },10000)
    
    setTimeout(() => {
        document.getElementById('numbers').remove();
        document.getElementById('indepen').innerHTML = " HAPPY INDEPENDENCE";
    },11000)
} 


