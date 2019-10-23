const $ = window.$ = window.jQuery = require('jquery');
import FlipClock from 'flipclock';

const el = document.querySelector('.clock');


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

let newdd = 1;
    mm = +mm + 1;
    mm = mm % 12;

let newday  = yyyy + '-' + mm + '-' + newdd;
console.log(newday);

const clock = new FlipClock(el, new Date(newday), {
    face: 'DayCounter',
    countdown: true,
    language: 'ru',
    // autoStart: false
});

