
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
  $("#clients-list").owlCarousel();
});
