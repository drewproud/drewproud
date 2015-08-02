Template.layout.events({
  'click .submit-form': function(e) {
    e.preventDefault();
    sendEmail();
  },
  'submit form': function(e) {
    e.preventDefault();
    sendEmail();
  }
});

function sendEmail() {
   var name = $('form [name=name]').val();
    var email = $('form [name=email]').val();
    var message = $('form [name=message]').val();
    console.log('Sending Email..');
    Meteor.call('sendEmail', name, email, message);
}