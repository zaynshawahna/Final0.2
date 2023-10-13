import * as React from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from '../component1/ResponsiveDrawer';
import Explore from './Explore';
import explorePic1 from './pic/explorePic1.avif';
import explorePic2 from './pic/explorePic2.avif';
import explorePic3 from './pic/explorePic3.avif';
import explorePic4 from './pic/explorePic4.avif';
import explorePic5 from './pic/explorePic5.avif';
import explorePic6 from './pic/explorePic6.avif';
import explorePic7 from './pic/explorePic7.avif';
import explorePic8 from './pic/explorePic8 (1).avif';
import explorePic9 from './pic/explorePic9.avif';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function PageTwo() {

  const navigate=useNavigate("")
  useEffect(()=>{
 
 
    navigate("/two")
 
  },[])
  return (
    <div style={{backgroundColor:"black"}}>
  <Grid container spacing={2}>
  <Grid item xs={2.5} >
  <ResponsiveDrawer style={{backgroundColor:"black"}} s="solid 2px #1d1d1d" /> 
  </Grid>
  <Grid item xs={9.5}  >

    <div >
    <Explore Img1={explorePic1} Img2={explorePic2} Img3={explorePic3} Icon={22}/>
    <Explore Img1={explorePic6} Img2={explorePic5} Img3={explorePic4} Icon={22}/>
    <Explore Img1={explorePic7} Img2={explorePic8} Img3={explorePic9} Icon={22}/>
    <Explore Img1={explorePic1} Img2={explorePic2} Img3={explorePic3} Icon={22}/>
    <Explore Img1={explorePic6} Img2={explorePic5} Img3={explorePic4} Icon={22}/>
    <Explore Img1={explorePic7} Img2={explorePic8} Img3={explorePic9} Icon={22}/>
   


    </div>

    

  </Grid>
</Grid>
    
    </div>
  )
}

export default PageTwo