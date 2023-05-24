function clock() {
    var d = new Date();
    var hour = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    if (mins < 10){
        mins = "0" + mins;
    }
    if (secs < 10){
        secs = "0" + secs;
    }
    document.getElementById("digiclock").innerHTML= hour+":"+mins+":"+secs;
}
var timeInterval = setInterval(clock, 1000);