var initialValue = document.querySelector('#initial-value');
var quantityValue = document.querySelector('#quantity-value');
var currentValue = document.querySelector('#current-value');
var showBtn = document.querySelector('#show-btn');
var outputShow = document.querySelector('#output');

showBtn.addEventListener('click', clickButtonHandler);

function getValues(initial, quantity, current){
    if(initial<0 || quantity<0 || current<0){
        outputShow.innerText=`Please don't enter a negative number`;
    } else if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPer = (loss/initial)*100;
        outputShow.innerText=`Sorry you had a loss of INR. ${loss} and the percent ${lossPer}%`;

    } else if(initial < current){
        var profit = (current-  initial)*quantity;
        var profitPer = (profit/initial)*100;
        outputShow.innerText=`Yippee you had a profit of INR. ${profit} and the percent ${profitPer}%`;
    } else {
        outputShow.innerText=`Hey Initial Price is equal to Current Price. So there is neither profit nor loss.`;
    } 

    

    
}

function clickButtonHandler(){
    var i= Number(initialValue.value);
    var q= Number(quantityValue.value);
    var c= Number(currentValue.value);
    
    getValues(i, q, c);
}




