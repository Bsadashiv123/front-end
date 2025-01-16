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





class Employees {
    constructor(name, age, salary, behaviour) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.behaviour = behaviour;
        
       
    }

    knowbehaviour() {
        console.log(`${this.name} is a ${this.behaviour} guy`);
    }

}

// function Employees (name, age, salary, behaviour) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.behaviour = behaviour;
//     this.knowbehaviour = function knowbehaviour () {
//         console.log(`${this.name} is a ${this.behaviour} guy`);
//     }
// }









// console.log(emp1);

let emp1 = new Employees ('sadashiv', 34,  50000, 'good');
let emp2 = new Employees ('shanvika', 5,  5000, 'ok');


//.knowbehaviour()



let calcAvgTeam = (round1, round2, round3) => {
    let total = round1 + round2 + round3;
    return  total / 3;


}


let apteam = calcAvgTeam(45,6,78)
let tsteam = calcAvgTeam(133,116,78)


let checkResult = (apteam, tsteam) => {

    if(apteam >= 2 * tsteam) {
        console.log('apteam won ' +  apteam);

    }

    else if (tsteam >= apteam * 2) {
        console.log('tsteam won ' + tsteam);
    } 

    else {
        console.log('no one won');
    }
}
console.log(apteam, tsteam);

checkResult(apteam, tsteam)



//CLASS concepts (USED CLASES TO CREAE OBJECTS)

class Festival {
    constructor(name, god) {
        this.name = name;
        this.god = god;
    }

    greetings() {
        console.log(`we are celebrating ${this.name} and pray to ${this.god}`);
    }
}

let diwali = new Festival('diwali', 'lakshmi devi')
let chavithi = new Festival('chavithi', 'ganesh')

console.log(diwali, chavithi);

//END CLASS concepts (USED CLASES TO CREAE OBJECTS)




////////////// START CHECK ARRAY SAME OR NOT EXAMPLE //////////////
let str1 = 'one'
let str2 = 'one'

// console.log(arr1 === arr2);
// console.log(str1 === str2);

function checkArray(arr1, arr2) {
    if(arr1.length === arr2.length) {
        return false
    }

    for (let  i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]) {
            return false;
        }
    }

    return true;
}

let arr1 = ['one', 'two']
let  arr2 = ['one', 'two']

//console.log(checkArray(arr1, arr2));

////////////// END CHECK ARRAY SAME OR NOT EXAMPLE //////////////



////////////// START KEYWORD IN CLASS  //////////////
class  Person {
    static iamstaticname = 'static person';

    static  greet() {
        console.log('hello good morning');
    }


    constructor(name) {
        this.name = name
    }

    getpersonname() {
        console.log(this.name);
    }
}

let user1 = new Person('sadashiv')
// console.log(user1.name);  //sadashiv
// console.log(user1.greet);  //undefined
// console.log(Person.iamstaticname);  //static person
//Person.greet();  //static person

////////////// END KEYWORD IN CLASS  //////////////


