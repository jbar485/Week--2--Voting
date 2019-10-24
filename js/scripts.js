

$(document).ready(function() {

  $('form#user-age').submit(function(event) {
    event.preventDefault();
    $("form").hide();
    var age = parseInt($("#age").val());
    if (age >= 18) {
      $('.voting-links').show();
    } else if (age < 18) {
      $('.too-young').show();
    } else {
      $('.not-human').show();
    }

  });
});
