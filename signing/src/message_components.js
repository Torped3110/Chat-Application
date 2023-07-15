import React from "react";
import { Card,Text,Select,ScrollArea, Grid} from "@mantine/core";

function Sender(content,time)
{
    return(
   <Grid.Col>
    <Card style={{maxWidth:300,float:"right",backgroundColor:'greenyellow'}} withBorder>
        <Text style={{float:"right",marginRight:0}}>{content}</Text>
        <Text style={{right:0,fontSize:10,bottom:0,color:'red',position:'absolute',fontWeight:'bold'}}>{time}</Text>
    </Card>
    </Grid.Col>
    )
}

function Reciever(content,time){
    return(
    <Grid.Col>
    <Card style={{maxWidth:300,backgroundColor:'greenyellow',float:"left"}} withBorder>
        <Text style={{float:"right",marginRight:0}}>{content}</Text>
        <Text style={{right:0,fontSize:10,bottom:0,color:'red',position:'absolute',fontWeight:'bold'}}>{time}</Text>
    </Card>
    </Grid.Col>
    )
}



export default {Sender,Reciever};