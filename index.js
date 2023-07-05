let carousel = document.querySelector('.slogan2 .carousel');
let carouselItems = document.querySelectorAll('.slogan2 .carousel-item');
let itemCount = carouselItems.length;
let currentIndex = 0;
let nextIndex = 1;
carouselItems[currentIndex].classList.add('active');
function nextSlide() {
  carouselItems[currentIndex].classList.remove('active');
  if (nextIndex >= itemCount) {
    nextIndex = 0;
  }

  carouselItems[nextIndex].classList.add('active');

  currentIndex = nextIndex;
  nextIndex++;

  setTimeout(nextSlide, 5000);
}

setTimeout(nextSlide, 5000);

/*$(document).ready(function() {
  $("#PhotoOne").click(function() {
    if ($(this).width() == 250) {
      $(this).css("width", "500px");
      $(this).css("height","500px");
    } else {
      $(this).css("width", "250px");
      $(this).css("height","250px");
    }
  });
});

$(document).ready(function() {
  $('.zoomable').click(function() {
      var imgSrc = $(this).attr('src');
      $('.zoomed-image').html('<img src="https://moigarant.ru/uploads/examples/originals/5cb6b6b800396.jpg' + imgSrc + '">');
      $('.zoomed-image').fadeIn();
  });

  $('.zoomed-image').click(function() {
      $(this).fadeOut();
  });
});

*/