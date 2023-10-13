import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import StoryAvatare from './StoryAvatare'; 
import axios from 'axios';
import man from "./pic/man.png";
import boy from "./pic/boy.png"
import nurse from "./pic/nurse.png";
import singer from "./pic/singer.png"
import cock from "./pic/cock.png";
 let array =[man,boy,nurse,singer,cock];

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) ;
  }
  return str;
}
function pushIfNotExists(array, item) {
  if (!array.includes(item)) {
    array.push(item);
  }
}
function AvatarStack() {
  const token = localStorage.getItem("token");
  const [memories, setMemories] = useState([]);
  const [uniqueNames, setUniqueNames] = useState([]);

  useEffect(() => {
    axios.get("http://16.170.173.197/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setMemories(response.data.posts);

      const mapp=response.data.posts.map((memory)=> memory.user)
   



      const names = Array.from(new Set(response.data.posts.map((memory) =>memory.user.userName  )));

       
      const firstFourNames = names.slice(0, 5).map((name) => truncateString(name, 8));
      setUniqueNames(firstFourNames);





    }).catch((error) => {
      console.log("Error Fetching memories 1", error);
    });
  }, []);


  return (
    <div className="avatar-stack-container">
      <br />
      <Stack direction="row" spacing={4} className="avatar-stack">
        {uniqueNames.map((name,index) => (
          <StoryAvatare
          
          
          key={name} 
          authorName={name}
          avatar={array[index]}

          
          
          />
        ))}
      </Stack>
      <br />
    </div>
  );
}

export default AvatarStack;








