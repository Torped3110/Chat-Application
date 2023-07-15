import {TextInput,PasswordInput,Card,Button} from '@mantine/core';
import { Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import User from './user';

function Login()
{
    const navigate = useNavigate()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function login_check()
    {
        axios.post(`http://localhost:9000/login`,
        {username:username,
        password:password}
        ).then((res)=>
        { 
            navigate('../user',{state:{name:res.data.firstname,email:res.data.email}} )
        })
        .catch((e)=>{console.log("this is an error",e)
            alert("Invalid Credentials")
            window.location.reload(false)
    })
    }


    return(
        <div>
           <div>
            <center>
                <Text style={{fontSize:50}}>Login Page</Text>
            </center>
           </div>
           <div style={{display:'flex',justifyContent:'center' ,alignItems:'center',height:"500px"}}>
            <Card style={{width:400,height:350}} withBorder>
            <TextInput onChange={(e)=>{setUsername(e.target.value)}} label='Username' placeholder='Username' withAsterisk/>
            <br/>
            <PasswordInput onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder='Password' withAsterisk/>
            <br/><br/>
            <center>
            <Button style={{width:100,height:30}} onClick={login_check}>Log In</Button>
            <br/>
            <Link to='/registration'><Text style={{fontSize:12}}>Not Registered?</Text></Link>
            </center>
            </Card>
            </div>
        </div>
    )
}

export default Login;