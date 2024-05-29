// function displayMsg(){
//     let name=prompt("Enter Your name");
//     alert("Hello "+name);
// }
// document.getElementById('btn').addEventListener('click',displayMsg);

let count=1;
let slide1=document.getElementById("slide1");
let slide2=document.getElementById("slide2");
let slide3=document.getElementById("slide3");

function showSlide(num){
    count=count+num;
    console.log("count",count);
    if(count%3===1||count%3===-1){
        slide1.style.display="block"
        slide2.style.display="none"
        slide3.style.display="none"
    }
    else if(count%3===2||count%3===-2){
        slide1.style.display="none"
        slide2.style.display="block"
        slide3.style.display="none"
    }
    else{
        slide1.style.display="none"
        slide2.style.display="none"
        slide3.style.display="block"
    }
}
// setTimeout(display,1000)
// setInterval(display,1000)

// function display(){
//     console.log("Hello World");
//     console.log("Bye World");
// }
let autoCount=1;
setInterval(autoSliding,2000)
function autoSliding(){
    console.log(autoCount);
    if(autoCount%3===1){
        slide1.style.display="block"
        slide2.style.display="none"
        slide3.style.display="none"
    }
    else if(autoCount%3===2){
        slide1.style.display="none"
        slide2.style.display="block"
        slide3.style.display="none"
    }
    else{
        slide1.style.display="none"
        slide2.style.display="none"
        slide3.style.display="block"
    }
    autoCount=autoCount+1;
}