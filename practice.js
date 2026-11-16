// Math.random() practice

const randomNum = () => {
    return Math.floor(Math.random () * 10 );
}

//console.log(randomNum());

//console.log(0.1 + 0.3);


//console.log(Math.random());

function  calculateNumbers (min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

 const finalResult = calculateNumbers(100,1);
console.log(finalResult);


function findAnswer(){
    return Math.floor(Math.random() * 10) + 5;
 }

 //console.log(findAnswer());


 //console.log(Math.floor(Math.random() * 100 ) + 1);