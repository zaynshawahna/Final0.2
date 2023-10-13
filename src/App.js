
import "./App.css";
import PageOne from "./component1/PageOne";
import PageTwo from "./component2/PageTwo";
import { Route, Routes } from "react-router";
import PageThree from "./component3/PageThree";
import PageFore from "./component4/PageFour";
import PageFive from "./component5/PageFive";
import PageSix from "./component6/PageSix";
import Protected from "./Protected";
import ProtectSign from "./ProtectSign";
function App() {



  return (
   <>
  
  

<div className="App" >



<Routes>
<Route path='/one' element={<Protected>
  
  <PageOne/>
  
  </Protected>}/>
<Route path='/two' element={
<Protected>
  
<PageTwo/>
  
  </Protected>}/>
<Route path='/three' element={<Protected>
  
  <PageThree/>
    
    </Protected>} />
<Route path='/four' element={<Protected>
  
  <PageFore/>
    
    </Protected>} />

<Route path='/' element={<ProtectSign><PageFive/></ProtectSign>} />
<Route path='/signUp' element={
  <ProtectSign><PageSix/></ProtectSign>



} />

</Routes>
</div> 

   </> 
  );


}

export default App;
