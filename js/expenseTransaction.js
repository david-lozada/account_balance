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
        try {
            this.saveExpensesToLocalStorage();
            console.info('ExpenseTransaction: saved expenses to localStorage', this.expenses);
        } catch (err) {
            console.error('ExpenseTransaction: failed to save expenses to localStorage', err);
        }
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
        try {
            localStorage.setItem('expenses', JSON.stringify(this.expenses));
        } catch (err) {
            console.error('ExpenseTransaction.saveExpensesToLocalStorage error', err);
            throw err;
        }
    }
}
export default ExpenseTransaction;