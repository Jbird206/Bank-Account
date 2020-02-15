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
var Account= function (nameAccount, checkingAccount) {
  this.nameAccount = nameAccount,
  this.checkingAccount = checkingAccount;
  return this.nameAccount + this.checkingAccount;
};

var add  = function(inputtedcheckingAccount, accountDeposit) {
  return inputtedcheckingAccount + accountDeposit;
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
  var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
  var newAccount = new Account(inputtednameAccount, inputtedcheckingAccount);
  centralBank.addAccount(newAccount);
  console.log(centralBank.accounts);
  $("#outputName").html(inputtednameAccount);
  $("#output").html( newAccount.checkingAccount);
  
});




$("form#acctManagement").submit(function(event) {
  event.preventDefault();
var accountDeposit = parseInt($("input#accountDeposit").val());
var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
var result = add(accountDeposit, inputtedcheckingAccount);
//$("#output2").html(result);
$("#output").html(result);
});

// $("form#acctManagement").submit(function(event) {
//   event.preventDefault();
//   var accountWithdraw = parseInt($("input#accountWithdraw").val());
//   var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());
//   var result2 = subtract(accountWithdraw, inputtedcheckingAccount);
//   $("#output2").text(result2);
// });
});
