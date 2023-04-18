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

    withdrawField.value = "";

})