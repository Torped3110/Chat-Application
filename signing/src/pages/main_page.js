import React, { useEffect } from "react"
import { Button, Card, Grid, ScrollArea, TextInput,Text,Select } from "@mantine/core"
import message from "../message_components"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
function Page(){
    const {state} = useLocation()
    const [msg,setMessage]=useState('')
    const [users,setUsers]=useState([])
    const [friends,setFriends]=useState([])
    const [chat,setChat]=useState('')
    const [email,setEmail]=useState('')
    var dict=[]
    var frnds=[]
    var names=[]
    const [messages,setMessages]=useState([])

    useEffect(()=>{
    getAllUsers()
    },[])

    useEffect(()=>
    {
        getMessage()
    })


    function addMessage(e)
    {
        if (e!=='')
        {
            var k = {sender:state.email,reciever:email,content:e,time:new Date()}
                axios.post(
                    'http://localhost:9000/add',k
                ).then(
                    (res)=>{//console.log(res.body)
                    }
                )   
                .catch(
                    (error)=>{console.log(error)}
                )
            
        }
    }

   function getAllUsers()
    {
     axios.post('http://localhost:9000/all',{}).then(
           async (res)=>{
            names = await res.data
            var a=[]
           names.forEach(element => {
            if (element.email===state.email)
            {frnds=element.friends}
            else
            {dict[element.email]=element.name;
            a.push(element.name+' ('+element.email+')')
            }
           });
            setUsers(a)
            if(frnds!==undefined)
            {setFriends(frnds)}
        }
        )
        .catch(
            (err)=>console.log(err)
        )
    }

    function getMessage()
    {   
        if(email!==''){
        axios.post(
            'http://localhost:9000/get',{sender:state.email,reciever:email}
        ).then((res)=>
        {
            var m=[]
            res.data.forEach(element => {
                var d=new Date(element.time)
                var t=''
                var min = d.getMinutes()
                if (min<10)
                    {
                        min='0'+String(min)
                    }
                t=d.getHours()+':'+min

                if(element.sender===state.email){m.push(message.Sender(element.content,t))}
                else {m.push(message.Reciever(element.content,t)) }
                
            })
            setMessages(m)
            ;
        }
        )
        .catch((err)=>{console.log(err)})
    }
    }

    function Sidebar(obj,data)
    {   var d= obj.map((e)=><Card style={{width:'100%',marginBottom:10,marginTop:10}} withBorder>{e}</Card>)
        return(
            <div style={{padding:15}}>
                   <Card style={{height:'650px'}} withBorder>
                     <Select onSelectCapture={(e)=>{
                    var a=e.target.value
                    if(a!==''){
                    var start=a.indexOf('(')
                    var end=a.indexOf(')')
                    var name=a.slice(0,start-1)
                    var email=a.slice(start+1,end)
                    setChat(name)
                    setEmail(email)
                    getMessage()
                    console.log(name,email)
                    }
                    console.log(e.target.value)
                    }} placeholder="Usernames" label='Search' searchable data={data} style={{marginTop:10,marginBottom:20}} />
                     <ScrollArea style={{flexDirection:'column-reverse'}} h={'85%'}>
                      {d}
                     </ScrollArea>
                   </Card>
            </div>
       )
    }


    return(
    <div style={{backgroundColor:'grey'}} className="Box">
        
        <Grid> 
            <Grid.Col span={3}><Card style={{width:'98%',backgroundColor:'black'}}withBorder><Text color="white" weight={"bold"}>Welcome {state.name}</Text></Card></Grid.Col>
            <Grid.Col span={9}><Card style={{width:'98%'}} withBorder>{chat}</Card> </Grid.Col>
        </Grid>
        <Grid >
            <Grid.Col span={3}>{Sidebar(friends,users)}</Grid.Col>
            <Grid.Col span={9}>
                <Grid>
                    <Grid.Col>
                        <Card style={{width:'98%',height:'550px',backgroundColor:'pink'}} withBorder>
                            <ScrollArea h={'100%'} >
                            <Grid>
                                {messages}                  
                            </Grid>
                            </ScrollArea>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={10}>
                        <Card style={{backgroundColor:"grey"}}><TextInput bottom={1} id="Message_Input" 
                        onChange={(e)=>setMessage(e.target.value)} /></Card>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Card style={{backgroundColor:'grey'}}>
                            <Button onClick={()=>{
                                if(message!=='')
                                {addMessage(msg)
                                document.getElementById('Message_Input').value=''
                                setMessage('')
                                }}
                                }>send</Button>
                        </Card>
                    </Grid.Col>

                </Grid>
            
            </Grid.Col>
        </Grid>
    </div>)
}

export default Page