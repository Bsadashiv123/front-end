
async function getapidata(url) {
  
        let response = await fetch(url);
        let data = await  response.json();
        console.log(response.status);

};

let url = `https://fakestoreapi.com/products`;

//getapidata(url)
let members = {
    member1: {
        name: 'sadashiv',
        age: 34,
    },
    member2: {
        name: 'sarika',
        age: 33,
    },
    member3: {
        name: 'shanvika',
        age: 34,
    },
    member4: {
        name: 'shruthika',
        age: 2,
    }
}



//select an object from list of objects
// for(let member in members) {
//     let my = members[member];
//     if(members[member].name === 'sarika') {
//        // console.log(my);
//     }
// }

// let numbers = [1,2,3,4,5,6,7,8,9]

// numbers = numbers.map(number => {
//     return number = ' iam number'
  
// })

//console.log(numbers);


let numbers1 = [1,2,3,4, 5, 6, 7, 8]

// numbers1.forEach(function(num) {
//     console.log(num);
// });

let newnumber = numbers1.map(function(num) { return num * 2})
.filter(function(num) { return num < 10})

console.log(newnumber);