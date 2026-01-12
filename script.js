function toggleMenu(){
    document.getElementById("navbar").classList.toggle("active");
}


const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dots span');

let index = 0;

function showSlide(i){
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

dots.forEach((dot, i)=>{
    dot.addEventListener('click', ()=>{
        index = i;
        showSlide(index);
    });
});

function toggleFaq(element) {
    const currentItem = element.parentElement;
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(item => {
        if (item !== currentItem) {
            item.classList.remove('active');
            item.querySelector('.arrow').innerHTML = '▼';
        }
    });

    if (currentItem.classList.contains('active')) {
        currentItem.classList.remove('active');
        element.querySelector('.arrow').innerHTML = '▼';
    } else {
        currentItem.classList.add('active');
        element.querySelector('.arrow').innerHTML = '▲';
    }
}

const slider = document.querySelector('.review-slider');
const leftArrow = document.querySelector('.review-arrow.left');
const rightArrow = document.querySelector('.review-arrow.right');

const cardWidth = 260;
rightArrow.addEventListener('click', () => {
    slider.scrollLeft += cardWidth;
});

leftArrow.addEventListener('click', () => {
    slider.scrollLeft -= cardWidth;
});