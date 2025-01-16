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

