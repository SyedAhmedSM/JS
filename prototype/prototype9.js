/* Problem statement

You are building a banking system where multiple bank accounts can exist. Each account has an
accountNumber, holderName, and balance. Implement the following methods:

. deposit(amount): Adds money to the balance.
. withdraw(amount): Deducts money but prevents overdraft.
. transfer(amount, targetAccount): Transfers money from one account to another if the
balance allows it.

Challenge

. Implement BankAccount constructor with accountNumber, holderName, and balance.
. Attach deposit(amount), withdraw(amount), and transfer(amount, targetAccount)
methods to the prototype.   */

function BankAccount(accountNumber, holderName, balance) {
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
  }
};

BankAccount.prototype.transfer = function (amount, targetAccount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    targetAccount.balance += amount;
  }
};

const account1 = new BankAccount(123, "John Doe", 1000);
const account2 = new BankAccount(456, "Jane Doe", 500);
account1.deposit(500);
account1.withdraw(200);
account1.transfer(200, account2);
console.log(account1.balance); // 1100
console.log(account2.balance); // 700
account2.withdraw(800);
console.log(account2.balance); // 700
account2.transfer(800, account1);
console.log(account2.balance); // 700
