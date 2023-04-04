


const slider = $('.products').bxSlider({
  pager: false,
  controls: false
});


$('.products-slider__arrow--prev').on('click', e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('.products-slider__arrow--next').on('click', e => {
  e.preventDefault();
  slider.goToNextSlide();
});





// const leftBtn = document.querySelector(".products-slider__arrow--prev");
// const rightBtn = document.querySelector(".products-slider__arrow--next");
// const items = document.querySelector(".products");
// const computedStyle = getComputedStyle(items);
// const item = document.querySelectorAll(".products__item");

// const minRight = 0;
// const itemWidth = getComputedStyle(item[0]).width;
// const step = parseInt(itemWidth);
// const maxRight = (item.length - 1) * step;
// let currentRight = 0;

// items.style.right = currentRight;

// rightBtn.addEventListener("click", e => {
//   e.preventDefault();

//   if(currentRight < maxRight) {
//     currentRight += step;
//     items.style.right = currentRight + "px"
//   }
// })

// leftBtn.addEventListener("click", e => {
//   e.preventDefault();

//   if(currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = currentRight + "px"
//   }
// });
