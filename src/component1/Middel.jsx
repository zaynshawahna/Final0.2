
import AvatarStack from "./AvatarStack";
import React, { useEffect, useState } from 'react';
import Post from "./Post";
import axios from 'axios';


function Middel() {
 const token=localStorage.getItem("token");
 const [memories, setMemories] = useState([]);

 useEffect(() => {
  axios.get("http://16.170.173.197/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMemories(response.data.posts)
   
  }).catch((error) => {
    console.log("Error Fedching memories 4", error)
  })
}, [])







  return (
    <div style={{backgroundColor:"black",marginLeft:"5%"}}>
 
 <AvatarStack  />

 {memories.map((memory,index) => (
 
       <Post
         key={memory.id} // Make sure to provide a unique key for each Post component
         avatarImg={memory.user.avatar}
         authorName={memory.user.userName}
         image={memory.image}
         description={memory.description}
         likes={memory.likes.length}
         id={memory.id}
       />
     ))}

    </div>
  )
}

export default Middel