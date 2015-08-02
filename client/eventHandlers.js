Template.layout.onRendered(function() {
  $('.contact-form').validate({
    submitHandler: function(ev) {
      sendEmail();
    }
  });
});

function sendEmail() {
  var name = $('form [name=name]').val();
  var email = $('form [name=email]').val();
  var message = $('form [name=message]').val();
  Meteor.call('sendEmail', name, email, message);
  $('form [name=message]').val('');
  toastr.success('..Email Received. Thank You. I will get back to you in 24 Hours...');
}