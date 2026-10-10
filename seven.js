// // Attribute
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id"); //to get the attribute value
// console.log(id);
// let n=div.getAttribute("name");  //to get the attribute value
// console.log(n);
// // Style
// div.style.backgroundColor="red";
// div.style.fontSize="26px";
// console.log(div);
// let p=document.querySelector(".para");
// console.log(p);
// let pa=p.getAttribute("class"); //to get the attribute value
// console.log(pa);

// p.setAttribute("class","newclass");
// console.log(p);


// let newBtn=document.createElement("button");
// console.log(newBtn);
// newBtn.innerText="Click me!";

// let d=document.querySelector(".b");
// // d.append(newBtn); //adds at the end of node(inside)
// // d.prepend(newBtn);  //adds at the start of node (inside)
// // d.before(newBtn);   // adds before the node (outside)
// d.after(newBtn);   //adds after the node (outside)


// let newHeading=document.createElement("h3");
// newHeading.innerHTML="<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading);

// let s=document.querySelector("#s");
// s.remove();
// let parent=document.querySelector("#parent");
// let p=document.createElement("p");
// p.innerText="New paragraph";
// console.log(p);
//         // Add the child
// parent.appendChild(p);
// // Remove the child after selecting it
// parent.removeChild(p);

// Practice Question 1
let newButton=document.createElement("Button");
newButton.innerText="Click me";
newButton.style.backgroundColor="red";
newButton.style.color="white";
console.log(newButton)
let body=document.querySelector("body");
body.prepend(newButton);

// practice question 2
let q2=document.querySelector(".content");
console.log(q2);
q2.classList.add("newClass");
// q2.classList.remove("newClass");