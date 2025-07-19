// step - 1

document.getElementById('btn-cash-out')
        .addEventListener('click', function(){

       
// step - 2
            const cashOut= document.getElementById('cash-out-amount').value;
            // step - 5
           const cashOutNumber = parseFloat( cashOut);
         
            
            const yourPin = document.getElementById('input-pin').value;
        
            // step - 3

            if(yourPin === '1234'){
                // cash out money
                // step - 4
                const balance = document.getElementById('balance').innerText;
                
                // step - 5
                const availableBalance = parseFloat( balance);
                           
                // step  - 6
                const newBalance = availableBalance - cashOutNumber;
                console.log(newBalance);

                // step - 7
                document.getElementById('balance').innerText = newBalance;
                 
            }
            else{
                alert("Failed To Cash Out Money! Please Try Again.");
            }
        })