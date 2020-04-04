window.onresize = function(){ location.reload(); }

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = "<p>" + $('#msg').val() + "</p>";
  var email = $('#email').val();

  var data = {
    to: "servatka.simon@gmail.com",
    subject: "simons129.github.io",
    html: msg,
    company: email, 
    sendername: ""
  }

  $.ajax({
    type: "POST",
    url: "https://simons129-2094.restdb.io/mail",
    headers: {
      "x-apikey": 'c9fdb0cc10b56c67055557befc2da3663d83b',
      "Catche-Control": "no-cache"
    },
    data: JSON.stringify(data),
    contentType: "application/json",
    Host: 'simons129-2094.restdb.io'
    
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
