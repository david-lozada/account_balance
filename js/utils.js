export function hasEmptyValues(data) {
  // Iterate over each key and check its value
  for (const value in data) {
    // Check if the value is empty
    if (data[value] === "" || data[value] === null || data[value] === undefined || (typeof data[value] === 'string' && value.trim() === "")) {
      return true; // Found an empty value
    }
  }
  return false; // No empty values found
}

export function clearForm(formId) {
	const form = document.querySelector(formId)
	const inputs = form.querySelectorAll('input')
	for (const input of inputs) {
		input.value = ''
	}
  focusForm(formId)
}

export function focusForm (formId) {
  const incomeForm = document.querySelector(formId)
  const input = incomeForm.querySelector('input')
  input.focus()
}

export function totalIncomes(total) {
  const tIncomeTag = document.querySelector('#total_income').querySelector('strong')
  tIncomeTag.textContent = formatCurrency(total)
}

export function totalExpenses(total) {
  const tExpenseTag = document.querySelector('#total_expense').querySelector('strong')
  tExpenseTag.textContent = formatCurrency(total)
}

export function accountBalance(balance) {
  const balanceTag = document.querySelector('#balance').querySelector('strong')
  balanceTag.textContent = formatCurrency(balance)
}

export function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}