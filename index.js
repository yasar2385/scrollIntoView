// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const element = document.getElementById('box');

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: 'end' });
element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

let btn = document.querySelector('.btn');
let el = document.querySelector('.special');
var click = 0;
btn.addEventListener('click', function () {
  if (click == 0) {
    console.log(click);
    el.scrollIntoView(true);
    click++;
  } else if (click == 1) {
    console.log(click);
    el.scrollIntoView(false);
    click++;
  } else if (click == 2) {
    console.log(click);
    el.scrollIntoView({ block: 'end' });
    click++;
  } else if (click == 3) {
    console.log(click);
    el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    click = 0;
  }
});

