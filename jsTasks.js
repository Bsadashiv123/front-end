let date = new Date();

let day = date.getDay();
let hour = date.getHours();
let  minute = date.getMinutes();
let second = date.getSeconds();
let daylist = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'satday']


let checkam = (hour >= 12) ?  'PM' : 'AM';
let format = (hour >= 12) ? hour - 12 : hour;  //converting 24  hour format to 12 hour format


// console.log(`today is ${daylist[day]}`);
// console.log(`${format} ${checkam} : ${minute} : ${second}`);



//START BMI CALCULATOR
function getbmi(weight, height) {
    let bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    if (bmi < 18.5) console.log('under weight');
    else if (bmi >= 18.5 && bmi < 25) console.log('normal weight');
    else if (bmi >= 25 && bmi < 30) console.log('over weight');
    else console.log('obesity');
}

getbmi(55, 165)
//END BMI CALCULATOR