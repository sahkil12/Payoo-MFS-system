document.getElementById('btn-login').addEventListener('click', function(event){

    // step-2
    event.preventDefault();
  

    // step-3
     const phoneNumber = document.getElementById('input-number').value;
    const pinNumber = document.getElementById('input-pin').value;
    console.log(phoneNumber);
    console.log(pinNumber);

    if(phoneNumber === '55' && pinNumber === '1234'){
        console.log('you are logged');
        window.location.href = '/home.html';
        
    }
    else{
        alert('wrong phone number and pin');
    }

})