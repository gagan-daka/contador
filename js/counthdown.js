
function toggleIcon(){
  //let myHeader = document.getElementById("myHeader");
  let checkBox = document.getElementById("switch-mode");
  let menuIcon = document.getElementById("switch-icon");

  if(!checkBox.checked){
      menuIcon.src = "icons/light-mode.png";
      document.body.setAttribute("class","dark-mode");
    }else{
      menuIcon.src = "icons/dark-mode.png";
      document.body.setAttribute("class","white-mode");
  }
}


//var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var countDownDate = new Date("January 30, 2022 23:45:00").getTime();
    
var x = setInterval(function() {
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML  = seconds;
    
  
  if (distance < 0) {
    clearInterval(x);
    /*hay que crear un elemento para notificar que el contador ha expirado*/
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);
