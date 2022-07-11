let mytime
let ttime, hours, mins, seconds, ampm


function showTime() {
    mytime = new Date();
    hours = mytime.getHours()
    mins = mytime.getMinutes()
    seconds = mytime.getSeconds()

    ampm = "AM"
    if (hours >= 12) {
        ampm = "PM"
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (mins < 10) {
        mins = "0" + mins
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }


    ttime = hours + " : " + mins + " : " + seconds + " " + ampm

    document.getElementById("time").innerHTML = ttime

}

function initClock() {
    showTime();
    window.setInterval("showTime()", 1000);
}

const chk = document.getElementById('chk');


chk.addEventListener('change', () => {
    document.body.classList.toggle('light');

});