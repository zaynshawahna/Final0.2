import { Avatar, Stack } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Message({avatar,authorName,mass}) {


 
 
    
  return (



<div>
  <Stack direction="row" spacing={2}>
    <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 50, height: 50, margin: "10px" }} />
    <Stack direction="column" sx={{ textAlign: "left", marginRight: "100px" }}>
      <span>{authorName}</span>
      <span style={{ color: "#8d8d8d", marginTop: "4%" ,width:"120px"}}>{mass}</span>
    </Stack>
    <Stack direction="column" style={{ marginLeft: "0" }}>
      <span style={{ color: "black" }}>.3s<FiberManualRecordIcon /></span>
      <span style={{ marginLeft: "100px" }}>.2s</span>
    </Stack>
  </Stack>
  <div style={{ display: "flex", alignItems: "center" }}>
  </div>
  <br></br>
</div>



  )
}

export default Message