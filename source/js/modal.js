var promoGoodsButtons = document.querySelectorAll(".promo-goods__button");
var modal = document.querySelector('.modal');
var modalOff = document.querySelector('.modal__overlay');

Array.prototype.slice.call(promoGoodsButtons).forEach(function(item) {
  item.addEventListener('click', function () {
    modal.classList.remove('modal--closed');
  });
});

modalOff.addEventListener('click', function () {
  modal.classList.add('modal--closed');
});
