const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var current = 0;
const nodelist = $$('.mySlides');
slides = Array.from(nodelist);
console.log(slides);

function loadSlide()
{
    for (var i = 0; i < slides.length; i++) {
        slides[i].dataset.index = i;
        if (slides[i].classList.contains('active')) {
            slides[i].style.display = 'block';
            current = i;
        }
    }
}

const preview = $('#prevSlide');
const nextView = $('#nextSlide');
// const rect = nextView.getBoundingClientRect();
// const rightOffset = window.innerWidth - rect.right;
// console.log(rightOffset);


nextView.onclick = function()
{
    slides[current].classList.remove('active');
    if(current + 1 > slides.length - 1)
    {
        current = 0
    }
    else
    {
        current ++;
    }
    slides[current].classList.add('active');
    // slides[current].style.animation = 'nextSlide 1s ease-in-out 0s 1 normal forwards running'
}


preview.onclick = function()
{
    slides[current].classList.remove('active');
    if(current - 1 < 0)
    {
        current = slides.length - 1;
    }
    else
    {
        current --;
    }
    slides[current].classList.add('active');
    console.log(slides[current].offsetLeft + wid.offsetLeft);
}
