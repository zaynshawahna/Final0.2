import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from '../component1/ResponsiveDrawer';
import Header from './Header';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Pposts from './Pposts';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function PageFour() {
  const navigate=useNavigate("")
  useEffect(()=>{
 
 
    navigate("/four")
 
  },[])
  const token=localStorage.getItem("token");
  const ID=localStorage.getItem("id");
 
  const [memories, setMemories] = useState([]);
 
  useEffect(() => {
   axios.get(`http://16.170.173.197/posts/${ID}`, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   }).then((response) => {
    setMemories(response.data.posts)
    
   }).catch((error) => {
     console.log("", error)
   })
 }, [])


//  const filteredMemories = memories.filter((memory) => memory.user.id === ID);



  return (
    <div style={{backgroundColor:"black"}}>
    
    
   
    <Grid container spacing={2}>
    <Grid item xs={2.5} >
    <ResponsiveDrawer s="solid 2px #1d1d1d"  /> 
    </Grid>

    <Grid item xs={7}  >
     
    <Header/>
    <div style={{marginLeft:"38%"}}>
    <Stack spacing={2} direction="row">
      <Button variant="text" style={{backgroundColor:"black",color:"black"}}>Text</Button>
      <Button variant="contained" style={{backgroundColor:"black",borderTop:"solid 2px white ",borderRadius:"0%",fontWeight:"900"}}><AppsTwoToneIcon/>POSTS</Button>
      
   
      <Button variant="contained" style={{backgroundColor:"black",color:"#8d8d8d"}}><TurnedInNotOutlinedIcon/>REELS</Button>
      <Button variant="contained" style={{backgroundColor:"black",color:"#8d8d8d"}}><AssignmentIndOutlinedIcon/>TAGGED</Button>
    </Stack>
    <div style={{marginLeft:"-30%",width:"700px"}}>



              {memories.map((memory,index) => (

                <Pposts key={memory.id} Image={memory.image} id={memory.id} />
              ))}
    </div>



    


    </div>



    </Grid>

  </Grid>
      
      </div>
  )
}

export default PageFour