/*
__________________________________
__________________________________
__________________________________

    🔥Created by: Stefan 🇨🇮
    🔥Credits: Stefan 🇨🇮
    🔥Created on: December‚ 1st
    🔥Updated on: December‚ 4th 2020
    🔥Published on: December‚ 5th 2020.
__________________________________
__________________________________
__________________________________

*/

var sample_email = "user@user.com";
var pass = "password";


function validation(){
    let form = document.getElementsByClassName('form-container')[0];
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let app = document.getElementById('my_app');
    
    if(email===sample_email && password===pass){
        form.style.display = 'none';
        app.style.display = 'block';
    }
    else{
      let error = document.getElementById("error_session");
      error.style.display = "block";
      form.style.display = "none";
    }
}


alert("\Read carefeully alerts boxes \n\n\nThis is not a full App but a joke simultaing a real App with a login session/page!\n\n\n\nPlus I did not choose colors whisely 👽👽");
alert("You should sign in or fail by siging in to view the last part. You may try the both.\n\n\n For login assets‚ click on \"forgot password\" ");
alert("Hope you'll like it!");


