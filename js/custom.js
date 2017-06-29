
/*=============================================
  Services
=============================================*/
$(function() {
  new WOW().init();
});


/*=============================================
  Work
=============================================*/
$(function() {
  $("#work").magnificPopup({
    delegate: 'a',  // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*=============================================
  Team
=============================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*=============================================
  Testimonials
=============================================*/
$(function() {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*=============================================
  Testimonials
=============================================*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/*=============================================
  Clients
=============================================*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 5
      },
      // breakpoint form 992 up
      992: {
        items: 6
      }
    }
  });
});

/*=============================================
  Navigation
=============================================*/
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() < 50) {
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});

// Smooth scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

// Close mobile menu on click
$(function() {
  $(".navbar-collapse ul li a").on("click touch", function() {
    $(".navbar-toggle").click();
  });
});
