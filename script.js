function toggleMenu(){
    document.getElementById("navbar").classList.toggle("active");
}


const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dots span');

let index = 0;

function showSlide(i){
    track.style.transition = 'transform 0.4s ease';
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

let startX = 0;
let currentX = 0;
let isDragging = false;

track.addEventListener('mousedown', startDrag);
track.addEventListener('touchstart', startDrag);

track.addEventListener('mousemove', dragMove);
track.addEventListener('touchmove', dragMove);

track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);
track.addEventListener('touchend', endDrag);

function startDrag(e){
    isDragging = true;
    track.style.transition = 'none';
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
}

function dragMove(e){
    if(!isDragging) return;
    currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    track.style.transform = `translateX(calc(-${index * 100}% + ${diff}px))`;
}

function endDrag(){
    if(!isDragging) return;
    isDragging = false;

    const movedBy = currentX - startX;
    const threshold = 80;

    if(movedBy < -threshold && index < slides.length - 1){
        index++;
    } else if(movedBy > threshold && index > 0){
        index--;
    }

    showSlide(index);
}

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

  const reviewSwiper = new Swiper('.review-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    watchOverflow: true,
    resistanceRatio: 0.85,
    speed: 600,
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,
    touchStartPreventDefault: false,

    navigation: {
      nextEl: '.review-arrow.right',
      prevEl: '.review-arrow.left',
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
