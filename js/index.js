import AccountTransaction from "./accountTransaction.js"
import { fillTable, removeTableRecords } from './table.js'
import { hasEmptyValues, 
  clearForm, 
  focusForm, 
  totalIncomes, 
  totalExpenses, 
  accountBalance } from "./utils.js"

window.onload = () => {
  focusForm('#income')
  const transactions = new AccountTransaction()
  fillTable(transactions.allAccountTransactions(), '#records_body')
  totalIncomes(transactions.incomes.totalIncome())
  totalExpenses(transactions.expenses.totalExpenses())
  accountBalance(transactions.accountBalance)
  const tableBody = document.querySelector('#records_body')

  // Remove any existing selected class
  function clearSelection(row) {
      if (row.classList.contains('selected')) {
          row.classList.remove('selected');
      }
  }
  // Add click event listener to each row
  tableBody.addEventListener('click', function(event) {
    const row = event.target.parentElement
    clearSelection(row); // Clear any previous selection
      if (row.tagName === 'TR') {
          row.classList.add('selected'); // Add selected class to clicked row
      }
  });

  const incomeForm = document.querySelector('#income')
  const expenseForm = document.querySelector('#expense')
  const incomeBtn = document.querySelector('#income_add_btn')
  const expenseBtn = document.querySelector('#expense_add_btn')
  const removeBtn = document.querySelector('#remove_btn')
  incomeForm.addEventListener('submit', handleIncome)
  expenseForm.addEventListener('submit', handleExpense)
  // Also handle button clicks so forms don't rely on native submission
  if (incomeBtn) incomeBtn.addEventListener('click', (evt) => handleIncome({ target: incomeForm, preventDefault: () => {} }))
  if (expenseBtn) expenseBtn.addEventListener('click', (evt) => handleExpense({ target: expenseForm, preventDefault: () => {} }))
  removeBtn.addEventListener('click', () => {
    const selectedRecords = removeTableRecords()
    const incomeSelected = selectedRecords.filter(item => item.type === 'Income').map(item => item.id)
    const expenseSelected = selectedRecords.filter(item => item.type === 'Expense').map(item => item.id)
    const accountTransactions = new AccountTransaction()
    for (const { type } of selectedRecords) {
      if(type === 'Income') accountTransactions.incomes.removeIncome(incomeSelected)
      if(type === 'Expense') accountTransactions.expenses.removeExpense(expenseSelected)
    }
  })
}

function handleIncome(e) {
  e.preventDefault()
  //actual form data
  const data = new FormData(e.target)
  // console.log('data', data)
  // Objects to create row
  const incomeObj = {
    id: crypto.randomUUID(),
    description: data.get('in_description'),
    amount: parseInt(data.get('in_amount')),
    type: 'Income'
  }
  
  // create row if no empty values
  if (!hasEmptyValues(incomeObj)) {
    const accountTransactions = new AccountTransaction()
    accountTransactions.incomes.addIncome(incomeObj)
    const transactions = accountTransactions.allAccountTransactions()
    fillTable(transactions, '#records_body')
    totalIncomes(accountTransactions.incomes.totalIncome())
    accountBalance(accountTransactions.accountBalance)
  }
  clearForm('#income')
}
function handleExpense(e) {
  e.preventDefault()
  //actual form data
  const data = new FormData(e.target)
  // Objects to create row
  const expenseObj = {
    id: crypto.randomUUID(),
    description: data.get('ex_description'),
    amount: parseInt(data.get('ex_amount')),
    type: 'Expense'
  }
  if (!hasEmptyValues(expenseObj)) {
    const accountTransactions = new AccountTransaction()
    accountTransactions.expenses.addExpense(expenseObj)
    const transactions = accountTransactions.allAccountTransactions()
    fillTable(transactions, '#records_body')
    totalExpenses(accountTransactions.expenses.totalExpenses())
    accountBalance(accountTransactions.accountBalance)
  }
  clearForm('#expense')
}

