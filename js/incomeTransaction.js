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
        this.saveIncomesToLocalStorage();
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
        localStorage.setItem('incomes', JSON.stringify(this.incomes));
    }
}

export default IncomeTransaction;