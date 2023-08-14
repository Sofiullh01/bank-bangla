// step one
document.getElementById('SubmetBtn').addEventListener('click', function(){
    console.log('click sublet');
    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;
    
    const passAddress = document.getElementById('passAddress');
    const password = passAddress.value;
    

    if(email === "sorif@gmail.com" && password === "sorifislam"){
        console.log('valid user')
    }else{
        console.log(" unvalid user" )
    }

});