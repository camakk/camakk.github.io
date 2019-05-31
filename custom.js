var engineering_toggle_expanded = true;

$('#engineering-toggle').click(function() {
  if(engineering_toggle_expanded) {
    $('#engineering-toggle').html('<a style="text-decoration:none; color:#4881E8;">show less</a>');
    engineering_toggle_expanded = false;
    $('.eng-thumbnail-toggle').removeClass("d-none");
  } else {
    $('#engineering-toggle').html('<a style="text-decoration:none; color:#4881E8;">show all</a>');
    $('.eng-thumbnail-toggle').addClass("d-none");
    engineering_toggle_expanded = true;
  }
});
