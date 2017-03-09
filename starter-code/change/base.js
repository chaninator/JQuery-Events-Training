$(function() {

  console.log("Sanity Check: JS is working!");

  $("#time").text(Date.now());

  // function randomNumGenerator(1, 100) {
  //   return Math.floor(Math.random() * (100) + 1);
  // };

  $('input').on('change', function() {
    var leftNum = $('#left').val();
    var rightNum = $('#right').val();
    // $('#random').val(randomNumGenerator());
    var sum = parseInt(leftNum) + parseInt(rightNum);
    $('#total').val(sum);
  });


  // created button to clear field
  $('#btn-clear').on('click', function() {
    $('#left').val('');
    $('#right').val('');
    $('#total').val('');
    console.log('cleared');
  });
});
