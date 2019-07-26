window.$ = window.jQuery = require('jquery');
import FlipClock from 'flipclock';


import './components/main-header/main-header';
import './components/main-banner/main-banner';
import './components/menu-toggle/menu-toggle';
import './components/contact-form/contact-form';
import './components/scroll-to-anchor/scroll-to-anchor';

const el = document.querySelector('.clock');


// const clock = new FlipClock(el, new Date, {
//     face: 'HourCounter'
// });