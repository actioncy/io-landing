$(document).ready(function() {

  $('nav').visibility({
    onTopPassed: function() {
      var navigationHTML = "<div class=\"ui borderless main menu\"><div class=\"ui text container\"><img class=\"logo\" src=\"img/actioncy-io-logo.png\"><button class=\"ui primary basic button right floated item\">Sign Up</button></div></div>";
      $('nav').append(navigationHTML);
    }
  });

  $('.main.menu').visibility({
    type: 'fixed',
  });

  $('.overlay').visibility({
    type: 'fixed',
    offset: 80
  });

});
