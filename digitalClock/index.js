const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")

function digitalClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am_pm = "AM"

    if (h > 12) {
        h = h - 12;
        am_pm = "PM"
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h
    minute.innerText = m
    second.innerText = s
    ampm.innerText = am_pm

    setTimeout (() => {
        digitalClock()
    }, 1000)
}
digitalClock()