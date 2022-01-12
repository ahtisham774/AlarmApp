let dT = document.querySelector("#alarm_time");
let btn = document.querySelector("#set_alarm");
let clock = document.querySelector("#clock");
let outPutDays = document.querySelector("#day");
let outPutMonths = document.querySelector("#month");
let outPutYears = document.querySelector("#year");
let outPutHours = document.querySelector("#hour");
let outPutMinutes = document.querySelector("#minute");
let outPutSeconds = document.querySelector("#second");
const reset = document.querySelector("#reset");
const tunes = document.querySelector("#tunes");
const tune_div = document.querySelector("#tune_div");
const tune_btn = document.querySelector("#tune");
const list_items = document.querySelector("#list");

let hr = 0;
let m = 0;
let s = 0;
let id;
musics = ["musics/music.mp3","musics/beep.wav","musics/Nice Wake Up.mp3"]
var audio = new Audio(musics[0]);
//setInterval(displayTime,100);
function displayTime() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }

  console.log(hour + " : " + min + " : " + sec);
}
reset.addEventListener("click",()=>{
    outPutHours.innerHTML = 0;
    outPutMinutes.innerHTML = 0;
    outPutSeconds.innerHTML = 0;
    clock.src = "media/images.png";
    audio.load();
    clearInterval(id);

});
btn.addEventListener("click", () => {
    if(dT.value !==""){

        if(list_items.value == 0 || list_items.value == 1 || list_items.value == 2){
            audio.src = musics[list_items.value]
            audio.loop = true;
        }
        else{
            console.log("No Enough Tunes")
        }
        let dateTime = new Date();
        var hour = dT.value.split(":")[0];
        var min = dT.value.split(":")[1];
        audio.load();
        
        if (hour <= 12) {
          hr = hour -dateTime.getHours();
          m = min - dateTime.getMinutes()-1;
         
        } else {
          hr = hour  -  dateTime.getHours();
          m = min - dateTime.getMinutes() -1;
         
        }  
          clock.src = "media/download.png";
          id = setInterval(() => {
            dateTime = new Date();
            if (hour == dateTime.getHours() && min == dateTime.getMinutes()) {	
              audio.play();
              clearInterval(id);
            } else {
              s = (59 - dateTime.getSeconds())%60
              console.log(hr + " " + m + " " + s);
              outPutHours.innerHTML = hr;
              outPutMinutes.innerHTML = m;
              outPutSeconds.innerHTML = s;
              if (s == 0) {
                  m--
                if (m != 0) {
                  m--;
                  if (m == 0) {
                    h--
                    m = 59  
                    if (hr != 0) {
                      hr--;
                    }
                  }
                }
              }
      
            }
          }, 1000);
    }
    else{
       alert("Please Select Time")
    }

  

  // if((year >= dateTime.getFullYear() && month >= (dateTime.getMonth()+1) && day >= dateTime.getDate()) ||
  //    (year == dateTime.getFullYear() && month == (dateTime.getMonth()+1) && day >= dateTime.getDate())){
  //     alert("true");
  // }

  // if( year >= dateTime.getFullYear()){
  //     if(year == dateTime.getFullYear()){
  //         if(month >= (dateTime.getMonth()+1)){
  //             if(month == (dateTime.getMonth()+1)){
  //                 if(day >= dateTime.getDate()){
  //                     alert("true");
  //                 }
  //                 else{
  //                     alert("prev date");
  //                 }
  //             }
  //         }
  //         else{
  //             alert("prev month");
  //         }
  //     }
  //     else{

  //     }
  // }
  // else{
  //     alert("prev date entered");
  // }
});
