'use strict';
import { elements } from './base.js';
import * as acnts from './model/account.js';

const accounts = [
  acnts.account1,
  acnts.account2,
  acnts.account3,
  acnts.account4,
];

// Functions
const displayMovements = function (movements, sort = false) {
  elements.containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    elements.containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  elements.labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  elements.labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  elements.labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  elements.labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

elements.btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === elements.inputLoginUsername.value
  );

  if (currentAccount?.pin === +elements.inputLoginPin.value) {
    // Display UI and message
    elements.labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    elements.containerApp.style.opacity = 100;

    // Clear input fields
    elements.inputLoginUsername.value = elements.inputLoginPin.value = '';
    elements.inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    alert('Wrong pin or username. Please try again');
    elements.inputLoginUsername.innerHTML = '';
    elements.inputLoginPin.innerHTML = '';
  }
});

elements.btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +elements.inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === elements.inputTransferTo.value
  );
  elements.inputTransferAmount.value = elements.inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    alert('Something went wrong. Please enter valid details');
    elements.inputTransferTo.innerHTML = '';
    elements.inputTransferAmount.innerHTML = '';
  }
});

elements.btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(elements.inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    alert('10% of amount is greater than on your highest depost');
  }
  elements.inputLoanAmount.value = '';
});

elements.btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    elements.inputCloseUsername.value === currentAccount.username &&
    +elements.inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    elements.containerApp.style.opacity = 0;
  } else {
    alert('Invalid credentials');
  }

  elements.inputCloseUsername.value = elements.inputClosePin.value = '';
});

let sorted = false;
elements.btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
