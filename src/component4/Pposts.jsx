import React from 'react';
import { Stack } from '@mui/material';
import explorePic9 from './pic/explorePic9.avif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalToEdit from '../ModalToEdit';
import { useState } from 'react';

function Pposts({Image,id}) {
  const token =localStorage.getItem("token")
  const navigate =useNavigate()
  const [open, setOpen] =useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 

  function handelDel(){
    let person = prompt("... to delete the post write yes   ...to edit post write edit ", "no");
    if(person==="yes"){

      axios
      .request({
        method: "delete",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          id: id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let A =localStorage.getItem("posts");
        A--;
        localStorage.setItem("posts",A)
        navigate("/one")
        

      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        navigate("/one")
      });


          navigate("/one")

    }

    if(person==="edit"){
      setModalOpen(true)


      
    }
  }
  return (
    <>

    <img src={Image} style={{width:"200px",height:"200px",margin:10 }} onClick={handelDel} />


    
    <ModalToEdit   open={isModalOpen} onClose={() => setModalOpen(false)} id={id}/>
    </>
  )
}

export default Pposts