/* Problem statement

Create a BankAccount constructor that initializes:

. A balance property representing the account balance.
. A transactions array to log all deposit and withdrawal activities.

Implement the following methods on the prototype:

1. deposit(amount):
o Increases the balance by the given amount.
o Adds a transaction log in the format: "Deposited X" (where X is the amount).
2. withdraw(amount):
o Decreases the balance by the given amount.
o Prevents overdraft (cannot withdraw if balance is insufficient).
o If withdrawal is successful, log: "Withdrew X".
o If balance is insufficient, log: "Insufficient balance".
3. getTransactionHistory():
o Returns the list of all transactions as an array of strings in the order they occurred.

Challenge

. Implement BankAccount constructor with balance and transactions.
. Attach deposit(amount), withdraw(amount), and getTransactionHistory()
methods to the prototype. */

function BankAccount() {
  this.balance = 0;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
  console.log(`Deposited: ${amount}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance < amount) {
    this.transactions.push("Insufficient balance");
    console.log("Insufficient balance");
  } else {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
    console.log(`Withdrew: ${amount}`);
  }
};

BankAccount.prototype.getTransactionHistory = function () {
  console.log(this.transactions);
};

// Example usage
const account = new BankAccount();
account.deposit(100); // Deposited: 100
account.withdraw(50); // Withdrew: 50
account.withdraw(70); // Insufficient balance
account.deposit(30); // Deposited: 30
account.withdraw(25); // Withdrew: 25
account.getTransactionHistory(); // ["Deposited 100", "Withdrew 50", "Insufficient balance", "Deposited 30", "Withdrew 25"]
// This solution is similar to the previous solutions. The only difference is the implementation of the
// getTransactionHistory() method that returns the transactions array. The deposit() and withdraw()
// methods add transactions to the transactions array. The getTransactionHistory() method logs the
// transactions array to the console.
