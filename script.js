const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");
const background = document.querySelector(".body");
const currentYear = new Date().getFullYear();
const newdetails = document.querySelector(".holiday");

// gets holiday details from localstorage
newdetails.innerText = window.localStorage.getItem("destination");
// the new Date() converts the localstorage string Date to a javascript Date Object
var newYearTime = new Date(window.localStorage.getItem("HolidayDate"));
// get background image from local Storconst days = document.getElementById("days");
background.style.backgroundImage = window.localStorage.getItem("holidayImage");

// Set background year
year.innerText = currentYear + 1;
const hours = document.getElementById("hours");

//  Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

// modal form

const toggleModal = () => {
  document.querySelector(".container").classList.toggle("modal--hidden");
};

// wWite new Holiday Details
function newHolidayDetails() {
  // get date inputon form
  if (holidaydate.value === null || holidaydate.value === "") {
    document.querySelector(".validationtext").innerText = "Must Enter Date";
    document.querySelector(".validationtext").style.display = "block";
    return;
  } else {
    document.querySelector(".validationtext").style.display = "none";
  }

  // if (destination.value === null || destination.value === "") {
  //   document.querySelector(".validationtext").innerText =
  //     "Must Enter Destination";
  //   document.querySelector(".validationtext").style.display = "block";
  //   return;
  // } else {
  //   document.querySelector(".validationtext").style.display = "none";
  // }

  var newdate = new Date(holidaydate.value);

  // write new date to localstorage
  window.localStorage.clear;
  window.localStorage.setItem("HolidayDate", newdate);
  newYearTime = new Date(window.localStorage.getItem("HolidayDate"));

  // get new destination from input form
  var newDestination = destination.value;

  // write new destination to localstorage
  window.localStorage.setItem("destination", newDestination);

  // update DOM to new Destination
  var getNewDestination = localStorage.getItem("destination");
  newdetails.innerText = getNewDestination;

  // update background image
  var newImage = imagelocation.value;
  background.style.backgroundImage = newImage;
  window.localStorage.setItem("holidayImage", newImage);

  destination.value = "";
  holidaydate.value = null;
  imagelocation.value = null;
  //  reset countdown counter to new date
  updateCountdown();

  // turn off modal form
  toggleModal();
}

document.getElementById("close-btn").addEventListener("click", toggleModal);
document
  .getElementById("newdetails")
  .addEventListener("click", newHolidayDetails);
document.querySelector(".btn-open").addEventListener("click", toggleModal);

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       console.log(e.target);
//       console.log(input);
//     };
//     reader.readAsDataURL(input.files[0]);
//   }
// }
// picture array

// function changeBg() {
//   const pictureArray = [
//     "url(img/image1.JPG)",
//     "url(img/image2.JPG)",
//     "url(img/image3.JPG)",
//     "url(img/image4.JPG)",
//     "url(img/image5.JPG)",
//     "url(img/image6.JPG)",
//     "url(img/image7.JPG)",
//     "url(img/image8.JPG)",
//     "url(img/image9.JPG)",
//   ];

//   const bg = pictureArray[Math.floor(Math.random() * pictureArray.length)];
//   background.style.backgroundImage = bg;
// }

// setInterval(changeBg, 5000);
