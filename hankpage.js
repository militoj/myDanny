$( document ).ready(function() {




  $("#form").submit(function(e){
    e.preventDefault();
    var textfield = $("#textfield").val();
    $("#target").text(textfield);
    $("#form")[0].reset();
  });



});
