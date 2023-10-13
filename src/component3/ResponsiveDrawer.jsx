import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Img from '../component1/pic/Img.png';
import { Link } from "react-router-dom";
import BasicModal from '../BasicModal';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
const ss = {
  backgroundColor: "black",
  color: "white",
  fontFamily: 'Poppins'
};
const avatar=localStorage.getItem("avatar");
const userName=localStorage.getItem("userName")




export default function ResponsiveDrawer(s) {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 
  const[avatar,setAvatar]=useState(localStorage.getItem("avatar"))

  const [where, setWhere] = useState(""); 
  const handleLogout = () => {
    setWhere("/")
    localStorage.removeItem('token');
    localStorage.removeItem("id")
    localStorage.removeItem("userName")
    localStorage.removeItem("avatar")
    localStorage.removeItem("bio")
    localStorage.removeItem("posts")
  }
  function handleCreateClick() {
    setModalOpen(true); 
  }


function handelChage(){


  setOpen(true);
}

  return (
    <div style={{ backgroundColor: 'black', marginLeft: "10%", marginRight: "4%",  height: "5000px" }}>
      <div style={{ backgroundColor: "black" }}>
        <br />
        <img src={Img} style={{ width: 130, height: 40, backgroundColor: "black", marginTop: "13px", marginLeft: "20px", marginBottom: "5px", float: "left" }} />

        <Link to='/one' style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={0} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link  style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <SearchIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Search' />
            </ListItemButton>
          </ListItem>
        </Link>
       
        <Link to="/two" style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ExploreIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Explore' />
            </ListItemButton>
          </ListItem>
        </Link>
               
        <Link style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={3} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <SlideshowIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Reels'/>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/three' style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={4} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ChatIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Messages' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link  style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={5} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <FavoriteBorderIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Notification' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link  style={{ textDecoration: "none", color: "white" }}  onClick={handleCreateClick} >
          <ListItem key={6} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <AddCircleOutlineIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Create' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/four' style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={7} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img src={avatar} style={{ width: "25px", borderRadius: "50%" }} />
              </ListItemIcon>
              <ListItemText primary={userName} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={where} style={{ textDecoration: "none", color: "white" }} onClick={handleLogout}>
      <ListItem key={9} disablePadding>
        <ListItemButton>
          <ListItemIcon>
             <LogoutIcon style={ss}/>
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItemButton>
      </ListItem>
    </Link>

 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>

        <Link style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={8} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MenuIcon style={ss} />
              </ListItemIcon>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
        </Link>
      </div>
      
      <BasicModal open={isModalOpen} onClose={() => setModalOpen(false)} /> 
    
    </div>
  );
}
