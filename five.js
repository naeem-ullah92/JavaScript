// function myFunction(){
//     console.log("How are you.");
//     console.log("I am fine.");
// }
// myFunction();

// function out(msg){   
//     // parameter -> input
//     console.log(msg);
// }
// out("khan is back");   // argument
// myFunction();

// function pk(msg, a ){   
//     // parameter -> input
//     console.log(msg,a);
// }
// pk("whats going on", 100); 

// function sum(a,b){
//     console.log(a+b);
// }
// sum(12,12);

// function subtract(c,d){   //function parameter ->like local variables ->block scope of function
//     console.log("return:")
//     let x=c-d;
//     return x;
// }
// let val=subtract(5,3);
// console.log(val);

// Arrow Function.
// A modern and shorter way:
// let arrowsums=(a,b)=>{
//     return a+b;
// }
// console.log(arrowsums(3,3));

// let arrowSubtract=(a,b)=>  a-b;
// console.log(arrowSubtract(100,10));

// Practice Question
// function countVowels(str){
//      let count=0;
//     for(let recive of str){
//         console.log(recive);
       
//         if((recive==="a") || (recive==="e") || (recive==="i") || (recive==="o") || recive==="u"){
//                  count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("Muhammad Naeem ")

// Perfoam same task using arrow function

// let countVowels=(str)=>{
//     let count=0;
//     for(let recive of str){
//          if((recive==="a") || (recive==="e") || (recive==="i") || (recive==="o") || recive==="u"){
//            count++;
//          }
//     }
//     return count;
// }
// let result=countVowels("aeiou");

// console.log(result);


// ForEach loop in array 
// higher order function/Methods those function who take another function is a parameter and return function
// let arr=[1,2,3,4,5];
// arr.forEach(function printvalue(val){
//     console.log(val);
// })

// let name=["Waheed","Latif","Naeem","Fateen","Mati Ullah"];   
// name.forEach((n, idx,name)=>{   
//      console.log(n,idx,name);
// })


// Practice question 
// let num=[1,2,3,4,5,6,7,8,9,10];
// num.forEach((square)=>{
//     // console.log(square);
//     console.log(square**2);
// });


// let num=[1,2,3,4,5,6,7,8,9,10];
// let newArray=num.map(val=>{   //return new array
//     return val*2;
// })   
// console.log(newArray);


// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenArray=numbers.filter(function print(val){
//     return val%2===0;
// });
// console.log(evenArray);

// Reduce Method
// let num=[1,2,3,4,5,6,7,8,9,10];
// const output=num.reduce((prev, curr)=>{
//     return prev+curr;
// })
// console.log(output);


//  let numbers=[1,2,3,4,5,6,7,8,9,10];
// const result=numbers.reduce((prev, curr)=>{
//        return prev>curr?prev:curr;
// });
// console.log(result);

// Practice question
// let marks=[40,54,90,91,97,99,34,67,87,88];
// let finalResult=marks.filter((topper)=>{
//        return topper>90;
// });
// console.log(finalResult);

// practice Question
let n=prompt("Enter a number");
let arr=[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log("Array=",arr);
let sumArray=arr.reduce((prev,curr)=>{
     return prev+curr;
})
console.log("Sum=",sumArray);

 let productArray=arr.reduce((prev,curr)=>{
    return  prev*curr;
 });
 console.log("Product= ",productArray);
 let product=1;
 for(let i=0; i<n; i++){
     product=product*arr[i];
  
 }
console.log("product: ",product);