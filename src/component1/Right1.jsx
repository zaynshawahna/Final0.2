import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@mui/material';
import Right1Component from './Right1Component';
import man from "./pic/man.png"


function Right1() {
  const token = localStorage.getItem("token");
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    axios.get("http://16.170.173.197/users",token).then((response) => {
      setMemories(response.data.users);
      
    }).catch((error) => {
      console.log("Error Fetching memories 2", error);
    });
  }, []);

  const Suggestion = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4 style={{ float: "left", fontWeight: 300 }}> Suggestion for you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link style={{ color: "white", textDecoration: "none" }}>See more</Link></h4>
    </div>
  );

  const Meta = (
    <div style={{ display: "flex", alignItems: "center", textAlign: "left" }}>
      About. Help. Press. API. Jobs. Privacy. Terms.<br /><br />
      Location. Language. Meta Verified<br /><br />
      @ 2023 instagram from meta
    </div>
  );


  return (
    <div style={{ float: "right", marginTop: "10%", marginRight: "70px", color: "white" }}>
      <Right1Component name="ahmad" avatar={man}/>

      {Suggestion}

      {memories.slice(0, 4).map((memory) => (
        <Right1Component key={memory.id} name={memory.userName} avatar={memory.avatar} />
      ))}

      <br />

      {Meta}
    </div>
  );
}

export default Right1;
