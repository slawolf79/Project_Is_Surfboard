const swichersAvatar = document.querySelector('#swicherAvatar');

const findReview = (reviewId) => {
  const activeReview = document.querySelector('.reviews__item--active');
  activeReview.classList.remove('reviews__item--active');

  const currentReview = document.querySelector(`.reviews__item[data-item="${reviewId}"]`);

  currentReview.classList.add('reviews__item--active');

}

swichersAvatar.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target;
  
  if (target.classList.contains('interactive-avatar__img')) {
    const activeListItem = document.querySelector('.interactive-avatar--active');

    if (activeListItem) {
      activeListItem.classList.remove('interactive-avatar--active');
    }

    const button = target.parentElement;
    const listElement = button.parentElement;
    listElement.classList.add('interactive-avatar--active');

    const id = button.getAttribute('data-open');

    findReview(id);
  }
});
