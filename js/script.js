
let tabsIcon = document.querySelector('.menu-icon')
let list = document.querySelector('.nav__list')

tabsIcon.addEventListener('click',function () {
    list.classList.toggle('active-menu');
    tabsIcon.classList.toggle('activeicon');
});


/* const navLink = document.querySelectorAll('.nav__link');

for(let i = 0; i<navLink.length ; i++){
    navLink[i].addEventListener('click' , function(){

        for(let bro = 0; bro < navLink.length; bro++ ){
            navLink[bro].classList.remove('active');
        }
    
        navLink[i].classList.add('active');
    
    })
} */

// banner
const banner = document.getElementsByClassName('banner')[0];
const banner__blocks = document.getElementsByClassName('banner__blocks');
for(var i = 1; i<700; i++){
    banner.innerHTML += "<div class='banner__blocks'></div>"; 
    banner__blocks[i].style.animationDelay = `${i * 0.05}s`;
}


const imgOne = document.querySelector('.content__img');
const imgBig = document.querySelector('.certificate');

imgOne.addEventListener('click', function () {
    imgBig.classList.add('active-bg')
});
imgBig.addEventListener('click', function () {
    imgBig.classList.remove('active-bg')
});

VanillaTilt.init(document.querySelectorAll(".vanilla__span"), {
    max: 35,
    speed: 400,
    "glare-prerender": false,
    glare:  true,
    "max-glare":  1,
    "mouse-event-element":  null,
});




