// User deposit & withdraw section
document.getElementById("deposit-btn").addEventListener("click", function () {
    // get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    depositInput.value = "";
    // deposit update section
    const depositField = document.getElementById("deposit-add");
    const previousDepositAmount = depositField.innerText;
    const newDdepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositField.innerText = newDdepositTotal;
    // balance update section
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceTextValue = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceTextValue);
    const totalBalanceAmount = totalBalanceValue + parseFloat(newDepositAmount);
    totalBalance.innerText = totalBalanceAmount;

})