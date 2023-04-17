
let number = 10;


function counting(){    
    setTimeout(() => {
       s = document.getElementById('go').innerHTML = number;  
    },1000)
    setTimeout(() => {
         document.getElementById('go').innerHTML = number -1;
    },2000)

    setTimeout(() => {
        document.getElementById('go').innerHTML = number -2;
   },3000)  

   setTimeout(() => {
        document.getElementById('go').innerHTML = number -3;
    },4000)
    
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -4;
    },5000)
    
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -5;
    },6000)
    
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -6;
    },7000)
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -7;
    },8000)
    
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -8;
    },9000)
    
    setTimeout(() => {
        document.getElementById('go').innerHTML = number -9;
    },10000)
    
    setTimeout(() => {
        document.getElementById('go').remove();
        document.getElementById('indepen').innerHTML = " HAPPY INDEPENDENCE DAY";
    },11000)
} 


