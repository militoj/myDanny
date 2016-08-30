$( document ).ready(function() {

  // $("#danny-say").click(function(){
  //  alert("seago suck my balls")
  // });

  var button = '#button';
  var textfield = '#textfield';
  var bubble = '#bubble';

  var update_bubble = function(e){
    e.preventDefault();
    $(bubble).html(
      $(textfield).val();
    );
  }

  $(button).click(update_bubble);

});
