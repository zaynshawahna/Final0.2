import React from 'react';
import Avatar from '@mui/material/Avatar';
import man from './pic/man.png';
import { Link, Stack } from '@mui/material';

function Right1Component({ name, avatar}) {
  return (
    <>
<div style={{ display: "flex", alignItems: "center",marginBottom:"5px" }}>


  <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 60, height: 60, margin: "10px" }} />
  <Stack direction="column" style={{ marginRight: "auto" }}>
  <span style={{ marginRight: "auto" }}>{name}</span>
  <span style={{color:"#8d8d8d"}}>{name}</span>
  </Stack>
  
  <Link style={{ marginLeft: "10px" }}>Follow</Link>
 

</div>


       
       
       </>
  )
}

export default Right1Component