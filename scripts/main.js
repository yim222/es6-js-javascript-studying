const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
//new comment

let num = 4;

let strNum = '4';

console.log("num == strNum ? ", num == strNum);//true
console.log("num === strNum ? ", num === strNum);//false

document.querySelector(".click-me").addEventListener("click", function (ev) {
    console.warn(`Clicking the  element`);
});


const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

//we can use this listener for calling everything only after html has been loaded


// //For using this comment the above...
// document.addEventListener("DOMContentLoaded", () => {
//     // …
//
//     const myHeading = document.querySelector("h1");
//     myHeading.textContent = "Hello world using listener!";
// });
