Template.layout.onRendered(function() {
  $('.contact-form').validate({
    submitHandler: function(ev) {
      sendEmail();
    }
  });
});

function sendEmail() {
  var name = $('form [name=name]').val().trim();
  var email = $('form [name=email]').val().trim();
  var message = $('form [name=message]').val().trim();

  Meteor.call('sendEmail', name, email, message, function(err, res) {
    if (err) {
      toastr.error('Email failed to send. Please contact therealdrewproud@gmail.com');
    } else {
      toastr.success('Email Received. Thank You. I will get back to you in 24 Hours...');
    }
  });

  $('form [name=name]').val('');
  $('form [name=email]').val('');
  $('form [name=message]').val('');
}