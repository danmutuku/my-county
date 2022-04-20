document.getElementById("btn").addEventListener("click", sayHi);
function sayHi(){
  var myTime = parseInt(prompt("Enter your Time:"));
  alert (myTime);
  if (myTime<12) {
document.getElementById("para"). innerHTML ="Good Morning";
}else if(myTime>=12 && myTime<16){
document.getElementById("para"). innerHTML ="Good Afternoon";
}else if(myTime>=16 && myTime<=24){
document.getElementById("para"). innerHTML ="Good Evening";
}else {
document.getElementById("para"). innerHTML ="Enter a valid time!";
}
}
