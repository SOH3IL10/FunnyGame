"use strict";

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");


function showAlert() {
    const container = document.getElementById("container");
        /********* Create a popup box for show message *********/
    let containerAlert = document.createElement("div");
    containerAlert.classList.add("containerAlert");
    containerAlert.innerHTML = `میدونستم ${'&#x1F601'}`;

    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "X";
    
    containerAlert.appendChild(closeBtn);
    container.appendChild(containerAlert);

        /********* Click on close button for remove popup and reset 'NO' button position *********/
    closeBtn.addEventListener("click" , () => {
        noBtn.style.left = 0;
        noBtn.style.top = "auto";
        container.removeChild(containerAlert)
    })
}

    /********* Change 'NO' botton position with every click *********/
function moveBtn() {
    noBtn.style.left = (Math.random() * (200 - 16) + 16) + "px";
    noBtn.style.top = (Math.random() * (100 - 16) + 16) + "px";
}

yesBtn.addEventListener("click" , showAlert);
noBtn.addEventListener("click" , moveBtn);
