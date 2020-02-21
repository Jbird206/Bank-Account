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
var Account= function (nameAccount, nameAccount2, checkingAccount, password) {
  this.nameAccount = nameAccount,
  this.lastName = nameAccount2,
  this.password = password,
  this.checkingAccount = checkingAccount;
  return this.nameAccount + this.lastName + this.checkingAccount + this.password;
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

function checkForAccount(getPassword){
for(var i = 0; i <= centralBank.accounts.length; i++) {
  if(centralBank.accounts[i].password === getPassword) {
    //do something here
  } else {
    alert("You need to make an account or you forgot your password")
  };
}



// User Interface Logic ---------
var centralBank = new centralBank();

///function displayAccountDetails(centralBankToDisplay){}


$(document).ready(function() {
  //attachAccountListeners();

  //create account
$("form#new-account").submit(function(event) {
  event.preventDefault();
  var inputtednameAccount = $("input#new-name-account").val();
  var inputtedLastname = $("input#last-name-account").val();
  var inputtedPassword = $("input#password").val();
  var inputtedcheckingAccount = parseInt($("input#new-checking-account").val());

  var newAccount = new Account(inputtednameAccount, inputtedLastname, inputtedcheckingAccount, inputtedPassword);

  centralBank.addAccount(newAccount);
  $("#outputName").html(inputtednameAccount+ " " +inputtedLastname);
  $("#output").html( newAccount.checkingAccount);
  
});

$("form.register-form").submit(function(event) {
  event.preventDefault();

  var getPassword = $("input#password").val();
  var getUsername = $("input#username").val();
  console.log(getPassword + getUsername);

  checkForAccount(getPassword, getUsername);

});



//add a desposit
$("form#acctManagement").submit(function(event) {
  event.preventDefault();
  var accountDeposit = parseInt($("input#accountDeposit").val());

  
  var result = centralBank.deposit(accountDeposit);
  
  //$("#output2").html(result);
  $("#output").html(result);
  console.log(centralBank.accounts);
});


});
