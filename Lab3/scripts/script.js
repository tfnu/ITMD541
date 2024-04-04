document.addEventListener('DOMContentLoaded', function() {
    const billTotalInput = document.getElementById('billTotal');
    const tipRangeInput = document.getElementById('tipRange');
    const tipPercentageValue = document.getElementById('tipPercentageValue');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillInput = document.getElementById('totalBillWithTip');
    
    function updateTipCalculator() {
        
        tipPercentageValue.value = `${tipRangeInput.value}%`;

       
        if (billTotalInput.value === '') {
            tipAmountInput.value = '';
            totalBillInput.value = '';
            if (tipRangeInput.value !== '15') { 
                alert("Please enter the bill total before adjusting the tip percentage.");
            }
            return;
        }

        const billTotal = parseFloat(billTotalInput.value);
        
        
        if (!isNaN(billTotal)) {
            const tipPercentage = parseFloat(tipRangeInput.value);
            const tipAmount = (billTotal * tipPercentage) / 100;
            const totalBillWithTip = billTotal + tipAmount;

            tipAmountInput.value = tipAmount.toFixed(2);
            totalBillInput.value = totalBillWithTip.toFixed(2);
        } else {
            tipAmountInput.value = '';
            totalBillInput.value = '';
            alert("Please enter a valid number for the bill total.");
            billTotalInput.classList.add('input-error');
        }
    }

    billTotalInput.addEventListener('input', updateTipCalculator);

    tipRangeInput.addEventListener('input', function() {
        if (billTotalInput.value === '') {
            billTotalInput.classList.add('input-error');
            alert("Please enter the bill total before adjusting the tip percentage.");
        } else {
            billTotalInput.classList.remove('input-error');
            updateTipCalculator();
        }
    });
});
