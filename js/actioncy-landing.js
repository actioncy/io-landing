$(document).ready(function() {

  $('#mastheadCTA').visibility({
    once: false,
    onOnScreen: function() {
      $('nav').hide();
    },
    onOffScreen: function() {
      $('nav').show();
    },
  });


  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
