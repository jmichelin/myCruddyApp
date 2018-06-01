$(document).ready(function(){

  $('.submitForm').on('click', function() {
    let textFieldValue = $('.textField').val();
    $('.debug').text(textFieldValue);
  });

});