class ExpenseTransaction {
    constructor(expenses = []) {
        this.expenses = expenses;
        this.loadExpensesFromLocalStorage();
    }

    totalExpenses() {
        return this.expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
    }

    addExpense(...expenses) {
        this.expenses.push(...expenses);
        this.saveExpensesToLocalStorage();
    }

    removeExpense(expenses) {
        const filteredExpenses = this.expenses.filter(expense => !expenses.includes(expense.id));
        this.expenses = filteredExpenses
        this.saveExpensesToLocalStorage();
    }

    loadExpensesFromLocalStorage() {
        const storedExpenses = localStorage.getItem('expenses');
        if (storedExpenses) {
            this.expenses = JSON.parse(storedExpenses);
        }
    }

    saveExpensesToLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
}
export default ExpenseTransaction;