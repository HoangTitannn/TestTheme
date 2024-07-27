document.addEventListener('DOMContentLoaded', function () {
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');
  const quantityNumber = document.querySelector('.quantity-number');

  decreaseButton.addEventListener('click', function () {
    let quantity = parseInt(quantityNumber.textContent);
    if (quantity > 1) {
      quantityNumber.textContent = quantity - 1;
    }
  });

  increaseButton.addEventListener('click', function () {
    let quantity = parseInt(quantityNumber.textContent);
    quantityNumber.textContent = quantity + 1;
  });
});

function changeImage(element) {
  const largeImage = document.getElementById('largeImage');
  largeImage.src = element.src;
}
