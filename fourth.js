// let marks=[1,2,3,4,5,6,7,8,9,10];
// console.log("Students marks",marks);
// console.log("length of array",marks.length);
// console.log(typeof marks);
// console.log(marks[6]);
// marks[2]=100;
// console.log(marks);

// strings immutable, array mutable
// let fruits = ["Apple", "Banana", "Mango"];
// for(let idx=0; idx<fruits.length; idx++){
//     console.log(fruits[idx]);
// }
// for(let i of fruits){
//     console.log(i);
// }

// Practice Question
// let mark=[85,97,44,37,76,60];
// let sum=0;
// for(let a=0; a<mark.length; a++){
//     sum=sum+mark[a];
// }
// console.log("Average marks: ",sum/mark.length);

// practice Question
// let items=[250,645,300,900,50];
// for(let i=0; i<items.length; i++){
//     let offer=items[i]/10;
//     items[i] -=offer;
// }
// console.log(items)
// for(let val of items){
//     console.log(val)
// }

// for(let a=0; a<items.length; a++){
//     console.log(items[a]);
// }

// let num=[250,645,300,900,50];
// for(let v of num){
//     console.log(v);
// }
// num.push(100);  //add to end
// for( let s of num){
//     console.log(s);
// }
// console.log("Delete last element.");
// num.pop();  //remove last element
// for( let s of num){
//     console.log(s);
// }
// console.log("convert array to string");
// let d;
// console.log(num.toString());   // convert array to string
// for(let f of num){
//     console.log(f);
// }

// let x = ["Apple", "Mango", "Banana"];
// let y = ["tomato", "potato", "onion"];
// console.log(x.concat(y));  //joins multiple array & return result

// let x = ["Apple", "Mango", "Banana"];
// x.unshift("Orange","Graps");  //Add to start
// console.log(x);
// x.shift();  // Delete from stsrt & return reslut
// console.log("Deleted first item: ",x);
// let y = ["tomato", "potato", "onion","Apple", "Mango", "Banana"];
// console.log("y: ",y);
// console.log("return a piece of the array",y.slice(1,3)); //return a piece of the array


// let d=[1,2,3,4,5,6,7,8,9,10];
// console.log(d);
// d.splice(3,4,10,20);  // Change original array (Add, remove, replace)
// console.log(d);
// // add element
// let e=[1,2,3,4,5,6,7,8,9,10];
// e.splice(1,0,"khan");
// console.log("updated array of e :" ,e);

// let g=[1,2,3,4,5,6,7,8,9,10];
// console.log(g);
// g.splice(3,1);
// console.log("Delete element 4: ",g);

// practice questiion
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log("Remove first company from the array",companies);
companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.splice(2,1,"Ola");
console.log("Remove Uber & Add Ola in its place ",companies);
companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.push("Amazon");
console.log("Add Amazon at the end",companies);