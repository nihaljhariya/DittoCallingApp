import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import "../App.css";
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import IconButton from '@mui/material/Button'; 
import { TextField } from '@mui/material';
export default function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode , setMeetingCode] = useState("");
    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async ()=>{
      await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)

    }

  return (
    <>
    <div className="navBar">

        <div style ={{display:"flex" , alignItems:"center"}}>
           <h1>DittoCalling </h1>
        </div>
        <div style={{display:"flex" , alignItems:"center"}}>
            <IconButton onClick={
              () =>{
                navigate("/history")
              }
            }>
               <RestoreIcon/>
               <h3>History</h3>
            </IconButton>
            
            <Button onClick={()=>{
              localStorage.removeItem("token")
                navigate("/auth")
              
            }} >Logout </Button>
        </div>
        </div>
        <div className="meetContainer">
          <div className="leftPanel">
            <div>
              <h2>Providing something that nobody knows...</h2>
          <div style={{display:"flex" , gap:"10px"}}>
            <TextField onChange={e=> setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code " variant="outlined"/>
            {/* <Button onClick={handleJoinVideoCall} variant="contained" >Join</Button> */}
            <button  onClick={handleJoinVideoCall } >Join</button>
          </div>
        </div>
        </div>
        <div className='rightPanel'>
          <img srcSet='/logo3.png' alt='' />
        </div>
        </div>
    </>
  )
}
