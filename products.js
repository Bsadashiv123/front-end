
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


let arraylist = ['one', 'two', 'three', 'four']


console.log(arraylist);

// function pushit(items, itemname) {
//    items.push(itemname)

// }

// function popit(items, itemname) {
//    items.pop(itemname)
// }
// function shiftit(items, itemname) {
//    items.pop(itemname)
// }
// function unshift(items, itemname) {
//    items.pop(itemname)
// }

// function showitems(numbers, cback, itemname) {
//    cback(numbers, itemname);
//    console.log(numbers);
// }


// showitems(arraylist, pushit, 'three')



