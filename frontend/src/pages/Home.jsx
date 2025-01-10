import React , { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { TextField } from '@mui/material';
import "../App.css";
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/icons-material/Restore';

import IconButton from '@mui/material/Button'; 

import Navbar2 from './Navbar2';
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
    {/* <div className="navBar">

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
        </div> */}
        <Navbar2/> 
        <div className="meetContainer">
          <div className="leftPanel">
            <div>
              <h2>Providing something that nobody knows...</h2>
          <div style={{display:"flex" , gap:"10px"}}>
            <TextField onChange={e=> setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code " variant="outlined"/>
            {/* <Button onClick={handleJoinVideoCall} variant="contained" >Join</Button> */}
            <button style={{height:"3.3rem" , width:"7rem"  , marginLeft:"1rem" , backgroundColor:"#9169c1" , color:"white"}}  onClick={handleJoinVideoCall } >Join</button>
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
