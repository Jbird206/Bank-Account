// Business Logic for AddressBook ---------
function centralBank() {
  this.accounts = [],
  this.currentId = 0
}

centralBank.prototype.addAccount = function (account){
  account.id = this.assignId();
  this.accounts.push(account);
}

centralBank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

 // Business Logic for Accounts ---------
var Account= function (nameAccount, nameAccount2, checkingAccount) {
  this.nameAccount = nameAccount,
  this.lastName = nameAccount2,
  this.checkingAccount = checkingAccount;
  return this.nameAccount + this.lastName + this.checkingAccount;
};

var add  = function(inputtedcheckingAccount, accountDeposit) {
  return inputtedcheckingAccount += accountDeposit;
}

centralBank.prototype.deposit = function(accountDeposit) {
  return this.accounts[0].checkingAccount += accountDeposit;
}

var subtract = function(inputtedcheckingAccount, accountWithdraw) {
  return inputtedcheckingAccount - accountWithdraw;
}



// User Interface Logic ---------
var centralBank = new centralBank();

///function displayAccountDetails(centralBankToDisplay){}


$(document).ready(function() {
  //attachAccountListeners();
$("form#new-account").submit(function(event) {
  event.preventDefault();
  var inputtednameAccount = $("input#new-name-account").val();
  var inputtedLastname = $("input#last-name-account").val();
  var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());

  var newAccount = new Account(inputtednameAccount, inputtedLastname, inputtedcheckingAccount);

  centralBank.addAccount(newAccount);
  $("#outputName").html(inputtednameAccount+ " " +inputtedLastname);
  $("#output").html( newAccount.checkingAccount);
  
});




$("form#acctManagement").submit(function(event) {
  event.preventDefault();
  var accountDeposit = parseInt($("input#accountDeposit").val());
  // var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
  // var result = add(accountDeposit, inputtedcheckingAccount);
  
  var result = centralBank.deposit(accountDeposit);
  
  //$("#output2").html(result);
  $("#output").html(result);
  console.log(centralBank.accounts);
});

// $("form#acctManagement").submit(function(event) {
//   event.preventDefault();
//   var accountWithdraw = parseInt($("input#accountWithdraw").val());
//   var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
//   var result2 = subtract(accountWithdraw, inputtedcheckingAccount);
//   $("#output2").text(result2);
// });
});
