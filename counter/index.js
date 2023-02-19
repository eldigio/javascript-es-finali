'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  let number = container.children[0];
  const addBtn = e.target.closest('.btn-success');
  const subBtn = e.target.closest('.btn-danger');
  const resBtn = e.target.closest('.btn-secondary');

  if (addBtn) number.textContent = Number(number.textContent) + 1;
  if (subBtn) number.textContent = Number(number.textContent) - 1;
  if (resBtn) number.textContent = Number(0);

  if (Number(number.textContent) == 0)
    number.classList.remove('text-success', 'text-danger');
  if (Number(number.textContent) > 0) number.classList.add('text-success');
  if (Number(number.textContent) < 0) number.classList.add('text-danger');
});
