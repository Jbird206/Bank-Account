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
   function Account(nameAccount, checkingAccount) {
    this.nameAccount = nameAccount,
    this.checkingAccount = checkingAccount
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
    $("#output").text(newAccount.checkingAccount);
    //displayAccountDetails(addressBook);
  });

});

