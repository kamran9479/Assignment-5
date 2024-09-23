function getNumberAmountById(id){

    const input = parseFloat(document.getElementById(id).value);
    return input;
};
function getNumberAmountByIdTwo(id){

    const input = document.getElementById(id).innerText;
    const inputBalance = parseFloat(input);
     return inputBalance;
};


// function forAlert(){
//     if(isNaN(noakhaliInput)){
//         alert('Input Shold Be A Number')
//         return;
//     }

//     if(noakhaliInput > myBalance){
//         alert('Not Enough Balance')
//         return;
//     }
// };