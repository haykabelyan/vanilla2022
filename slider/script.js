//Selectors

const slides = document.querySelectorAll('.slide');

//Event Listeners

slides.forEach( slide => {
    slide.addEventListener('click', () => {
        clearActiveClass();
        slide.classList.add('active');
    });
});

function clearActiveClass(){
    slides.forEach( slide => {
        slide.classList.remove('active');
     });
};

//Show random slide block

function slidesPlugin(activeSlide){
    slides[activeSlide].classList.add('active');   
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min);
};
const index = randomNumber(0, slides.length-1);

slidesPlugin(index);