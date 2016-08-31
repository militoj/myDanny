$( document ).ready(function() {

var textfield = $("#textfield").val();



  $("#form").submit(function(e){
    e.preventDefault();
    alert("Deez Nuts");
    console.log(textfield);
  });



});
