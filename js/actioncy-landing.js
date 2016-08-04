$(document).ready(function() {

// Menu Control Overlay
  $('#mastheadCTA').visibility({
    once: false,
    onOnScreen: function() {
      $('nav').hide();
    },
    onOffScreen: function() {
      $('nav').show();
    },
  });

//Mailchimp sign-up overlay
  $('button').on('click', function() {
    $('.ui.modal').modal('show');
  });

  $('#mc-embedded-subscribe-form')
    .form({
      fields: {
        email: {
          identifier: 'mce-EMAIL',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid email address. Thank you.'
            }
          ]
        }
      }
    });

});
