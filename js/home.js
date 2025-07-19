// step - 1 add an event handler in add money button 
document.getElementById('btn-Add')
    .addEventListener('click', function(event){

        // step-2
        event.preventDefault();
    
        const addMoney = document.getElementById('input-amount').value ;
        console.log(addMoney);

        const getPin = document.getElementById('input-pass').value ; 
        console.log(getPin);  

        // step-3
            if(getPin === '1234' ){
                console.log('Money added to your balance.');
            }
            else{
                alert('Failed To Add Money! Please Try Again');
            }

            // step-4
            const balanced = document.getElementById('balance').innerText ;
            // balanced.innerText;
            console.log(balanced);

            // step-5
            const addMoneyNumber = parseFloat(addMoney);
            console.log( addMoneyNumber);
            const balanceNumber = parseFloat(balanced);
            console.log( balanceNumber);

            const newBalance = addMoneyNumber + balanceNumber;


            // step -6
            document.getElementById('balance').innerText = newBalance;
})