// handle withdraw event handler
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-input");
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldValue);
    withdrawField.value = withdrawFieldAmount;

    const withdrawBalance = document.getElementById("withdraw-amount");
    const withdrawBalanceTextValue = withdrawBalance.innerText;
    const withdrawBalanceValue = parseFloat(withdrawBalanceTextValue);
    const withdrawBalanceTotalAmount = withdrawBalanceValue + withdrawFieldAmount;
    withdrawBalance.innerText = withdrawBalanceTotalAmount;
    // balance update section
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceTextValue = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceTextValue);
    const totalBalanceAmount = totalBalanceValue - withdrawFieldAmount;
    totalBalance.innerText = totalBalanceAmount;

    // clear withdraw input
    withdrawField.value = "";

})