// step one
document.getElementById('SubmetBtn').addEventListener('click', function(){
    console.log('click sublet');
    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;
    
    const passAddress = document.getElementById('passAddress');
    const password = passAddress.value;
    

    if(email === "sorif@gmail.com" && password === "sorif"){
        location.href = 'bank.html';
    }else{
        alert (" password janos na tore jetedebo na" )
    }

});