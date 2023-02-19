export const people = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 22,
    gender: 'M',
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
    gender: 'M',
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
    gender: 'F',
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
    gender: 'F',
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
    gender: 'M',
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
    gender: 'F',
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
    gender: 'M',
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
    gender: 'F',
    height: 188,
    weight: 65,
    sport: 'Volley',
    job: 'Studente',
  },
];

export const peopleContainer = document.querySelector('.row');

export const createCol = () => {
  const personCard = document.createElement('div');
  personCard.classList.add('col', 'border', 'p-3');
  return personCard;
};

export const createText = (person) => {
  const personInfo = document.createElement('p');
  personInfo.classList.add('text-nowrap');
  personInfo.textContent = person.firstName + ' ' + person.lastName;
  return personInfo;
};

export const createViewBtn = (person) => {
  const viewBtn = document.createElement('button');
  viewBtn.classList.add('btn', 'btn-primary');
  viewBtn.textContent = 'Visualizza';
  viewBtn.id = person.id;
  return viewBtn;
};

export const createOverlay = () => {
  document.body.classList.add('overflow-hidden');
  const overlay = document.createElement('div');
  overlay.classList.add(
    'position-fixed',
    'w-100',
    'h-100',
    'top-0',
    'left-0',
    'right-0',
    'bottom-0',
    'bg-dark',
    'bg-opacity-50'
  );
  overlay.id = 'overlay';
  return overlay;
};

export const removeOverlay = (overlay) => {
  document.body.classList.remove('overflow-hidden');
  overlay.remove();
};

export const createDataDisplayText = () => {
  const displayDataText = document.createElement('div');
  displayDataText.classList.add(
    'position-absolute',
    'top-50',
    'start-50',
    'translate-middle',
    'p-5',
    'bg-light',
    'z-3',
    'text-dark'
  );
  return displayDataText;
};

export const insertData = (fieldName) => {
  const field = document.createElement('p');
  field.classList.add('text-nowrap');
  field.textContent = `${fieldName}: `;
  return field;
};
