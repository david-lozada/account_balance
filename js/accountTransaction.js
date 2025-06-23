import ExpenseTransaction from "./expenseTransaction.js";
import IncomeTransaction from "./incomeTransaction.js";
import Person from "./person.js";

class AccountTransaction extends Person {
  constructor(firstName, lastName, incomes = [], expenses = []) {
    super(firstName, lastName);
    this.incomes = new IncomeTransaction(incomes);
    this.expenses = new ExpenseTransaction(expenses);
  }

  accountInfo() {
    return {
      fullName: this.fullName,
      totalIncome: this.incomes.totalIncome(),
      totalExpenses: this.expenses.totalExpenses(),
      balance: this.accountBalance()
    };
  }
  allAccountTransactions () {
    return [...this.incomes.incomes, ...this.expenses.expenses]
  }

  get accountBalance() {
    return this.incomes.totalIncome() - this.expenses.totalExpenses();
  }
}

export default AccountTransaction;