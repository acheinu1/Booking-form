// ======================the input form=======================
function submitForm(){
    var Username = document.forms['Appointment']['inputName'].value;
    var UserNumber = document.forms['Appointment']['inputPN'].value;
    var Useremail = document.forms['Appointment']['inputEmail'].value;
    var bookDate = document.forms['Appointment']['inputDate'].value;
    var bookTime = document.forms['Appointment']['inputTime'].value;
  
    // ================== Form Validation ======================
    // ( Username.length == null || Username.length == ' ' || Username.length < 3)
  
    if( Username.length == null || Username.length == ' ' || Username.length < 3) {
      alert("Name cant be empty or less than 3 letters");
      return false;  }
  
    else if( UserNumber.length == null || UserNumber.length == ' ' || UserNumber.length != 11 ){
      alert("Please enter a valid phone number");
      return false; 
    }
    else if(Useremail.length < 8){
      alert("Please enter a valid email");
      return false;
    }
    else if (bookDate.length < 8){
      alert("Please select a valid date")
      return false;
    }
    else if (bookTime.length < 6){
      alert("Please select a valid time")
      return false;
    }
    else{
      return true
    }
  }