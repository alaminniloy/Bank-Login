/* 
1.add event handler with withdraw button
2. get the withdraw amount from the input field
3. also make sure to convert the input into a by using parseFloat
4. get previous withdraw total 
5 . calculate total withdraw amount
6. set total withdrawl amount
*/
// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawAmount.value;
    const newWithdrawAmountFloat = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmountFloat);

    // step -3
    const withdrawElement =document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);
    // console.log(previousWithdrawTotal); 

    // step 5
    const currentBalanceAfterWithdrawal= previousWithdrawTotal + newWithdrawAmountFloat;
    withdrawElement.innerText = currentBalanceAfterWithdrawal;


    // step-6 
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalFloat = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotalFloat);

    // calculate total sum
    const newBalanceTotal = previousBalanceTotalFloat-currentBalanceAfterWithdrawal ;
    balanceTotalElement.innerText = newBalanceTotal;
    // step -7 clear the input field
    withdrawAmount.value= '';


})