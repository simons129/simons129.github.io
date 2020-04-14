window.onresize = function(){ location.reload(); }


var token = 'api-8DE500367E8711EA8C9EF23C91BBF4A0';

$(document).ready(function () {
  //$("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = $('#msg').val();
  var email = $('#email').val();

  var data = {
    api_key: token,
    to: "servatka.simon@gmail.com",
    sender: email,
    subject: "Kontakt z simons129.github.io",
    text_body: msg
  }

  $.ajax({
    type: "POST",
    url: "https://api.smtp2go.com/v3/email/send",
    data: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/plain',
      'api_key': token
  }

    
  })
    .done(function () {
      console.log('OK');
      document.getElementsByClassName("alert")[0].style.display = "block";
    })
    .fail(function (error) {
      console.log(error);
      document.getElementsByClassName("alert")[1].style.display = "block";
    });
}
