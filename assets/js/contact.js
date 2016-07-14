/*global $*/
$(function(){
  $('#send').click(function(e){
      e.preventDefault();
      $.ajax({
        url: "https://formspree.io/dimfit@gmail.com", 
        method: "POST",
        data: {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                message: $('#message').val(),
        },
        dataType: "json"
    }).done(function(){
        $('#form').html('<h2>Thank you for getting in touch!</h2>, <h4>We appreciate you contacting us about [Contact Reason]. We try to respond as soon as possible, so one of our Customer Service colleagues will get back to you within a few hours. Have a great day ahead!</h4>');
    });
  });
});