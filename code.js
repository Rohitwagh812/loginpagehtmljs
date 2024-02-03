function loginform(){
    let gmail = document.getElementById("gmail").value;
    let password = document.getElementById("password").value;

    if(gmail == "" && password == ""){
        alert(`please enter email and password`);
    }else{
        console.log("Login Successful");
    }
}
