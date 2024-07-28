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

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('carousel-image');
  const dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

document.addEventListener('DOMContentLoaded', function () {
  var accHeaders = document.getElementsByClassName('accordion-header');

  for (var i = 0; i < accHeaders.length; i++) {
    accHeaders[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
        panel.style.maxHeight = '0';
        panel.style.padding = '0 10px';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 50 + 'px';
        panel.style.padding = '10px 0';
      }
    });
  }

  var firstHeader = accHeaders[0];
  firstHeader.classList.add('active');
  var firstPanel = firstHeader.nextElementSibling;
  firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
  firstPanel.style.padding = '10px 0';
});
