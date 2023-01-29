// year 

let yearHeader = document.querySelector(".yearHeader");

nextYear = new Date().getFullYear() + 1;

yearHeader.innerText = nextYear


// current day
// future date

let dayEl = document.querySelector('.days');
let hoursEl = document.querySelector('.hours');
let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');



let newYearDate = new Date('Jan 01, 2024 00:00:00').getTime();


upToDateCountDown()

function upToDateCountDown(){
    let newYearDate = new Date('Jan 01, 2024 00:00:00').getTime();
    
    let todayDate = new Date().getTime();

    gap = newYearDate - todayDate

    let seconds = 1000;
    let minutes = 60 * seconds;
    let hours = 60 * minutes;
    let day =    24 * hours;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day)/hours);
    let m = Math.floor((gap % hours)/minutes);
    let s = Math.floor((gap % minutes) / seconds);
    

    dayEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;

    setTimeout(upToDateCountDown, 1000)

};

// footer section

let footerDate = document.querySelector('.footer-date');
let footerName = document.querySelector('.footer-name');


const ftDate = new Date().getFullYear();
footerDate.innerText = ftDate

const ftName = 'Blankson Obeng';

footerName.innerText = 'Design By' + ftName;





