let product = {
    style: 'soft',
    name: 'himalaya',
    ptype: 'baby powder',
    price: 70 + 'rs',
    manufactureyear: 2024,
    quantity: 5,
    runmachine: function() {
        console.log(this.ptype)   //'this' keyword refer to current object 
    },
    comparebest: function(other) {
        
        this.price > other.price ?  
        console.log(other.name + ' is cheap and best') : 
        console.log(this.name + ' is cheap best')


    }
}

let product2 = {
    style: 'smooth',
    name: 'dabur',
    ptype: 'paste',
    price: 60 + 'rs',
    manufactureyear: 2024,
    quantity: 5,
    runmachine: function() {
        console.log(this.ptype)   //'this' keyword refer to current object 
    }

}



//console.log(product.comparebest(product2))
let mypname = product['name']  //reassign key (product name) as myname


//for loop example
function makebiscuits(product) { 
    
    for(let i = 0; i<product.quantity; i++) 
    {
        console.log(`${product.style} ${mypname} ${product.ptype} at just ${product.price}`)
    }
}
//makebiscuits(product)


//while loop example
function whileexample() {
    let i = 1;   //initialization
    while (i <= 5)  //condition
    {
        console.log('welcome to world ' + i)
        i++  //increment
    }
}
//whileexample()


//do while example
function dowhile() {
    let i =  1;   //initialization
   do
    {
        if(i > 5) {
            console.log('your number is bigger than 5')
        }
        else {
            console.log(i)
            i++;  //increment
        }
        
    }
    while(i <=5)  //condition
}
//dowhile();