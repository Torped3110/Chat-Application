import { TextInput,PasswordInput,Card,Text, Button, Grid} from "@mantine/core";
import { Link,useNavigate } from "react-router-dom";
import { DateInput } from "@mantine/dates";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { validEmail, validName, validPassword } from "./regex";

function Registration()
{
  var a,b,c,d,e=1
  var [firstname,setFirst] = useState('');
  var [lastname,setLast] = useState('');
  var [email,setEmail] =  useState('');
  var [password,setPassword] =  useState('');
  var [confirm,setConfirm]= useState('');
  var [dob,setDob]=useState('')
  var [error1,setError1] =  useState('');
  var [error2,setError2] =  useState('');
  var [error3,setError3] =  useState('');
  var [error4,setError4] =  useState('');
  var [error5,setError5] =  useState('');
  const navigate=useNavigate();
  function send(){
    axios
    .post(
      `http://localhost:9000/check`,
      {
        firstname : firstname,
        lastname: lastname,
        dob: new Date(),
        email: email,
        password:password,
        friends:[]
      }, 
    )
    
    .then((res) => {
      console.log("AdminData", res.data);
      navigate('../user',{state:{name:firstname,email:email}})

    })
    .catch((error) => {
      console.log("ADMIN GETUSER", error);
      alert('Invalid Details')
      window.location.reload(false)
    });
  }
  

    useEffect(()=>{

      if(validName.test(firstname)||firstname==='')
      {setError1('')
      a=0
    }
      else
      {setError1('Invalid First Name')
      a=1;
    }

      if(validName.test(lastname)||lastname==='')
      {setError2('')
      b=0;
    }
      else
      {setError2('Invalid Last Name')
      b=1
    }

      if(validEmail.test(email)||email==='')
      {setError3('')
      c=0
    }
      else
      {setError3('Invalid Email')
    c=1
    }

      if(validPassword.test(password)||password==='')
      {setError4('')
    d=0
    }
      else
      {setError4('Invalid Password')
    d=1
    }

      if (password!==confirm && confirm!=='')
      {setError5('Password does not match')
    e=1
    }
      else
      {setError5('')
    e=0
    }
        })

    return(
        <div>
        <center><div><Text style={{fontSize:50}}>Registration Page</Text></div></center>
        <div style={{display:"flex",alignItems:'center',justifyContent:'center',height:'500px'}}>
          
            <Card style={{width:500}} withBorder>
                <Grid>
                <Grid.Col span={6}><TextInput onChange={(e)=>{setFirst(e.target.value)}} placeholder="First Name" label="First Name" error={error1}/></Grid.Col>
                <Grid.Col span={6}><TextInput onChange={(e)=>{setLast(e.target.value)}} placeholder="Last Name" label="Last Name" error={error2}/></Grid.Col>
                </Grid>
                <DateInput onChange={(e)=>{setDob(e)}}label='Date of Birth' placeholder="Date of Birth"/>
                <TextInput onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email address" description='Username must be unique' label="Email" error={error3}/>
                <PasswordInput placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  description='Must contain alphabets , numericals and special characters' label="Password" error={error4}/>
                <PasswordInput placeholder="Password" onChange={(e)=>{setConfirm(e.target.value)}} label="Confirm Password" error={error5}/>
                <br/>
                <center><Button onClick={send}><Text>Sign Up!</Text></Button>
                <br/>
                <Link to='/'><Text style={{fontSize:12}}>Already have an account !</Text></Link>
                </center>
            </Card>        
        </div>
        </div>
    )
}

export default Registration;