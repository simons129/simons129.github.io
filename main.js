


var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsidXNlciIsIm1haWwiLCJzdG9yZSJdLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNWM2MTBiNDlmZGE5ZGIyYzA4MGJmNDgzIiwiZXhwIjoxNTg2NjI4NTUwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwNjEvIn0.sb_ybk24nafWoCSj9m3_pJ6FSxz0xf68E_exSZXRY2U';

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = $('#msg').val();
  var email = $('#email').val();

  var data = {
    to: "servatka29@gmail.com",
    subject: "Kontakt z simons129.github.io",
    body: msg,
    from: email
  }

  $.ajax({
    type: "POST",
    url: "https://stored.azurewebsites.net/api/mail",
    headers: {
      "Authorization": 'Bearer ' + token
    },
    data: JSON.stringify(data),
    contentType: "application/json"
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
