$(document).ready(function () {
  // alert('ok');

  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window')
  // }, {
  //   offset: '25%'
  // })

  // STICKY NAV
  $('.js-features').waypoint(function (direction) {
      if (direction === 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },

    {
      offset: '60px',
    });

  //CSS TRICKS
  $('.js-fadein').waypoint(function (direction) {
    $('.js-fadein').addClass('animated fadeIn');
  }, {

    offset: '50%',
  });
  $('.js-fadein2').waypoint(function (direction) {
    $('.js-fadein2').addClass('animated fadeIn');
  }, {

    offset: '50%',
  });

  $('.js-fadeinup').waypoint(function (direction) {
    $('.js-fadeinup').addClass('animated fadeInUp');
  }, {

    offset: '50%',
  });
  $('.js-pulse').waypoint(function (direction) {
    $('.js-pulse').addClass('animated pulse');
  }, {

    offset: '50%',
  });

  //LINKS
  $('.js-hungry').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.section-plans').offset().top,
    }, 1000);
  });

  $('.js-show').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.section-features').offset().top,
    }, 1000);
  });

  $('.black-logo').on('click', function () {
    $('html, body').animate({
      scrollTop: $('header').offset().top,
    }, 1000);
  });

  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top,
          }, 1000);
          return false;
        }
      }
    });
  });

  // NAVIGATION
  $('.js-icon').on('click', function () {
    var nav = $('.main-nav');
    var icon = $('.mobile-nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

});

// Google Maps
var map = new GMaps({
  div: '#map',
  lat: 41.2616295,
  lng: -8.1307151,
  zoom: 12,
});

map.addMarker({
  lat: 41.2616295,
  lng: -8.2807151,
  title: 'Boim',
  infoWindow: {
    content: '<p>Where I came from</p>'
  }
});
