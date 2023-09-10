function isCredentialCorrect(email, password){

    if(email == 'kodego@test.com' && password == '123456789'){
        return true;
    }else{
        return false;
    }
}


module.exports = isCredentialCorrect;