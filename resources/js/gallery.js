$("document").ready(function() {
  $('.dropdown').click( function(event){
      event.stopPropagation();
      $('.dropdown-content').toggle();
  });

  $(document).click( function(){
      $('.dropdown-content').hide();
  });
});
