


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

    if(noakhaliInput <= 0){
        alert('Invalid input')
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

    document.getElementById('input-noakhali').value = ''

    // modal function
    my_modal_1.showModal();

    const li = document.createElement('li');
    li.className = ('p-5 rounded-lg bg-slate-300');
    li.innerText = `BDT : ${noakhaliInput} taka donated for Noakhali (${new Date().toLocaleDateString()} ,  ${new Date().toLocaleTimeString()})`
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(li, historyList.firstChild);
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

    if(feniInput <= 0){
        alert('Invalid input')
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

    document.getElementById('input-feni').value = ''
 
    // modal function
    my_modal_1.showModal();

    const li = document.createElement('li');
    li.className = ('p-5 rounded-lg bg-slate-300');
    li.innerText = `BDT : ${feniInput} taka donated for Feni  (${new Date().toLocaleDateString()} , ${new Date().toLocaleTimeString()})`
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(li, historyList.firstChild);

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

    if(quotaInput <= 0){
        alert('Invalid input')
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

    document.getElementById('input-quota').value = ''

    my_modal_1.showModal();

    const li = document.createElement('li');
    li.className = ('p-5 rounded-lg bg-slate-300');
    li.innerText = `BDT : ${quotaInput} taka donated for Quota injured people (${new Date().toLocaleDateString()} , ${new Date().toLocaleTimeString()})`
    const historyList = document.getElementById('history-list');
    historyList.insertBefore(li, historyList.firstChild);

});



// donation button and history button class add and remove function

const history = document.getElementById('history');
const donation = document.getElementById('donation');

document.getElementById('history')
.addEventListener('click', function(){

    document.getElementById('full-section').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    
    
    history.classList.add('bg-lime-300');
    donation.classList.remove('bg-lime-300');



});
document.getElementById('donation')
.addEventListener('click', function(){

    document.getElementById('full-section').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');

    history.classList.remove('bg-lime-300');
    donation.classList.add('bg-lime-300');
    

});


document.getElementById('blog').addEventListener('click', function(){

    window.location.href = './blog.html';
});

// home button

document.getElementById('blog').addEventListener('click', function(){

    window.location.href = './blog.html';
});

// home button
// document.getElementById('home').addEventListener('click', function(){

//     window.location.href = './index.html';
// });
        //   Anchor tag use hoyeche home.html file e