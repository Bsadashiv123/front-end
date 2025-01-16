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
 
 

 // HIGHER ORDER FUNCTION

 function addition(a, b) {
   return a + b;
 }
 function multiply(a, b) {
   return a * b;
 }


 //higher order function
 function higherOrderFunction (x, y, operation) {
   return operation(x, y)

 }

 let result = higherOrderFunction(10, 20, addition) // calling multiply as orgument in higher order function


 //console.log(result)  


 function myresult(res) {
    console.log(res);

 }
 

 function add (a, b, callback) {
   let result = a + b;
   callback(result)
 }

add(20, 20, myresult)