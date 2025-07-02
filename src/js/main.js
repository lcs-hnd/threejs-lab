// src/js/main.js
'use strict';

import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `<h4 style="text-align: center">Check out the <u>README</u> for the scripts and a thorough explanation of the template. Happy Coding!</h4><img style="display: block; margin: 0 auto;" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanA3dHc5cDlyazdxbWdmOGs2ZHd0emltYzlpZWNpeWJxb2tzcmk5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y93slPbDMdeXJQONHa/giphy.gif" />`;
  }
});
