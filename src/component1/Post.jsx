import React from 'react';
import Avatar from '@mui/material/Avatar';
import {  Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comment from './pic/Comment.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Post({avatarImg,authorName,image,description,likes,id}) {
  const token=localStorage.getItem("token")
 
const navigate=useNavigate();
  const [color,setColor]=useState("white")


     function addLike(){
      console.log(id)
      console.log(`http://16.170.173.197/posts/like/${id}`)



      axios.post(`http://16.170.173.197/posts/like/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then((response) => {
        
          console.log("Liked the post");
          navigate("/one")

        })
        .catch((error) => {
          console.error("Error liking the post", error);
         
          navigate("/one")
        });
        navigate("/one")


     }
 
      const toReturn= <Box>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="Remy Sharp" src={avatarImg} sx={{ width: "8%", height: "auto",borderRadius:"50%",marginTop:"5px" }} />
        <span style={{ color: "white" }}>&nbsp;{authorName}</span>
        <MoreHorizIcon style={{ marginLeft: "auto", color: "white" }}/>
        {/* <InfoOutlinedIcon  /> */}
      </div>
    
      <img src={image} style={{ marginTop: "10px", width: "100%", height: "auto" }} />
    
      <div style={{ display: "flex", alignItems: "center",color:"white "  }}>
        <FavoriteBorderIcon onClick={addLike} style={{color:`${color}`}}/>
        <img src={Comment} style={{ marginLeft: "10px",color:"white "  }}/>
       
        <SendIcon style={{ marginLeft: "10px" ,color:"white " }} />
        <BookmarkBorderIcon style={{ marginLeft: "auto", color: "white" }} />
      </div>
    
      <div style={{ fontSize: "16px", fontWeight: "600",color:"white ",display: "flex", alignItems: "center"}}>{likes}&nbsp;likes</div>
      <div style={{ fontSize: "12px", fontWeight: "600",color:"white ",display: "flex", alignItems: "center"  }}>{authorName}</div>
      <div style={{ fontSize: "10px", fontWeight: "600",color:"white ",display: "flex", alignItems: "center",textAlign:"left"   }}>
       {description} </div>
    </Box>
    
    

  return (
    <div style={{width:"90%"}}>
    {toReturn}

  <br>
  </br>
  <br>
  </br>

  </div>
  )
}

export default Post