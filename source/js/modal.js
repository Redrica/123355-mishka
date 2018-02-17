var promoGoodsButton = document.querySelector('.promo-goods__button');
var modal = document.querySelector('.modal');
var modalOff = document.querySelector('.modal__overlay');

promoGoodsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--closed');
});

modalOff.addEventListener('click', function () {
  modal.classList.add('modal--closed');
});
