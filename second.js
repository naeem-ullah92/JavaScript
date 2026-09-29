// console.log("Hello world");
// single line comment
/* Multiple line comment */

// Artimatic Operator
// let a=5;
// let b=2;
// console.log("a = ",a,"b = ",b);

// console.log("a + b =",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);
// console.log("a^b= ",a**b);  //a**b means a^b

// Unary Operator

// let a=5;
// let b=2;
// console.log("a = ",a,"b = ",b);
// // a=a+1;  //6
// a++; //6
// console.log("a=",a);
// console.log("b=",--b); // pre decrement
// console.log("b=",b--); //post decrement
// console.log("b=",b);

// Assignment Operator  += ,-=, *=, /=, **=, %= 
// let a=5;
// let b=2;
// let c=3;
// a +=4; // a=a+4;
// console.log("a =", a); // 9
// b -=4; // b=b-4;
// console.log("b =", b); // 1
// c *=4; //c=c*4;
// console.log("c =", c); // 20

// Comparison Operator
// let a=5;
// let b=2;
// let c=3;
// let d="3";

// console.log("5==2", a==b); //false
// console.log("2!=3", b!=c); //true
// console.log("3==3", 3==3); //true
// console.log("3===3", c===d);  //false,  its check equal to & type of value
// console.log("3!==3", c!==d); //true, its check equal to & type of value

// console.log("5>2",a>b); //true
// console.log("2>3",b>c); //false
// console.log("2<=3",b<=c); //true
// console.log("5<=2",a<=b); //false

// Logical Operator
//  let a=6;
//  let b=5;

//  let cond1=a>b; //true
//  let cond2=a===6; //true
// //  Logical AND
// console.log("cond1 && cond2=",cond1 && cond2);  //true 
// console.log("3<1 && 4===4=",3<1 && 4===4);  //false
// console.log("3<1 && 4<1=", 3<1 && 4<1);  //false

// //Logical OR
// console.log("4===5 || 7>4=",4===5 || 7>4);  //true 

// // Logical NOT
// console.log("!(2>5)", !(2>5));  //true

// Conditional Statement
// if Statement
// let age=25;
// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you can not vote");
// }

// // if-else Statement
// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black"; 
// }else if(mode==="red"){
//     color="blue";
// }
// else{
//     color="white";
// }
// console.log(color,"color");

// if(mode==="dark") console.log("mode");

// Ternary Operator
// condution? true output: false output
let age=25;
 let result=age>=18? "adult": "not adult";
 console.log(result);

 const day=7;
 switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
            console.log("Wednesday");
            break;
            case 4:
            console.log("Thrusday");
            break;
            case 5:
            console.log("Friday");
            break;
            case 6:
            console.log("Saturday");
            break;
            case 7:
            console.log("Sunday");
            break;
            default:
                console.log("you enter wrong number")
 }
// practice Qno:1
// let num=Number(prompt("inter a number"));
// if(num%5===0){
//     console.log(num," is multiple of 5")
// }else{
//     console.log(num, "is not multiple of 5");
// }
// Practice Qno:2
let score=20;
let grade;
if(score<=100 && score>=90){
    grade= "A" 
}
else if(score>=70 && score<=89){
    grade="B"
}
else if(score>=60 && score<=79){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
console.log("according to your scores, your grade was: ", grade);
