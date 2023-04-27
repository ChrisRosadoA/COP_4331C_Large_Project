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

        var obj = {register:registerName.value,password:registerPassword.value};
        var js = JSON.stringify(obj);

        try
        {    
            const response = await fetch('http://localhost:5000/api/register',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
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


    return(
      <div id="registerDiv">
        <form onSubmit={doRegister}>
        <span id="inner-title">Register</span><br />
        <input type="text" id="registerName" placeholder="Username" ref={(c) => registerName = c} /><br />
        <input type="password" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />

        <input type="submit" id="registerButton" class="buttons" value = "Do It"
          onClick={doRegister} />
        </form>
        <span id="loginResult">{message}</span>
     </div>
    );
};

export default Register;
