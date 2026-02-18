class IncomeTransaction {
    constructor(incomes = []) {
        this.incomes = incomes;
        this.loadIncomesFromLocalStorage();
    }

    totalIncome() {
        return this.incomes.reduce((total, income) => total + parseInt(income.amount), 0);
    }

    addIncome(...incomes) {
        this.incomes.push(...incomes);
        try {
            this.saveIncomesToLocalStorage();
            console.info('IncomeTransaction: saved incomes to localStorage', this.incomes);
        } catch (err) {
            console.error('IncomeTransaction: failed to save incomes to localStorage', err);
        }
    }

    removeIncome(incomes) {
        const filteredIncomes = this.incomes.filter(income => !incomes.includes(income.id));
        this.incomes = filteredIncomes
        console.log('this.incomes', this.incomes)
        this.saveIncomesToLocalStorage();
    }

    loadIncomesFromLocalStorage() {
        const storedIncomes = localStorage.getItem('incomes');
        if (storedIncomes) {
            this.incomes = JSON.parse(storedIncomes);
        }
    }

    saveIncomesToLocalStorage() {
        // wrap in try/catch so we can surface errors (quota, private mode, etc.)
        try {
            localStorage.setItem('incomes', JSON.stringify(this.incomes));
        } catch (err) {
            // rethrow so callers can detect failure if needed
            console.error('IncomeTransaction.saveIncomesToLocalStorage error', err);
            throw err;
        }
    }
}

export default IncomeTransaction;