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



//MUTABLE IMMUTABLE EXAMPLE (mutable = object, imutable = primitive data )

// let mylist = [4,6,8]

// newlist = [...mylist]
// mylist.pop();
// console.log(mylist);
// console.log(newlist);

// //SORTING
// let myarray = [45,6,7,84,65]
// myarray.sort((a,b) => a - b)
// console.log(myarray);



//start CLOSURE
function fatherdetails() {
    let name = "shankar";
    function  childdetails() {
        console.log('ganesh is child of ' + name);  // name from parent function scope (closure)
    }

    return childdetails()
    
}
//console.log(fatherdetails())
//end CLOSURE



let emp = {name: 'sada', age: 35, skills: {skillone: 'javascript', skilltwo: 'html css'}}

let copyemp = {...emp}  //shallowcopy or clone
copyemp.age = 36  // age is not updating in emp object
copyemp.skills.skillthree = 'react'  // skills is updating in emp object

let deepemp = JSON.parse(JSON.stringify(emp))
deepemp.skills.skillone = 'JS'
//console.log(emp, deepemp);  //deep copy is working
//.table(deepemp);

let myarr =['one', 'two', 'three', 'four',  {other: ['six', 'seven']}]
let myarr2 =   JSON.parse(JSON.stringify(myarr))//shallow copy
myarr2[4].other.push('eight');
//myarr2.push('five')



















