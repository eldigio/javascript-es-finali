export const form = document.querySelector('form');
export const errMessage = document.createElement('div');
export const totalIncomeMessage = document.createElement('div');
export const taxAmountMessage = document.createElement('div');
export const remainingIncomeMessage = document.createElement('div');

export const error = (form, mex) => {
  totalIncomeMessage.remove();
  taxAmountMessage.remove();
  remainingIncomeMessage.remove();
  errMessage.textContent = mex;
  errMessage.classList.add('text-danger');
  form.append(errMessage);
  return errMessage;
};
