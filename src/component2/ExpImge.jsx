import React from 'react'
import FilterNoneIcon from '@mui/icons-material/FilterNone';
function ExpImge(props) {
  return (
    <div style={{position:"relative",display:"inline-block"}}>
         <img src={props.Img} style={{width:"200px",height:"200px",margin:10}}/>
         <FilterNoneIcon style={{position:"absolute",top:"10px",left:"180px",color:"white",fontSize:"24px"}}/>
    </div>
  )
}

export default ExpImge