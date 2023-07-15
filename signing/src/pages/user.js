import { Button, Card } from "@mantine/core"
import download from '../download.png'
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function User(){
    const {state} = useLocation()
    const navigate = useNavigate()
    var name=state.name
    var email = state.email
    return(
        <div>
        <div><center><h1>Welcome {name} !!!</h1></center>
        </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:"500px"}}>
        <Card>
            <img src={download} alt='panda' style={{width:500,height:500}} />
            <Button style={{width:90}} onClick={()=>{navigate('../page',{state:{name:name,email:email}})}}>Chat</Button>
        </Card>
        </div>
        </div>
    )
}
export default User;