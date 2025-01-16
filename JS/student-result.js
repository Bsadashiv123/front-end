//STUDENT MARKS WITH CONSTRUCTOR FUNCTION
let marks = [60,60,54,42, 88,65]    //marks user input

function Student(name, total, result, percentage, grade) {

    this.name = name,   
    this.total = total,
    this.result = result,
    this.percentage = percentage + '%',
    this.grade = grade;
  
}
let totalmarks = marks.reduce((prev, current) => prev + current);
let percentage =  Math.round((totalmarks / 600) * 100);
let result = marks.some(m => m < 35);
 result ? result  = 'fail' : result = 'pass'
let grade;

if(percentage > 90) grade = 'A+'
else if(result  == 'fail') grade = 'no grade provided for fail students';
else if(percentage > 80) grade = 'A'
else if(percentage > 70) grade = 'B+'
else if(percentage > 60) grade = 'B'
else if(percentage > 50) grade = 'C+'
else if(percentage > 35) grade = 'C'

else  grade = '--'

 

let  student1 = new Student('Sadashiv', totalmarks, result, percentage, grade)
console.log(student1)
//STUDENT MARKS WITH CONSTRUCTOR FUNCTION
