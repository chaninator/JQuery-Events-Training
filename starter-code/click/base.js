console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$('#imperatives').on('click', function(e) {
  console.log("You clicked on: ", e.target);
  var button = $(e.target).text();
  $('#clickLog').append('<li>' + 'You clicked: ' + button + ' at ' + Date.now() + '</li>');

});


});
