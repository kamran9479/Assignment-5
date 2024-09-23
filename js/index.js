
    // noakhali addevenfunction

document.getElementById('btn-noakhali')
.addEventListener('click', function(){


    const noakhaliInput = getNumberAmountById('input-noakhali');
    const myBalance = getNumberAmountByIdTwo('mybalance')
    const noakhaliBalance = getNumberAmountByIdTwo('noakhalibalance')
    

    if(isNaN(noakhaliInput)){
        alert('Input Shold Be A Number')
        return;
    }

    if(noakhaliInput > myBalance){
        alert('Not Enough Balance')
        return;
    }
    
    const updateBalance = myBalance - noakhaliInput ;
    document.getElementById('mybalance').innerText = updateBalance ;


    const noakhaliBalanceUpdate = noakhaliBalance + noakhaliInput;
    document.getElementById('noakhalibalance').innerText = noakhaliBalanceUpdate;

});


    // feni addevenfunction

document.getElementById('btn-feni')
.addEventListener('click', function(){


    const feniInput = getNumberAmountById('input-feni');
    const myBalance = getNumberAmountByIdTwo('mybalance');
    const feniBalance = getNumberAmountByIdTwo('fenibalance');
    

    if(isNaN(feniInput)){
        alert('Input Shold Be A Number')
        return;
    }

    if(feniInput > myBalance){
        alert('Not Enough Balance')
        return;
    }
    
    const updateBalance = myBalance - feniInput ;
    document.getElementById('mybalance').innerText = updateBalance ;


    const feniBalanceUpdate = feniBalance + feniInput;
    document.getElementById('fenibalance').innerText = feniBalanceUpdate;

});

document.getElementById('btn-quota')
.addEventListener('click', function(){


    const quotaInput = getNumberAmountById('input-quota');
    const myBalance = getNumberAmountByIdTwo('mybalance');
    const quotaBalance = getNumberAmountByIdTwo('quotabalance');
    

    if(isNaN(quotaInput)){
        alert('Input Shold Be A Number')
        return;
    }

    if(quotaInput > myBalance){
        alert('Not Enough Balance')
        return;
    }
    
    const updateBalance = myBalance - quotaInput ;
    document.getElementById('mybalance').innerText = updateBalance ;


    const quotaBalanceUpdate = quotaBalance + quotaInput;
    document.getElementById('quotabalance').innerText = quotaBalanceUpdate;

});
