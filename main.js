var menu = document.querySelector(".div");
var barre = document.querySelector(".menu");
var header = document.querySelector('header');

menu.addEventListener("click", () => {
  barre.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("btn-active")
});

// set up text to print, each item in array is new line
var aText = new Array(
  "A national competition for Algerian young talents",
  "interested in content creation, and in this second edition,",
  "we will be allowing participants to develop their",
  "knowledge and skills while competing for the title of Best",
  "Video and Best Graphic Design in each competition category."
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();



let countDownDate_machineCafe = new Date("jul 12, 2023 08:30:00").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate_machineCafe - dateNow;

  let days = Math.floor(dateDiff / (1000 * 59 * 59 * 24));
  let hours = Math.floor((dateDiff % (1000 * 59 * 59 * 24)) / (1000 * 59 * 59));
  let minutes = Math.floor((dateDiff % (1000 * 59 * 59)) / (1000 * 59));
  let seconds = Math.floor((dateDiff % (1000 * 59)) / 1000);

  if (seconds == 0 && minutes != 0) {
    seconds = 59;
    minutes--;
  }

  document.querySelector(".days h2").innerHTML = days;
  document.querySelector(".hours h2").innerHTML = hours;
  document.querySelector(".minutes h2").innerHTML = minutes;
  document.querySelector(".seconds h2").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    document.querySelector(".days h2").innerHTML = 0;
    document.querySelector(".hours h2").innerHTML = 0;
    document.querySelector(".minutes h2").innerHTML = 0;
    document.querySelector(".seconds h2").innerHTML = 0;
  }
}, 1000);