'use strict';

import {
  createCol,
  createDataDisplayText,
  createOverlay,
  createText,
  createViewBtn,
  insertData,
  people,
  peopleContainer,
  removeOverlay,
} from './utils.js';

people.forEach((person) => {
  const personCard = createCol();
  const personInfo = createText(person);
  const viewBtn = createViewBtn(person);

  personCard.append(personInfo, viewBtn);
  peopleContainer.appendChild(personCard);
});

peopleContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');

  if (btn) {
    const overlay = createOverlay();
    const displayDataText = createDataDisplayText();

    const firstName = insertData('Nome');
    firstName.textContent += people[btn.id - 1].firstName;

    const lastName = insertData('Cognome');
    lastName.textContent += people[btn.id - 1].lastName;

    const age = insertData('Età');
    age.textContent += people[btn.id - 1].age;

    const gender = insertData('Sesso');
    gender.textContent += people[btn.id - 1].gender == 'M' ? 'Uomo' : 'Donna';

    const height = insertData('Altezza');
    height.textContent += people[btn.id - 1].height + 'mt';

    const weight = insertData('Peso');
    weight.textContent += people[btn.id - 1].weight + 'kg';

    const sport = insertData('Sport');
    sport.textContent += people[btn.id - 1].sport;

    const job = insertData('Lavoro');
    job.textContent += people[btn.id - 1].job;

    displayDataText.append(
      firstName,
      lastName,
      age,
      gender,
      height,
      weight,
      sport,
      job
    );

    overlay.appendChild(displayDataText);
    document.body.append(overlay);
  }
});

document.body.addEventListener('click', (e) => {
  const overlay = e.target.closest('#overlay');

  if (!overlay) return;

  removeOverlay(overlay);
});
