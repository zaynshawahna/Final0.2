import * as React from 'react';
import Grid from '@mui/material/Grid';
import inst from "./inst.png";
import Img from "../component1/pic/Img.png";
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



function PageSix() {

   const navigate=useNavigate("/")
  const [newUser, setnewUser] = useState({
    userName: "",
    email: "",
    password: ""
  });


  const [token,setToken]=useState("")

  function handelSubmit(e) {
    e.preventDefault(); 

    console.log(newUser)
    axios.post("http://16.170.173.197/users/signup",newUser)
    .then((response)=>{
    
      localStorage.setItem("userName",newUser.userName)
      localStorage.setItem("token",response.data.token)
      const user={
        email: newUser.email,
        password: newUser.password
      };
      axios.post("http://16.170.173.197/users/login",user)
      .then((response2)=>{
  
        
          localStorage.setItem("token",response2.data.token)
          localStorage.setItem("id",response2.data.user.id)
          localStorage.setItem("userName",response2.data.user.userName)
          localStorage.setItem("avatar",response2.data.user.avatar)
          localStorage.setItem("bio",response2.data.user.bio)
          localStorage.setItem("followers",response2.data.user.followers)
          localStorage.setItem("following",response2.data.user.following)
          localStorage.setItem("posts",response2.data.user.posts.length)
         
          navigate("/one");
      })
      .catch(error=>{
      console.log(error)
      
        
      })
       
        navigate("/one");
    })
    .catch(error=>{
    console.log(error)
    
      
    })

  }


  return (
    
    <div style={{backgroundColor:"black"}}>
    <Grid container spacing={2}>
    <Grid item xs={7} >
      <img src={inst} style={{width:"40%",height:"70%",margin:"13%",paddingLeft:"30%"}}/>
    </Grid>
    <Grid item xs={5}  >
  
    <div style={{backgroundColor:"#1d1d1d",marginRight:"40%",marginTop:"10%",borderRadius:"10px"}} >

  
      <img src={Img} style={{width:"35%",height:"35%",marginTop:"5%",marginBottom:"5%"}}/>
      <br>
      </br>
       <span style={{color:"#8d8d8d",fontSize:"80%",textAlign:"center",width:"20%"}}>Sign Up to see photos and videos<br></br> from your friends</span>
       <br></br>
       <br>
       </br>
       <Button variant="contained" disableElevation style={{width: "90%", height: "30px",borderRadius:"5px",textTransform: "none",fontWeight:"600",fontFamily:"Poppins" }} >
        <FaFacebook style={{marginRight:"10px"}}/> 
           Login with Facebook
        </Button>
        <br>
        </br>
        <br>
        </br>
        
        <Stack direction="row">
 
  <hr style={{
  
  height: "1px",
  backgroundColor: '#3d3d3d',
  border:"none",
  width:"36%"
  
 

}}></hr>
  <span style={{
  
 color:"#8d8d8d",
 fontWeight:"100"
}}>
Or     
 </span>
  <hr style={{
  
  height: "1px",
  backgroundColor: '#3d3d3d',
  border:"none",
  width:"36%"
  
 

}}></hr>
  </Stack>

  <br>
         </br>
<form onSubmit={handelSubmit}>
<input value={newUser.email} onChange={(e)=>{

    setnewUser({...newUser, email: e.target.value})

}} style={{ width: "90%", height: "30px", borderRadius: "5px",color:"#8d8d8d",fontWeight:"600",fontFamily:"Poppins" }}placeholder='Email' type="email"></input>
      <br></br>
      <br>
      </br>
      <input value={newUser.userName} onChange={(e)=>{

setnewUser({...newUser, userName: e.target.value})

}} style={{ width: "90%", height: "30px", borderRadius: "5px",color:"#8d8d8d",fontWeight:"600",fontFamily:"Poppins" }}placeholder='Username ' type="text"></input>
      <br></br>
      <br>
      </br>
      <input value={newUser.password} onChange={(e)=>{

setnewUser({...newUser, password: e.target.value})

}} style={{ width: "90%", height: "30px", borderRadius: "5px",color:"#8d8d8d",fontWeight:"600",fontFamily:"Poppins" }}placeholder='Password' type="password"></input>
      <br></br>
      <br></br>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Button type="submit" variant="contained" disableElevation style={{width: "90%", height: "30px",borderRadius:"5px",textTransform: "none",fontWeight:"600",fontFamily:"Poppins" }} >
         Sign Up
        </Button>

     

        <br></br>
        <br></br>
      </div>
</form>

      <div>

        <div style={{color:"#8d8d8d" ,fontSize:"80%" ,margin:"0 30px"}}>
          by signing up, You agree to our Terms,Data Policy and Cookies Policy 
          
        </div>
  
  
  
        </div>
     
  
 
  
  <br></br>
  
  </div>
  <div style={{backgroundColor:"#1d1d1d",marginRight:"40%",marginTop:"5%",borderRadius:"10px",height:"10%"}} >
    <br></br>
   <span style={{color:"#8d8d8d",margin:"10%"}}> have an acount? <Link to="/" style={{ textDecoration: "none", color: "#3483eb",fontWeight:"900" }}>LogIn</Link>   </span>
  
  <br></br>
  
  </div>
  
  
  
  
      
  
    </Grid>
  </Grid>
      
      </div>
  )
}

export default PageSix