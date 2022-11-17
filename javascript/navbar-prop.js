// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
     $('html,body').animate({
        scrollTop: target.offset().top
      }, 1500);
      return false;
    }
  }
});

// Close nav bar when clicked on mobile
$(".navbar-nav li a").click(function(event) {
  $(".navbar-collapse").collapse('hide');
});