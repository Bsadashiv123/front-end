
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



// 0 to   50km     200rs   0 to 10kg      10 to 50kg =  400rs
// 51 to  100km    300rs   0 to 10kg                   600rs
// 101to  200km    400rs   0 to 10kg                   800rs
// 201 to 500km    500rs   0 to 10kg                   1000rs
// 501 to 1000km   600rs   0 to 10kg                   2000rs 
 


let numbers1 = [1,2,3,4, 5, 6, 7, 8]




// let getparcelprice = function(distance, weight) {

//     if(distance <= 50 && weight <= 10 || distance <= 50 && weight <= 50) {

//         if(weight > 10 && weight <= 50) {
//             console.log(`your parcel amount is 400rs`)
//         }

//         else {
//             console.log(`your parcel amount is 200rs`)
//         }
        

      
//     }

  
//     else if(distance <= 100 && weight <= 10 || distance <= 100 && weight <= 50) {

//         if(weight > 10 && weight <= 50) {
//             console.log(`your parcel amount is 600rs`)
//         }

//         else {
//             console.log(`your parcel amount is 300rs`)
//         }
        

      
//     }

  
//     else if(distance <= 200 && weight <= 10 || distance <= 200 && weight <= 50) {

//         if(weight > 10 && weight <= 50) {
//             console.log(`your parcel amount is 800rs`)
//         }

//         else {
//             console.log(`your parcel amount is 400rs`)
//         }
        

      
//     }

 
//     else if(distance <= 500 && weight <= 10 || distance <= 500 && weight <= 50) {

//         if(weight > 10 && weight <= 50) {
//             console.log(`your parcel amount is 1000rs`)
//         }

//         else {
//             console.log(`your parcel amount is 500rs`)
//         }
        

      
//     }

   
//     else if(distance <= 1000 && weight <= 10 || distance <= 1000 && weight <= 50) {

//         if(weight > 10 && weight <= 50) {
//             console.log(`your parcel amount is 1200rs`)
//         }

//         else {
//             console.log(`your parcel amount is 600rs`)
//         }
        

      
//     }

//     else if(weight >50) {
//         console.log(`service is unabailable to this much of weight`);
//     }

//     else {
//         console.log(`service is unavailable to this distance`);
//     }


    

// }


// let getparcelprice = function(distance, weight) {
//     const pricing = {
//         "0-50": { "0-10": 200, "11-50": 400 },
//         "51-100": { "0-10": 300, "11-50": 600 },
//         "101-200": { "0-10": 400, "11-50": 800 },
//         "201-500": { "0-10": 500, "11-50": 1000 },
//         "501-1000": { "0-10": 600, "11-50": 1200 }
//     };

//     if (weight > 50) {
//         console.log(`Service is unavailable for this much weight`);
//         return;
//     }

//     let distanceKey, weightKey;

//     // Determine the distance range
//     if (distance <= 50) distanceKey = "0-50";
//     else if (distance <= 100) distanceKey = "51-100";
//     else if (distance <= 200) distanceKey = "101-200";
//     else if (distance <= 500) distanceKey = "201-500";
//     else if (distance <= 1000) distanceKey = "501-1000";
//     else {
//         console.log(`Service is unavailable for this distance`);
//         return;
//     }

//     // Determine the weight range
//     if (weight <= 10) weightKey = "0-10";
//     else weightKey = "11-50"; // since we already checked for weight > 50

//     // Get the price from the pricing structure
//     const price = pricing[distanceKey][weightKey];
//     console.log(`Your parcel amount is ${price} rs`);
// }


let getparcelprice = function(distance, weight) {
    const pricing = {
        "0-50": { "0-10": 200, "11-50": 400 },
        "51-100": { "0-10": 300, "11-50": 600 },
        "101-200": { "0-10": 400, "11-50": 800 },
        "201-500": { "0-10": 500, "11-50": 1000 },
        "501-1000": { "0-10": 600, "11-50": 1200 }
    };

    let distanceKey, weightKey;

    if(weight > 50) {
        console.log(`service is unabailable to this much of weight`);
        return;
        
       
      
    }

   



    if (distance <= 50) distanceKey = '0-50';

    else if(distance <= 100) distanceKey = '51-100';
    else if(distance <= 200) distanceKey = '101-200';
    else if(distance <= 500) distanceKey = '201-500';
    else if(distance <= 1000) distanceKey = '501-1000';
    else {
        console.log(`service is unabailable to this much of distance`);
       return;
    }

    if (weight <= 10) weightKey = '0-10';
    else  weightKey = '11-50';

   
    let price = pricing[distanceKey][weightKey];
    
    console.log(`distance: ${distance}KM \nweight: ${weight}KG \ntotal price: ${price}rs`);
 
    



   

}

// Example usage
getparcelprice(1003, 51);

