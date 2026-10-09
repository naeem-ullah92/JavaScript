// let heading=document.getElementById("heading3");
// console.log(heading);

// let headings=document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let para=document.getElementsByTagName("p");
// console.log(para);
// let element=document.querySelector("#mybutton");
// console.log(element);

// let mybutton=document.getElementById("mybutton");
// console.dir(mybutton);
// console.log(mybutton);
// console.log(mybutton.tagName);
// let div=document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);


// console.log(document.body.firstChild);
// console.log(document.querySelector("div").children);
// mybutton.innerText = "abcd";
// console.log(mybutton);
// let heading5=document.querySelector("#heading5");
// console.log(heading5.textContent);

// Practice question
// let h=document.querySelector("h4");
// console.log(h.innerText);
// h.innerText=h.innerText+"from apna college students";
// console.log(h.innerText);

// practice question
let divs=document.querySelectorAll(".box");
console.log(divs);
console.log(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
let i=1;
for(v of divs){
    divs.innerText=``
}
let idx=1;
for( d of divs){
    console.log(d);
    idx++;
};