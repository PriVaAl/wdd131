const wcf = document.querySelector('#wcf');

function windchill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
}

let tempC = 24;
let speed = 13;
if (tempC <= 24 && speed > 12.8) {
    wcf.textContent = windchill(tempC, speed).toFixed(1);
} else {
    wcf.textContent = "N/A";
}
