let scrollContainer = document.querySelector('.gallery');
let leftBtn = document.getElementById('back-arrow'); 
let rightBtn = document.getElementById('next-arrow');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

rightBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
});

leftBtn.addEventListener('click', () => { 
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
});

// Fix: Reset scroll behavior to 'auto' after smooth scrolling
scrollContainer.addEventListener('scroll', () => {
    if (scrollContainer.style.scrollBehavior === 'smooth') {
        scrollContainer.style.scrollBehavior = 'auto';
    }
});