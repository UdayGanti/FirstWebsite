// Code to change background images in Landing Page

const bgImage = document.getElementById('bg-image');
const images = [
    './img/image1.jpg',
    './img/image2.jpg',
    './img/image3.jpg',
    './img/image4.jpg',
    './img/image5.jpg',
    './img/image6.jpg',
    './img/image7.jpg',
  ];
let index = 0;
setInterval(() => {
  bgImage.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}, 2000); // 2 seconds


changeBackground(); // Call the function once to set the initial background image

setInterval(changeBackground, 2000); // Call the function every 2 seconds to change the background image

///Bootstraping JS///

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
