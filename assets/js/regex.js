$(document).ready(function (){
$("#fname").keyup(function(){
    var regexp =/^[a-zA-Z]$/;
  if ( regexp.test($("#fname").val())){
    $("#fname").closest("form").addClass("has-success"); 
  }
  else{
    $("#fname").closest("form").addClass("has-error"); 
  }
});
})