function modification(){

var user_name = document.getElementById("Name");
var user_mail = document.getElementById("mail");
var user_number = document.getElementById("number");
var user_coach = document.getElementById("coach");
var user_message = document.getElementById("msg");



document.getElementById("repete-1").innerHTML = user_name.value;
document.getElementById("repete-2").innerHTML = user_mail.value;
document.getElementById("repete-3").innerHTML = user_number.value;
document.getElementById("repete-4").innerHTML = user_coach.value;
document.getElementById("repete-5").innerHTML = user_message.value;
}