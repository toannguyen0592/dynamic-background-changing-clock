// DOM elements
const time = document.getElementById('time'),
    date = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    background = document.getElementById('background'),
    sunMoon = document.getElementById('sunmoon');



// Show The Time
function showTime() {
    let today = new Date();
    let hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// Show today date
function showDate() {
    let today = new Date();
    let dateString = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();

    // Output the date
    date.innerHTML = dateString;
}

// Set background and greeting according to the hour
function setBgGreeting() {
    let today = new Date();
    let hour = today.getHours();

    if (hour >= 6 && hour <= 7) {
        background.style.backgroundColor = "var(--sunrise)";
        greeting.textContent = 'Good Morning';
    } else if (hour > 7 && hour < 12) {
        // Morning
        background.style.backgroundColor = "var(--daytime)";
        greeting.textContent = 'Good Morning';
    } else if (hour > 12 && hour < 18) {
        // Afternoon
        background.style.backgroundColor = "var(--daytime)";
        greeting.textContent = 'Good Afternoon';
    } else if (hour >= 18 && hour <= 19) {
        background.style.backgroundColor = "var(--sunset)";
        greeting.textContent = 'Good Evening';
    } else {
        background.style.backgroundColor = "var(--nighttime)";
        greeting.textContent = 'Good Night';
    }
}

// Rotate the sun and the moon
function rotateSunMoon() {
    let today = new Date(),
        hr = today.getHours();
    // hrDegree = ((hr / 12) * 360) + 90;
    // sunMoon.style.transform = `rotate(${hrDegree}deg)`;



    switch (hr) {
        case 0:
            sunMoon.style.transform = "rotate(-90deg)";
            break;
        case 1:
            sunMoon.style.transform = "rotate(-75deg)";
            break;
        case 2:
            sunMoon.style.transform = "rotate(-60deg)";
            break;
        case 3:
            sunMoon.style.transform = "rotate(-45deg)";
            break;
        case 4:
            sunMoon.style.transform = "rotate(-30deg)";
            break;
        case 5:
            sunMoon.style.transform = "rotate(-15deg)";
            break;
        case 6:
            sunMoon.style.transform = "rotate(0deg)";
            break;
        case 7:
            sunMoon.style.transform = "rotate(15deg)";
            break;
        case 8:
            sunMoon.style.transform = "rotate(30deg)";
            break;
        case 9:
            sunMoon.style.transform = "rotate(45deg)";
            break;
        case 10:
            sunMoon.style.transform = "rotate(60deg)";
            break;
        case 11:
            sunMoon.style.transform = "rotate(75deg)";
            break;
        case 12:
            sunMoon.style.transform = "rotate(90deg)";
            break;
        case 13:
            sunMoon.style.transform = "rotate(105deg)";
            break;
        case 14:
            sunMoon.style.transform = "rotate(120deg)";
            break;
        case 15:
            sunMoon.style.transform = "rotate(135deg)";
            break;
        case 16:
            sunMoon.style.transform = "rotate(150deg)";
            break;
        case 17:
            sunMoon.style.transform = "rotate(165deg)";
            break;
        case 18:
            sunMoon.style.transform = "rotate(180deg)";
            break;
        case 19:
            sunMoon.style.transform = "rotate(195deg)";
            break;
        case 20:
            sunMoon.style.transform = "rotate(210deg)";
            break;
        case 21:
            sunMoon.style.transform = "rotate(225deg)";
            break;
        case 22:
            sunMoon.style.transform = "rotate(240deg)";
            break;
        case 23:
            sunMoon.style.transform = "rotate(255deg)";
            break;
        case 24:
            sunMoon.style.transform = "rotate(270deg)";
            break;
        default:
    }
}


// Run all functions
showTime();
showDate();
setBgGreeting();
rotateSunMoon();