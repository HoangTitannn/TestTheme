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

  const thumbnails = document.querySelectorAll('.thumbnails-container img');
  thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

  element.classList.add('active');
}

document.getElementById('myVideo').addEventListener('click', function () {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

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
        panel.style.padding = '5px 0px 30px 0px';
      }
    });
  }

  var firstHeader = accHeaders[0];
  firstHeader.classList.add('active');
  var firstPanel = firstHeader.nextElementSibling;
  firstPanel.style.maxHeight = firstPanel.scrollHeight + 50 + 'px';
  firstPanel.style.padding = '5px 0px 30px 0px';
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.user');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentIndex = 0;

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonial-active', i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(index);
    });
  });

  updateSlider(currentIndex);
});
