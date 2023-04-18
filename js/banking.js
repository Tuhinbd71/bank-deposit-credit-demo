// User deposit & withdraw section
document.getElementById("deposit-btn").addEventListener("click", function () {
    // get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    depositInput.value = "";
    // console.log(depositAmount);

    const depositField = document.getElementById("deposit-add");
    const previousDepositAmount = depositField.innerText;
    const newDdepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositField.innerText = newDdepositTotal;

})