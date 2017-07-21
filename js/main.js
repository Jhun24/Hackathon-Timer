var d = new Date();

var day = d.getDate();
var min = d.getMinutes();
var sec = d.getSeconds();
var hour = d.getHours();


var hDay = 24;
var hMin = 0;
var hSec = 0;
var hHour = 9;

var returnDay = hDay - day;
var returnHour = hHour - hour;
var returnMin = hMin - min;
var returnSec = hSec - sec;

window.onload = function(){
    "use strict";

    console.log("Day : "+returnDay+" Hour : "+returnHour+" MIN : "+returnMin+" SEC : "+returnSec);
    if(returnSec < 0){
        returnSec = 60+returnSec;
        returnMin--;
    }

    if(returnMin < 0) {
        returnMin = 59 + returnMin;
        returnHour--;
    }

    if(returnHour < 0) {
        returnHour = 23+returnHour;
        returnDay--;
    }

}

function time(){
    "use strict";
    console.log("F12 꺼라..")
    returnSec--;
    if(returnSec < 0){
        returnSec = 60;
        returnMin--;
    }

    if(returnMin < 0) {
        returnMin = 59;
        returnHour--;
    }

    if(returnHour < 0) {
        returnHour = 23;
        returnDay--;
    }

    if(returnDay < 0){
        returnHour = 0;
        returnSec = 0;
        returnMin = 0;
        returnDay = 0;
    }

    $(".day").text(returnDay);
    $(".hour").text(returnHour);
    $(".min").text(returnMin);
    $(".sec").text(returnSec);

}


setInterval(time,1000);
