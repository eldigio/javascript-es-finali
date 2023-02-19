'use strict';

import {
  errMessage,
  error,
  form,
  remainingIncomeMessage,
  taxAmountMessage,
  totalIncomeMessage,
} from './utils.js';

form.addEventListener('input', (e) => {
  const form = e.target.closest('form');
  const income = form.elements.income.value;
  const taxAmount = form.elements.taxAmount.value;

  if (!income || !taxAmount) return;

  if (income < 0) {
    error(form, 'Your income cannot be less than 0');
    return;
  }

  if (taxAmount < 0 || taxAmount > 100) {
    error(form, 'Tax Amount must be in range 0% to 100%');
    return;
  }

  errMessage.remove();
  totalIncomeMessage.textContent = `Total income: ${income}€`;
  taxAmountMessage.textContent = `Tax Amount: ${taxAmount}%`;
  remainingIncomeMessage.textContent = `Remaining Income: ${
    Math.round((income - income * (taxAmount / 100)) * 100) / 100
  }€`;

  form.append(totalIncomeMessage, taxAmountMessage, remainingIncomeMessage);
});
