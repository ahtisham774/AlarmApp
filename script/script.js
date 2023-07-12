let dT = document.querySelector("#alarm_time");
let btn = document.querySelector("#set_alarm");
let clock = document.querySelector("#clock");
let outPutDays = document.querySelector("#day");
let outPutMonths = document.querySelector("#month");
let outPutYears = document.querySelector("#year");

const reset = document.querySelector("#reset");
const tunes = document.querySelector("#tunes");
const tune_div = document.querySelector("#tune_div");
const tune_btn = document.querySelector("#tune");
const list_items = document.querySelector("#list");

let hr = 0;
let m = 0;
let s = 0;
let id;
musics = ["musics/music.mp3", "musics/beep.wav", "musics/Nice Wake Up.mp3","https://www.thesoundarchive.com/ringtones/Woke-up-This-Morning-Chosen-One-Mix.mp3"]
var audio = new Audio(musics[0]);

reset.addEventListener("click", () => {
    let outPutHours = document.querySelector("#hour");
    let outPutMinutes = document.querySelector("#minute");
    let outPutSeconds = document.querySelector("#second");
    outPutHours.innerHTML = 0;
    outPutMinutes.innerHTML = 0;
    outPutSeconds.innerHTML = 0;
    clock.src = "media/images.png";
    audio.load();
    clearInterval(id);

});
btn.addEventListener("click", () => {
    if (dT.value !== "") {

       
        audio.src = musics[list_items.value]
        audio.loop = true;
        clearInterval(id)
        var currentDateTime = new Date();
        var alarmDateTime = new Date(
            currentDateTime.getFullYear(),
            currentDateTime.getMonth(),
            currentDateTime.getDate(),
            dT.value.split(":")[0],
            dT.value.split(":")[1]
        );

        // If the alarm time is earlier than the current time, add a day to the alarm
        if (alarmDateTime < currentDateTime) {
            alarmDateTime.setDate(alarmDateTime.getDate() + 1);
        }

        clock.src = "media/download.png";
        id = setInterval(function () {
            // Get the current time
            var currentDateTime = new Date();

            // Calculate the remaining time until the alarm
            var remainingTime = alarmDateTime - currentDateTime;

            // If the remaining time is less than or equal to 0, clear the interval, display "Time's up!",
            // and play the alarm sound
            if (remainingTime <= 0) {
                clearInterval(id);
                audio.play()

                return;
            }

            // Convert the remaining time to hours, minutes, and seconds
            var hours = Math.floor(remainingTime / (1000 * 60 * 60));
            var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            let outPutHours = document.querySelector("#hour");
            let outPutMinutes = document.querySelector("#minute");
            let outPutSeconds = document.querySelector("#second");
            outPutHours.innerHTML = hours
            outPutMinutes.innerHTML = minutes
            outPutSeconds.innerHTML = seconds

        }, 1000);

    }
    else {
        alert("Please Select Time")
    }
});
