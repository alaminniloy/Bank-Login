//                          First  input Folder
// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
	// console.log("button eorks");
	// Step-2 : get the deposit amount from the deposit input field
	// for input use. value to the value inside the input field
	const depositAmount = document.getElementById("deposit-amount");
	const newDepositAmountString = depositAmount.value;
	const newDepositAmount = parseFloat(newDepositAmountString);
	// console.log(typeof newDepositAmount);
	// console.log(amount);
	// step-3 get the deposit main
	// for non-input (element other then input , textarea) use innnerText to get the text
	const depositMain = document.getElementById("deposit-main");
	const previousDepositString = depositMain.innerText;
	const previousDeposit = parseFloat(previousDepositString);
	// console.log(typeof previousDeposit);

	//step -4 calculate total deposits and update it on screen

	const currentDepositAmount = previousDeposit + newDepositAmount;
	// set the deposit total
	depositMain.innerText = currentDepositAmount;

	// Step -5 get balance current total
	const balanceTotal = document.getElementById("total-balance");
	const previousBalanceTotalString = balanceTotal.innerText;
	const previousBalanceTotalFloat = parseFloat(previousBalanceTotalString);
	// console.log(typeof previousBalanceTotalFloat);

	// step-6  calculate current total balance
	const currentBalanceTotal = previousBalanceTotalFloat + newDepositAmount;
    
	// set the balance total

	balanceTotal.innerText = currentBalanceTotal;

	//   step- 7 clear the deposit value
	depositAmount.value = "";
});
