import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 600,
  bgcolor: '#1d1d1d',
  borderRadius: "23px",
  p: 4,
};

const ModalToEdit = ({ open, onClose, setMemories ,id}) => {
  
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const [toClose,setToClose]=useState(true)
  const navigate=useNavigate()
  const token = localStorage.getItem('token');

  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
    };
    reader.readAsDataURL(file);
   
   
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          description: description,
          image:image,


        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
      navigate("/four")


setToClose(false)
  };

  return (
    <Modal
      open={open&&toClose}
      onClose={onClose}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", color: "white", fontFamily: "Poppins", fontWeight: "800" }} 
        >
          Edit a memory
        </Typography>
        <hr style={{
          height: "2px",
          backgroundColor: '#8d8d8d',
          border: 'none',
        }}></hr>
        
        <form>
        <br></br>
        <label style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>Title</label>
        <br></br>
          <Input
            
            value={description}
            onChange={handleDescriptionChange}
            required
            fullWidth
            sx={{ mb: 2, backgroundColor: '#8d8d8d', border: 'solid 2px white', borderRadius: '10px' }} 
          />

<label  style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>Body</label>
        <br></br>
        <input name="inputt" style={{ width: "100%", height: "100px", borderRadius: "10px", backgroundColor: '#8d8d8d', border: "solid 2px white" }}></input>
          <br/><br/><br/>
          
          {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: '30%', marginBottom: '1rem',height:"20%" }}
            />
          )}

      
            <Button
              variant="contained"
              component="span"
              sx={{
                fontFamily: 'Poppins',
                width: '100%',
                textAlign: 'left',
                fontWeight: 900,
                marginBottom: '5px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '10px',
                fontSize: '14px',
                color: 'white',
                backgroundColor: '#1F4172',
                ':hover': {
                  bgcolor: 'white',
                  color: 'black',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
            >
              Upload Image
            </Button>
    
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <br>
          </br><br/>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              fontWeight: 900,
              paddingTop: '5px',
              fontFamily: 'Poppins',
              paddingBottom: '5px',
              borderRadius: '10px',
              fontSize: '14px',
              color: 'white',
              backgroundColor: '#1F4172',
              ':hover': {
                bgcolor: 'white',
                color: 'black',
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            Submit
          </Button>
          </div>

        </form>
      </Box>
    </Modal>
  );
};

export default ModalToEdit;
