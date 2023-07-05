let username = document.getElementById('username')
let email = document.getElementById('email')
let pass = document.getElementById('pass');
let Lusername = document.getElementById('Lusername')
let Lpass = document.getElementById('Lpass');
let registered = false;
let userInfo = {
    username: '',
    email: '',
    pass: ''
}
function store() {
    if (!username.value || !pass.value || !email.value) {
        alert('Please Ensure details before registering');
    } else if (username.value == localStorage.getItem('user -' + username.value, username.value)) {
        alert('username already exist')
    } else if (email.value == localStorage.getItem('email -' + email.value, email.value)) {
        alert('Email already exist')
    } else {
        userInfo = {
            username: username.value,
            email: email.value,
            pass: pass.value
            }
        localStorage.setItem('userInfo of : ' + username.value, JSON.stringify(userInfo))
        registered = true;

        if (registered == true) {
            alert('You are registered successfully Now you can login with you registered username and password')
            registered == false
        }
    }
}
function login(){
    event.preventDefault();
    userInfo = JSON.parse(localStorage.getItem('userInfo of : ' + Lusername.value))
    if(!Lusername.value || !Lpass.value){
        alert('Please Enter your username and password');
    }
    else if(Lusername.value == userInfo.username){
            if(Lpass.value == userInfo.pass){
                window.location.href = "mainUi.html";
                sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
                alert('Logged In success');
            }
            }else{
                    alert('Invalid credentials')
                 }   
                }

        function logout() {
            sessionStorage.removeItem('userInfo')
            window.location.href = "index.html";
        }


