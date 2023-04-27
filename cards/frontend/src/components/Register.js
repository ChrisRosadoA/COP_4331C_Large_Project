import React, { useState } from 'react';

function Register()
{
    var registerEmail;

    var registerName;

    var registerPassword;
    var registerPasswordRepeat;

    const [message,setMessage] = useState('');


    const doRegister = async event => 
    {
        event.preventDefault();

        if (registerPassword.value !== registerPasswordRepeat.value) {
            setMessage("The passwords do not match.");
            return;
        }

        if (!isValidEmail(registerEmail.value)) {
            setMessage("The email is not valid");
            return;
        }
        setMessage('');

        var obj = {register:registerName.value,password:registerPassword.value,email:registerEmail.value};
        var js = JSON.stringify(obj);
        console.log(js);
        try
        {    
            const response = await fetch('http://localhost:3000/api/register',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());
            console.log(response);
            console.log(res);
            if( res.id <= 0 )
            {
                setMessage('could not register user');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return(
      <div id="registerDiv">
        <form onSubmit={doRegister}>
        <span id="inner-title">Register</span><br />
        <input type="text" id="registerName" placeholder="Username" ref={(c) => registerName = c} required /><br />
        <input type="password" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} required /><br />
        <input type="password" id="registerPasswordRepeat" placeholder="Repeat Password" ref={(c) => registerPasswordRepeat = c} required /><br />
        <input type="email" id="registerEmail" placeholder="Email" ref={(c) => registerEmail = c} required/><br />
        <input type="submit" id="registerButton" class="buttons" value = "Register Account"
          onClick={doRegister} />
        </form>
        <span id="loginResult">{message}</span>
     </div>
    );
};

export default Register;
