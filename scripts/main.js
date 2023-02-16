var myHeading = document.querySelector('h1');
myHeading.textContent = 'Maloo is COCORAMN!';

/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/maloo.png') {
      myImage.setAttribute ('src','images/maloo2.png');
    } else {
      myImage.setAttribute ('src','images/maloo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Maloo is COCORAMN! Hello, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Maloo is COCORAMN! Hello, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Maloo is COCORAMN! Hello, ' + myName;
  }
}