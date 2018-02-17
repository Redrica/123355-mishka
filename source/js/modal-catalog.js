var goodsCart = document.querySelectorAll('.goods__cart');
var modal = document.querySelector('.modal');
var modalOff = document.querySelector('.modal__overlay');

Array.prototype.slice.call(goodsCart).forEach(function(item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
  });
});

modalOff.addEventListener('click', function () {
  modal.classList.add('modal--closed');
});
