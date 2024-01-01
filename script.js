// fonction pour ajouter un budget
let budgetSet = document.querySelector('#budget_span')
let balanceSet = document.querySelector('#balance_span')
let expenseSet = document.querySelector('#expense_span')
let inputBudget = document.querySelector('#input_budget')
let inputAmount = document.querySelector('#inputAmount')
let btnCalculate = document.querySelector('.calculate')
let add_expense = document.querySelector('.add_expense')
let initialBudget = 0
let initialBlance = 0
let expenseValue = 0;
//localstorage
let myAddBudgetRecupere = JSON.parse(localStorage.getItem('addBudget'));
let myAddBalance = JSON.parse(localStorage.getItem('addAalance'))

expenseValue = JSON.parse(localStorage.getItem('fadi'))

// ************** Budget ********************
function addBudget() {
    budgetSet.textContent = initialBudget += parseInt(inputBudget.value)
    let myAddBudget = (initialBudget)
    localStorage.setItem('addBudget', myAddBudget)
}

// **************** balance ********************
function addBalance() {
    // stocker la balance dans le localStorage
    balanceSet.textContent = initialBlance += parseInt(inputBudget.value)
    let myAddBalance = (initialBlance)
    localStorage.setItem('addAalance', myAddBalance)
    console.log(myAddBalance);
}

// condition pour afficher le budget dans dans budgetSet et  balanceSet 
if (myAddBudgetRecupere && myAddBalance && expenseValue ) {
    budgetSet.textContent = myAddBudgetRecupere
    balanceSet.textContent = myAddBalance
    expenseSet.textContent = expenseValue;
}

// Boutton calculer au click 
btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();
    addBudget();
    addBalance()
   
})

// **************** Ajout de depense ********************
function addExpense() {
    expenseValue += parseInt(inputAmount.value)
    localStorage.setItem('fadi', JSON.stringify(expenseValue));
    expenseSet.textContent = expenseValue;   
}
 
add_expense.addEventListener('click', (e) => {
    e.preventDefault();
    addExpense();   
    calculateBalance();
})


let newBalance = 0;
function calculateBalance() {
    // balanceSet.textContent = parseInt(inputBudget.value) - parseInt(inputAmount.value) 

   
    
}