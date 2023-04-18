const bgImage = document.getElementById('bg-image');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

let index = 0;
setInterval(() => {
  bgImage.style.backgroundImage = 'url(${images[index]})';
  index = (index + 1) % images.length;
}, 10000); // 10 seconds
