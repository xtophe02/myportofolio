$(function () {
  // Auto play modal video
  $('.video').click(function () {
    var theModal = $(this).data('target');
    var videoSRC = $(this).attr('data-video');
    var videoSRCauto = videoSRC +
    '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite: false,
  slideToShow: 1,
  slideToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  // speed: 500,
  // fade: true,
  // cssEase: 'linear',
});
