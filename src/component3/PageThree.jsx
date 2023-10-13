import React from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from './ResponsiveDrawer';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Message from './Message';
import Mess from './Mess.png';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';
import man from "../component1/pic/man.png";
import boy from "../component1/pic/boy.png"
import nurse from "../component1/pic/nurse.png";
import singer from "../component1/pic/singer.png"
import cock from "../component1/pic/cock.png";
import { useNavigate } from 'react-router-dom';

 let array2 =[man,boy,nurse,singer,cock,man,boy,nurse,singer,cock,man,boy,nurse,singer,cock,man,boy,nurse,singer,cock];
function PageThree() {
  const token=localStorage.getItem("token");

  const [memories, setMemories] = useState([]);
  const array =["ليش ما رحت اليوم ؟ ","بكرا جاي عند ","اسمع....","يلا هيني بالملعب ","الله يهونها ","ليش ما رحت اليوم ؟ ","بكرا جاي عند ","اسمع....","يلا هيني بالملعب "]

  const navigate=useNavigate("")
 useEffect(()=>{


   navigate("/three")

 },[])

  useEffect(() => {



    
    axios.get("http://16.170.173.197/users",token).then((response) => {
      setMemories(response.data.users);
      
    }).catch((error) => {
      // console.log("Error Fetching memories 3", error);
    });
  }, []);

 








  return (
    <div className="page-container">
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <ResponsiveDrawer />
        </Grid>
        <Grid item xs={2}>
          <div className="sidebar">
            <div className="sidebar-header">
              <span className="sidebar-username">{localStorage.getItem("userName")}</span>
              <ArrowDropDownSharpIcon className="dropdown-icon" />
              <EditIcon className="edit-icon" />
            </div>
            <div className="messages-container">
              <div className="messages-header">
                <span className="messages-title">Messages</span>
                <h4 className="request-title">Request</h4>
              </div>
              {memories.slice(0, 9).map((name,index) => (
 
 <Message
  

avatar={array2[index]}
key={name.userName} 
authorName={name.userName}
mass={array[index]}

 />

))}






            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="page-content">
            <img src={Mess} className="page-image" />
            <h1 className="page-title">Your Messages</h1>
            <h3 className="page-description">send private photos and messages to a friend or group</h3>
            <Button variant="contained" className="send-button" style={{borderRadius:"50px"}}>send messages</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PageThree;
