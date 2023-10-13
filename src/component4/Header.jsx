import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from "react"

import ToEditUser from '../ToEditUser';






function Header() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const token=localStorage.getItem("token")

  const posts=localStorage.getItem("posts")
  const userName=localStorage.getItem("userName")
  const avatar=localStorage.getItem("avatar")
  const navigate=useNavigate();
     



  
   function toEdit(e){
    e.preventDefault();
   

let person = prompt("... to delete acount write yes   ...to edit user infrmation write edit ", "no");
if(person==="yes"){
 
  axios.delete("http://16.170.173.197/users",{

    body:{
     id: localStorage.getItem("id"),
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response)=>{
      
    localStorage.removeItem('token');
    localStorage.removeItem("id")
    localStorage.removeItem("userName")
    localStorage.removeItem("avatar")
    localStorage.removeItem("bio")
    localStorage.removeItem("posts")
    localStorage.removeItem("followers")
    localStorage.removeItem("following")
     
      navigate("/");
  })
  .catch(error=>{
  console.log(error)
  navigate("/");
    
  })
  navigate("/");



}
if(person==="edit"){
  setModalOpen(true)


  
}
   




   }





  return (
   <>
   
   <div style={{borderBottom:"solid 2px #1d1d1d",width:"52%",paddingBottom:"4%",width:"100%",marginLeft:"20%"}}>
<Stack direction="row" spacing={-3} >
        <img src={avatar} style={{width:"22%",height:"30%",borderRadius:"50%",marginRight:"10%",marginTop:"2%"}} />

        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <div style={{width:"100%",marginTop:"5%",padding:"0%",fontWeight:"900",color:'white',textAlign:"left",backgroundColor:"black"}}>{userName} </div>
        <br></br>
        
        <div style={{width:"100%",paddingTop:"4%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left",backgroundColor:"black"}}>{posts}&nbsp;posts</div>
        <br></br>
        
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left",backgroundColor:"black"}}>{localStorage.getItem("bio")}</div>

        
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <Button variant="contained" onClick={toEdit} style={{width:"100%",borderRadius:"10px",color:"black",backgroundColor:"white" }}>Edit Profile</Button>
        <br></br>
        {/* <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>111 {followers}</div> */}
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>111 followers</div> 
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <Button variant="contained" style={{width:"100%",borderRadius:"10px",color:"black",backgroundColor:"white" }}>View Action</Button>
        <br></br>
        {/* <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>111{following}</div> */}
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>111 following</div>
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%"}}>
        <SettingsIcon style={{marginTop:"4%"}} /> 
        
        </Stack>
        
        </Stack>
        <ToEditUser open={isModalOpen} onClose={() => setModalOpen(false)} />
        
</div>
   </>
  )
}

export default Header