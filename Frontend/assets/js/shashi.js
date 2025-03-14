
const images = [

    './assets/img/banner/banner1.png',
    './assets/img/banner/banner2.jpg',
    './assets/img/banner/banner3.jpg',
    './assets/img/banner/banner4.jpg',
    './assets/img/banner/banner5.jpg',
    './assets/img/banner/banner6.jpg',
    './assets/img/banner/banner7.jpg',
    './assets/img/banner/banner9.jpg',
    './assets/img/banner/banner8.jpg',
];

const element = document.querySelector('.shashi');
let currentIndex = 1;


element.style.backgroundSize = 'cover';
element.style.backgroundPosition = 'center';


function changeBackground() {
    element.style.backgroundImage = `linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.5)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; 
}

changeBackground(); 
setInterval(changeBackground,5000); 















function DiffCountry(){
    let imgBx = document.querySelectorAll(".imgBx");
let contectBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < imgBx.length; i++) {
    imgBx[i].addEventListener("mouseover", function () {
        for (let j = 0; j < contectBx.length; j++) {
            contectBx[j].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

       
        for (let j = 0; j < imgBx.length; j++) {
            imgBx[j].className = 'imgBx';
        }
        this.className = 'imgBx active';
    });

}

}
DiffCountry();






// shashi.js
document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector('.some-element');
    if (element) {
      element.style.someProperty = 'someValue';
    }
  });