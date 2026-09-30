// for loop
// for(let count=1;count<=5; count++){
//     console.log(count,"Muhammad Naeem Ullah");
// }
// console.log("loop has ended");

// Culculate of sum 1 to 5

// console.log("Culculate of sum 1 to 5");
// let sum=0;
// for( let i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

// Infinite loop

// for(let a=1;a>=0; a++){
//     console.log(a,"Mati Ullah");
// }
// console.log("loop has ended");

// While loop

// let b=1;
// while(b<=5){
//     console.log("b=",b);
//     b++;
// }

// Do-while loop
// let c=11;
// do{
//     console.log("c=",c);
//     c++;
// }while(c<=15);

// for-of loop
// let size=0;
// let str="MuhammadNaeemUllah";
// for(let Alphabet of str){
//     console.log("Alphabet=", Alphabet);
//     size++;
// }
// console.log("String size=",size);

// for-in loop
// let student={
//     name:"Naeem",
//     age:21,
//     cgpa:3.15,
//     ispass:true,
// }
// for(key in student){
//     console.log("key=",key, "value=", student[key]);
// }

// Practice Qno:1
// print all even number from 0 to 100.
// for(let i=0; i<=10; i++){
//     if(i%2===0){
//         console.log(i," is even number");
//     }
//     i++;
// }

// practice Qno:2
// let gameNum=25;
// let userNum=prompt("Guess the game number: ");
// while(userNum != gameNum){
//       userNum=prompt("You entered wrong number. guess again: ");
// }
// console.log("congratulation, you entered right number");  

// Strings in JS
// let str="Muhammad \nNaeem Ullah";
// console.log(str, "\tLength: ",str.length);
// console.log(str[3]);  // access index position

// template literals
// In JavaScript, template literals are a way to create strings using backticks (`) instead of regular quotes. They’re especially useful for inserting variables/expressions and writing multi-line strings.

// let name=`Naeem`;
// let age=25;
// let message=`My name is ${name} and i am ${age} years old`;
// console.log(message);
//  message = "My name is " + name + " and I am " + age + " years old.";
//  console.log(message);

//  String Methods in Js
// let str=`     muhammad naeem ullah       `;
// console.log(str.toUpperCase()); // convert uppercase
// console.log(str.toLowerCase()); //convert lower case
// console.log(str.trim()); // remove white spaces

// let a=`0123456789`;
// let b=`khan is back`;
// console.log(a.slice(1,3)); //return part of string
// console.log(a.concat(b));  // join a and b
//  console.log(a+b);
//  console.log(b.replace("back","going"));
//  console.log(b.charAt(3));

// Practice Qno:1
let fulName=prompt("Enter full name without spaces");
let username=`@` + fulName.toLowerCase() + fulName.length;
console.log(username);