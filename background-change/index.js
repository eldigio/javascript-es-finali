'use strict';

const btnSecondary = document.querySelector('.bg-secondary');
const btnLight = document.querySelector('.bg-light');
const btnPrimary = document.querySelector('.bg-primary');
const btnWarning = document.querySelector('.bg-warning');

btnSecondary.addEventListener('click', () => {
  document.body.className = 'bg-secondary';
});

btnLight.addEventListener('click', () => {
  document.body.className = 'bg-light';
});

btnPrimary.addEventListener('click', () => {
  document.body.className = 'bg-primary';
});

btnWarning.addEventListener('click', () => {
  document.body.className = 'bg-warning';
});
