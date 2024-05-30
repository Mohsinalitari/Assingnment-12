//while looops
//1 Write a js program to print all natural numbers from 1 to n. - using while loop
     var n=prompt('Enetr the number')
         n =Number.parseInt(n)
      var i=0;
      while(i>=n){
        console.log(i);
        i++;
      }   
//2 Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var R=prompt('Enter the number')
R=parseInt(R)
var i=R;
while(i>=0) {
     console.log(i);
     i--;
}          
//3 Write a js program to find sum of all natural numbers between 1 to n.
var N = prompt ('Enter the VAlue of number')
n=parseInt(n)
sum=0;
var i=1;
while(i<=n){
sum=sum + i;
i++;
}
console.log(sum);
//4 Write a js program to print all even numbers between 1 to 100. - using while loop
var E=prompt("Enter the number")
E=Number.parseInt(E)   // This line is fine, it converts the input to an integer
 //You're setting E to 0 here, which will override the user's input
 //Remove this line to keep the user's input intact
 //E = 0;
var i=0;
while(i<=E){  // You should compare i with E, not 1
    if(i%2==0) {  // Corrected the condition for even numbers
          console.log(i);// Output even numbers 
       }
       i++;            
}
//5 Write a js program to print all odd number between 1 to 100.
      
var o = prompt('Enter the number'); 
o = parseInt(o);
var i = 1;

while (i <= o) {
    console.log(i);
    i += 2;
}
//7. Write a js program to find sum of all even numbers between 1 to n.
var a=parseInt(prompt('Enter the Number'));
var m= 2;
sum1= 0;
while(m<=a){
  sum1=sum1+m;
  m=m+2;
}
console.log('sum of even number 1 and ',a,'is:', sum1)

//esle-if 
//1. Write a js program to find maximum between two numbers.
var num=parseInt(prompt("Enter the first value"))
var num1=parseInt(prompt("Enter the second value"))
if(num>num1){
    console.log('Maimum number is.'+num)
}
else if(num1>num){
    console.log("Maximum number is."+num1)
}
else {
    console.log("both number are equal.")
}
//2. Write a js program to find maximum between three numbers.
var a=parseFloat(prompt('Enter the first Value'))
var b=parseInt(prompt('Enetr the Second value'))
var c=parseInt(prompt('Enetr ths third Number'))
if(a >= b && a >= c){
    console.log(a+ ' is the Maximum number'  )
}
else if(b >= a && b >= c){
    console.log( b+ ' is the Maximum number')
}
else if(c >=a && c >= b){
    console.log(c+' is the Maximum number')
}else{
    console.log('All number is equal')
}
//.3 Write a js program to check whether a number is negative, positive or zero.
var number=parseInt(prompt('Enetr the Number'));
if(number > 0){
    console.log(number+' is positive');
}
else if(number < 0){
    console.log(number+' is Nagitive');
}
else {
    console.log('this number is Zero');
}
//4 Write a js program to check whether a number is divisible by 5 and 11 or not.
var whether=parseInt(prompt('Enetr the Number'));
if (whether % 5 === 0 && whether % 11  === 0 ){
    console.log(whether+ 'is divisible by both 5 and 11 ');
     }
else{
    console.log(whether+" is not divisible ");
}
//5 Write a js program to check whether a number is even or odd.
var d=parseInt(prompt('Enetr the number'))
if (d % 2 === 0){
    console.log(d+ 'is even')
}
else{
    console.log(d+'is odd')
}
//6 Write a js program to check whether a year is leap year or not.
var year=parseInt(prompt('enter the year'))
  checking is the yeaer a leap yaer
    if ((year % 4 === 0 && year % 100 !== 0 )||(year % 400  === 0)) {
        console.log(year+ 'is a leap year.'  )
    }
else {
    console.log(year+"is not a leap year.")
 }   
 //7 Write a js program to input week number and print week day.
 var week=parseInt(prompt('Enter tha week number'));
 if(week === 1)
    { 
        console.log('Monday')
    } else if (week === 2)
    {
        console.log('Tuesday')
    } else if (week === 3){
        console.log('Wednesday')
    } else if (week === 4){
        console.log('Thrueday')
    } else if (week === 5){
        console.log('Friday')
    } else if (week === 6){
        console.log('Saturday')
    } else if (week === 7){
        console.log('Sunday')
    } else{
        console.log('Invailda week number')
    }
 //8 Write a js program to input week number and print week day.
var weekinput=parseInt(prompt("Enter the week number"))
switch (weekinput) {
  case 1:
    console.log("Monday")
  break;
  case 2:
      console.log("Tuesday")
  break;
  case 3:
    console.log("Wednesday")
    break;
    case 4:
        console.log("Thruseday")
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
       break;
    case 7:
        console.log('Sunday')
        break;
  default:
   / console.log('Invaild a number')
       break;
} 
//9 Write a js program to input any alphabet and check whether it is vowel or consonant.
var vowel=parseInt(prompt('Enetr The Character'))
switch (vowel) {
    case 'a':
        console.log('This is a vowel alphabet')
        break;
    case 'e':
        console.log('This is a vowel alphabet')
        break;
   case 'i':
        console.log('This is a vowel alphabet')
    break;
    case 'o':
        console.log('This is a vowel alphabet')
    break;
    case 'u':
        console.log('This is a vowel alphabet')
   break;        
    default:
        console.log('This is a Constant Alphaqbet')
        break;
}
//10. Write a js program to input any character and check whether it is alphabet, digit or special character.
var character=parseInt(prompt('Enter the character'));
   if ((character >= 'a' && character <= 'z') || (character >= 'A'  && character <= 'Z')){
    console.log('This is a Alphabet')
   }
   else if(character >= 1 && character <=9){
    console.log('This is a Digit')
   } 
   else{
    console.log('This is a special character')
   }
 //11 Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 100 units Rs. 0.75/unit
//For next 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit
var electricity=parseInt(prompt('Enter the unit'));
var totalbill=0;
var price = 0.50;
var price1= 0.75;
var price2 = 1.20;
var price3 = 1.50;
if(electricity <= 50){
  totalbill = electricity * price;
}
else if(electricity <= 100){
  totalbill = 50 * price + (electricity -50) * price1
}
 else if(electricity <= 150){
  totalbill = 50 * price + 50 * price1 + (electricity - 100) * price2
 }
 else if (electricity  >150){
  totalbill = 50 * price + 50 * price1 + 50 * price2 + (electricity - 150) * price3
 }
 console.log('Total Eelecricity bill', totalbill)  
 // 12 Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%
  var basicsalary=parseInt(prompt('Enter the salary'));
  var HRA,DA
if(basicsalary <= 10000){
  HRA=0.2 * basicsalary;
  DA = 0.8 * basicsalary ;
  }
  else if (basicsalary >= 1000 && basicsalary <= 20000){
    HRA= 0.25 * basicsalary;
    DA = 0.9 * basicsalary;
  }
  else if (basicsalary > 20000){
    HRA= 0.3 * basicsalary;
    DA = 0.95 * basicsalary;
  }
  var grosssalary = basicsalary + HRA + DA;
  console.log('Gross Salary',grosssalary)

 // 13  Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//Percentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F
var Physics =parseInt(prompt('Enter the physics markes'));
var Chemistry =parseInt(prompt('Enter the chemistery markes'));
 var Biology =parseInt(prompt('Enter the Biology markes '));
 var Mathematics =parseInt(prompt('Enter the Mathematics markes'));
 var Computer =parseInt(prompt('Enter the Computer markes'));
  sum of all Subjects
 var totalmarkes = Physics+Chemistry+Biology+Mathematics+Computer;
  Percentage all numbers
 var percentage= (totalmarkes / 500)*100;
  Grade
 var grade;
 if(percentage >=90){
  grade = "A";
 }
 else if (percentage >= 80 && percentage <90){
  grade = "B";
 }
 else if (percentage >= 70 && percentage < 80){
  grade = "C";
 }
 else if (percentage >= 60 && percentage < 70){
 grade="D";
 }
 else if (percentage >= 40 && percentage < 60){
  grade = "E";
 }
 else if (percentage <40){
  grade = "F";
 }
 console.log("percentage",percentage + "%");
 console.log("Grade",grade);

 // 14 Write a js program to calculate profit or loss.
 var cost =parseInt(prompt('Enter the cost price'));
 var sell =parseInt(prompt('Enter the sale price'));
 var profitorloss=sell-cost;
 if(profitorloss > 0){
    console.log('Profit',profitorloss);
 }
 else if(profitorloss < 0){
  console.log('Loss', profitorloss)
 }
 else{
  console.log('No Profit or NO Loss')
 }
//17. Write a js program to find all roots of a quadratic equation.
var a=parseInt(prompt('Enter the Value of a'));
var b=parseInt(prompt('Enter the Value of B'));
var c=parseInt(prompt('Enetr the Value of c'));
  var root_part= (b*b-4*a*c);
  var denom= (2*a)
 var root1=(-b+root_part)/denom;
  var root2=(-b-root_part)/denom;
  console.log('1st Root',root1);
  console.log('2nd Root',root2);
// 18 Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var side_1=parseInt(prompt('Enter the 1st side valve'));
var side_2=parseInt(prompt('Enter the 2nd side value'));
 var side_3=parseInt(prompt('Enter the 3rd side value'));
 if(side_1 === side_2 && side_2 === side_3){
  console.log('Equilateral Triangle')
 }
 else if(side_1 === side_2 || side_2 === side_3 || side_1===side_3 ){
  console.log('Isosceles Triangle')
}
 else{
  console.log('Scalene Triangle')
 }
// 19 Write a js program to input all sides of a triangle and check whether triangle is valid or not.
var a = parseInt(prompt('Enter the value of a'));
var b= parseInt(prompt('Enter the value of b'));
var c = parseInt(prompt('Enter the value of c'));
if(a + b + c === 180 && a > 0 && b > 0 && c > 0){
    console.log('This Triangle is vaild');
}
else{
  console.log('This Triangle is not vaild')
}
