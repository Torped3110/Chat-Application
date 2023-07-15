import {Button, Card, Grid, Select ,ScrollArea, Input} from "@mantine/core";
import React from "react";
import Message from '../message_components'

function Trail()
{

    var obj=[]
    for(let i=0;i<50;i++)
    {
        obj.push(<Button style={{width:'100%',marginTop:10,marginBottom:10}}>Hello</Button>)
    }

    const data =['1','2','3','5']
    return(
     <div style={{padding:15}}>
        <Grid>
        <Grid.Col span={3}>
            {Message.Sidebar(obj,data)}
        </Grid.Col>
        <Grid.Col span={9}>
            {Message.Sender('ABC','1:22')}
        </Grid.Col>
        </Grid>
    </div>
)}

export default Trail;