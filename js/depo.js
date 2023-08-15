document.getElementById('dpoBtn').addEventListener('click', function(){
    
    const depoInput = document.getElementById('depoInput');
    const newDepositAmontString = depoInput.value ;
    const newDepositAmont = parseFloat(newDepositAmontString);

    depoInput.value = '';
    if(isNaN(newDepositAmont)){
        alert ('please taka daaaaa...')
        return;
    };
    
    
    const displayDepoSum = document.getElementById('displayDepoSum');
    const displayDepoSumAmontString = displayDepoSum.innerText;
    const displayDepoSumAmont = parseFloat(displayDepoSumAmontString)

    const currentDepositSum = newDepositAmont + displayDepoSumAmont;

    displayDepoSum.innerText = currentDepositSum;


    const displayTotaSum = document.getElementById('displayTotaSum');
    const displayTotaSumString = displayTotaSum.innerText;
    const convertDisplayTotaSumString = parseFloat(displayTotaSumString)

    const blanceTotal = convertDisplayTotaSumString +  newDepositAmont;
    
    displayTotaSum.innerText = blanceTotal;
})

// widthro----------------------------------------
document.getElementById('widtBtn').addEventListener('click', function(){
    
    const withdrawInput = document.getElementById('WithdrawInput');
    const newWithdrawInputString = withdrawInput.value ;
    const newWithdrawAmont = parseFloat(newWithdrawInputString);
    withdrawInput.value = '';
    if(isNaN(newWithdrawAmont)){
        alert ('please taka daaaaa...')
        return;
    };

    const displayWirSum = document.getElementById('displayWirSum');
    const displayWirSumString = displayWirSum.innerText;
    const displayWirSumAmont = parseFloat(displayWirSumString)

    
    if(newWithdrawAmont > displayWirSumAmont){
        alert ('atho taka nai ');
        return;
    };
    const currentWithdrSum = newWithdrawAmont + displayWirSumAmont;

    displayWirSum.innerText = currentWithdrSum ;
    

    const displayTotaSum = document.getElementById('displayTotaSum');
    const displayTotaSumString = displayTotaSum.innerText;
    const convertDisplayTotaSumString = parseFloat(displayTotaSumString)

    const blanceTotal = convertDisplayTotaSumString - newWithdrawAmont;
    
    displayTotaSum.innerText = blanceTotal;
})