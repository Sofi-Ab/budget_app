const budgetInput = document.getElementById('input_budget');
const totalBudget = document.getElementById('budget_span');
const titleExpenseInput = document.getElementById('titleExpense');
const inputAmount = document.getElementById('inputAmount');
const calculateButton = document.querySelector('.calculate');
const addExpenseButton = document.querySelector('.add_expense');
const totalExpense = document.querySelector('#expense_span');
const totalBalance = document.querySelector('#balance_span');
const table = document.querySelector('table');

let expenses = [];
let totalAmount = 0;
const localTotalBudgetAmount = 'localTotalBudgetAmount'
const localExpenses = 'localExpenses'

calculateButton.addEventListener('click', () => {
    const inputValue = +budgetInput.value;
    const totalbudgetValue = parseInt(totalBudget.textContent);
    totalAmount = inputValue + totalbudgetValue;
    totalBudget.textContent = `${totalAmount} F`;
    budgetInput.value = '';
    localStorage.setItem(localTotalBudgetAmount, `${totalAmount}`);
})

addExpenseButton.addEventListener('click', (e) => {
    e.preventDefault();
    const titleExpenseValue = titleExpenseInput.value;
    const amountExpenseValue = +inputAmount.value;
    
    table.innerHTML += `
    <tr data-index="${expenses.length}" class="icon3 d-flex gap-5 justify-content-center align-items-center ">
        <td>${titleExpenseValue}</td>
        <td>${amountExpenseValue}</td>
        <td class="">
            <i class="bi bi-pencil-square" onclick="updateItem(event)"></i>
            <i class="bi bi-trash-fill" onclick="deleteItem(event)"></i>
        </td>
    </tr>`;

    const dataObject = {
        title: titleExpenseValue,
        price: amountExpenseValue
    }
    expenses.push(dataObject);

    localStorage.setItem(localExpenses, JSON.stringify(expenses));
    calculatetotalExpense()
    titleExpenseInput.value = ''
    inputAmount.value = ''
})



const init = () => {
    totalAmount = +localStorage.getItem(localTotalBudgetAmount)
    totalBudget.textContent = `${totalAmount} F`;

    const tableData = localStorage.getItem(localExpenses);
    expenses = JSON.parse(tableData);

    for (let i = 0; i < expenses.length; i++) {
        const element = expenses[i];
        table.innerHTML += `
    <tr data-index="${i}" class="icon3 d-flex gap-5 justify-content-center align-items-center ">
    <td>${element.title}</td>
    <td>${element.price}</td>
    <td class="">
        <i class="bi bi-pencil-square" onclick="updateItem(event)"></i>
        <i class="bi bi-trash-fill" onclick="deleteItem(event)"></i>
    </td>
    </tr>`;
    }
    calculatetotalExpense()
}
init()

function calculatetotalExpense() {
    let initialeExpense = 0
    expenses?.forEach(expense => {
        initialeExpense += expense.price
    })

    totalExpense.textContent = initialeExpense;
    const totalBalanceValue = totalAmount - initialeExpense;
    totalBalance.innerHTML = `${totalBalanceValue}`
}

function updateItem(e) {
    const index = +e.target.parentNode.parentNode.getAttribute('data-index');
    const data = expenses[index];
    console.log(data);
    titleExpenseInput.value = data.title
    inputAmount.value = data.price
}

function deleteItem(e) {
    const index = +e.target.parentNode.parentNode.getAttribute('data-index');
    expenses.splice(index, 1);
    localStorage.setItem(localExpenses, JSON.stringify(expenses));
    table.innerHTML = ''
    init()
}