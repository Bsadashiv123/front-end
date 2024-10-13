
//let products = [];
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=> {
                products = json;
                for(let product of products) {
                   
                   //console.log(product);
                    
                }
               
                
            })


function add(a, b, callback) {
   let result =  a + b;
   callback(result)
    
}


function getresult(a, b, operation) {
     operation(a, b, function(result) {
        console.log(result);

     })
   
}


//getresult(10, 20, add);


//CALLBACK FUNCTION EXAMPLE
function hbd(name) {
    console.log("Happy Birthday " + name);
}

function achieve(name) {
    console.log("Congratulations " + name);
}

function marry(name) {
    console.log("Happy Married Life " + name);
}

function wishes(name, wishtype) {
    wishtype(name)
}
//wishes('Shanvika', achieve)



