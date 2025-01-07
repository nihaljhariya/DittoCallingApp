import { Toolbar,Tab , Tabs ,  Typography } from '@mui/material';
import {AppBar } from '@mui/material';
import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function Navbar() {
      let navigate = useNavigate();
        const [meetingCode , setMeetingCode] = useState("");
        const {addToUserHistory} = useContext(AuthContext);
        let handleJoinVideoCall = async ()=>{
          await addToUserHistory(meetingCode)
            navigate(`/${meetingCode}`)
    
        }

    const router = useNavigate();

    const [value , setValue] = useState();
  return (
   <React.Fragment>
    <AppBar sx={{background:"#d8c6f0" , height:"4rem"}}>
        <Toolbar>
        <Typography sx={{fontSize:"2.5rem" , }} onClick={() => {
                        router("/")

                    }}><h3 style={{fontSize:"1.75rem" ,   marginLeft:"1rem" , marginTop:"0.5rem" ,cursor:"pointer" , color:"black" }}>DittoCalling</h3></Typography>
        <Tabs sx={{marginLeft : "auto"}} textColor='inherit' value={value} onChange={(e , value)=>setValue(value)}>
          
          <Tab sx={{color:"black"  , fontSize:".9rem" ,  }} onClick={()=>{
              localStorage.removeItem("token")
                navigate("/auth")
              
            }} label="Logout"/>
          <Tab sx={{color:"black"  , fontSize:".9rem" }}  onClick={
              () =>{
                navigate("/history")
              }
            } label="History"/>

          
        </Tabs>
        </Toolbar>
    </AppBar>
   </React.Fragment>
  )
}

export default Navbar