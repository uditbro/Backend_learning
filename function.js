//to get all the values in an array just like an shopping cart.

function countCartPrice(...num1){
    
    return num1;
}


function calculatePrice(num1){
    const sum = 0;
    for(let i=0; i< num1.length; i++){
        i += sum;        
    }
    return sum;
}


console.log(countCartPrice(200, 400, 600, 800, 1000));
console.log(calculatePrice(countCartPrice));