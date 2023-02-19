export const people = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 22,
    gender: 'Uomo',
    height: 176,
    weight: 77,
    sport: 'Calcio',
    job: 'Studente',
  },
  {
    id: 2,
    firstName: 'Giacomo',
    lastName: 'Verdi',
    age: 31,
    gender: 'Uomo',
    height: 176,
    weight: 60,
    sport: 'Tennis',
    job: 'Impiegato',
  },
  {
    id: 3,
    firstName: 'Maria',
    lastName: 'Bianchi',
    age: 21,
    gender: 'Donna',
    height: 170,
    weight: 57,
    sport: 'Volley',
    job: 'Studente',
  },
  {
    id: 4,
    firstName: 'Jessica',
    lastName: 'Esposito',
    age: 42,

    gender: 'Donna',
    height: 180,
    weight: 60,
    sport: null,
    job: 'Insegnante',
  },
  {
    id: 5,
    firstName: 'Carlo',
    lastName: 'De Luca',
    age: 30,
    gender: 'Uomo',
    height: 183,
    weight: 77,
    sport: 'Calcio',
    job: 'Programmatore',
  },
  {
    id: 6,
    firstName: 'Elena',
    lastName: 'Di Biagio',
    age: 25,
    gender: 'Donna',
    height: 161,
    weight: 50,
    sport: 'Ballerina',
    job: 'Studente',
  },
  {
    id: 7,
    firstName: 'Matteo',
    lastName: 'Evangelista',
    age: 21,
    gender: 'Uomo',
    height: 171,
    weight: 80,
    sport: 'Tennis',
    job: 'Operaio',
  },
  {
    id: 8,
    firstName: 'Laura',
    lastName: 'Marroni',

    age: 19,
    gender: 'Donna',
    height: 188,
    weight: 65,
    sport: 'Volley',
    job: 'Studente',
  },
];

export const cardContainer = document.querySelector('#card-container');
export const form = document.querySelector('form');
export const btnAll = form.querySelector('#all');
export const btnMen = form.querySelector('#men');
export const btnWomen = form.querySelector('#women');
export const btnStudents = form.querySelector('#students');
export const radioInput = form.querySelector('#filterNormal');
export const radioBtns = form.querySelector('#filterFilter');

export const createCard = (person) => {
  const container = document.createElement('div');
  container.classList.add('col-lg-3', 'col-sm-6');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'rounded');
  if (person.gender == 'Uomo') cardBody.style.backgroundColor = '#add8e6';
  if (person.gender == 'Donna') cardBody.style.backgroundColor = '#ffc0cb';

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title', 'text-dark');
  cardTitle.textContent = person.firstName + ' ' + person.lastName;

  const cardAge = document.createElement('p');
  cardAge.classList.add('card-text', 'text-dark');
  cardAge.textContent = 'Età: ' + person.age;

  const cardJob = document.createElement('p');
  cardJob.classList.add('card-text', 'text-dark');
  cardJob.textContent = 'Lavoro: ';

  const cardJobValue = document.createElement('span');
  if (person.job == 'Studente') cardJobValue.classList.add('text-success');
  cardJobValue.classList.add('fw-semibold');
  cardJobValue.textContent = person.job;

  cardJob.appendChild(cardJobValue);
  cardBody.append(cardTitle, cardAge, cardJob);
  card.appendChild(cardBody);
  container.appendChild(card);

  return container;
};

export const clearCardContainer = () => {
  cardContainer.innerHTML = '';
};

export const activeBtn = (btn) => {
  btn.classList.replace('btn-outline-secondary', 'btn-secondary');
};

export const deactiveBtn = (btn) => {
  btn.classList.replace('btn-secondary', 'btn-outline-secondary');
};

export const createAllCard = () => {
  people.forEach((person) => {
    const container = createCard(person);
    cardContainer.appendChild(container);
  });
};
