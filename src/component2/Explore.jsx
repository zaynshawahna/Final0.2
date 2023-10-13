import React from 'react'
import ExpImge from './ExpImge'


function Explore(props) {
  return (
    
    <div style={{backgroundColor:"black"}}>
    <ExpImge Img={props.Img1} Icon={props.Icon}/>
    <ExpImge Img={props.Img2} Icon={props.Icon}/>
    <ExpImge Img={props.Img3} Icon={props.Icon}/>
    </div>
    
 
  )
}

export default Explore