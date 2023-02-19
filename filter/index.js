'use strict';

import {
  activeBtn,
  btnAll,
  btnMen,
  btnStudents,
  btnWomen,
  cardContainer,
  clearCardContainer,
  createAllCard,
  createCard,
  deactiveBtn,
  form,
  people,
  radioBtns,
  radioInput,
} from './utils.js';

clearCardContainer();
people.forEach((person) => {
  const container = createCard(person);
  cardContainer.appendChild(container);
});

form.addEventListener('input', (e) => {
  clearCardContainer();
  const input = e.target.closest('#filterName');

  if (input) {
    people.forEach((person) => {
      if (person.firstName.toLowerCase().includes(input.value.toLowerCase())) {
        const container = createCard(person);
        cardContainer.appendChild(container);
      } else if (
        person.lastName.toLowerCase().includes(input.value.toLowerCase())
      ) {
        const container = createCard(person);
        cardContainer.appendChild(container);
      } else if (person.job.toLowerCase().includes(input.value.toLowerCase())) {
        const container = createCard(person);
        cardContainer.appendChild(container);
      } else if (person.gender.toLowerCase() == input.value.toLowerCase()) {
        const container = createCard(person);
        cardContainer.appendChild(container);
      } else if (person.age.toString().includes(input.value)) {
        const container = createCard(person);
        cardContainer.appendChild(container);
      }
    });
  }

  return;
});

btnAll.addEventListener('click', (e) => {
  e.preventDefault();

  activeBtn(btnAll);
  deactiveBtn(btnMen);
  deactiveBtn(btnWomen);
  deactiveBtn(btnStudents);

  clearCardContainer();
  people.forEach((person) => {
    const container = createCard(person);
    cardContainer.appendChild(container);
  });
});

btnMen.addEventListener('click', (e) => {
  e.preventDefault();

  deactiveBtn(btnAll);
  activeBtn(btnMen);
  deactiveBtn(btnWomen);
  deactiveBtn(btnStudents);

  clearCardContainer();
  people.forEach((person) => {
    if (person.gender == 'Uomo') {
      const container = createCard(person);
      cardContainer.appendChild(container);
    }
  });
});

btnWomen.addEventListener('click', (e) => {
  e.preventDefault();

  deactiveBtn(btnAll);
  deactiveBtn(btnMen);
  activeBtn(btnWomen);
  deactiveBtn(btnStudents);

  clearCardContainer();
  people.forEach((person) => {
    if (person.gender == 'Donna') {
      const container = createCard(person);
      cardContainer.appendChild(container);
    }
  });
});

btnStudents.addEventListener('click', (e) => {
  e.preventDefault();

  deactiveBtn(btnAll);
  deactiveBtn(btnMen);
  deactiveBtn(btnWomen);
  activeBtn(btnStudents);

  clearCardContainer();
  people.forEach((person) => {
    if (person.job == 'Studente') {
      const container = createCard(person);
      cardContainer.appendChild(container);
    }
  });
});

radioInput.addEventListener('click', (e) => {
  form.querySelector('#filterName').removeAttribute('disabled', '');
  btnAll.setAttribute('disabled', '');
  btnMen.setAttribute('disabled', '');
  btnWomen.setAttribute('disabled', '');
  btnStudents.setAttribute('disabled', '');
  clearCardContainer();
  createAllCard();
});

radioBtns.addEventListener('click', (e) => {
  form.querySelector('#filterName').setAttribute('disabled', '');
  btnAll.removeAttribute('disabled', '');
  btnMen.removeAttribute('disabled', '');
  btnWomen.removeAttribute('disabled', '');
  btnStudents.removeAttribute('disabled', '');
  clearCardContainer();
  createAllCard();
});
