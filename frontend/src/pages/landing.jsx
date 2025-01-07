import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { colors } from '@mui/material';
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            {/* <nav style={{backgroundColor:"#d8c6f0"}} class="  navbar navbar-expand-lg navbar-light  ">
  <a style={{color:"#9669c1" , fontWeight:"600" , fontSize:"2rem"}}  class="navbar-brand" href="/">DittoCalling</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a style={{color:"Black" , fontWeight:"500" , fontSize:"1.2rem" , cursor:"pointer"}} onClick={() => {
                        router("/aljk23")
                    }} class="nav-link" >Join as Guest <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a style={{color:"Black" , fontWeight:"500" , fontSize:"1.2rem" , cursor:"pointer"}} onClick={() => {
                        router("/auth")

                    }} class="nav-link" >Register</a>
      </li>
      <li class="nav-item">
        <a style={{color:"Black" , fontWeight:"500" , fontSize:"1.2rem" , cursor:"pointer"}} onClick={() => {
                        router("/auth")

                    }} class="nav-link" >Login</a>
      </li>
      
    </ul>
  </div>
</nav> */}
            {/* <nav>
                <div className='navHeader'>
                    <h2 style={{ color: "black" }}>DittoCalling</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav> */}
<Navbar/>

            <div style={{marginTop:"2rem"}} className="landingMainContainer">
                <div >
                    <h1 style={{color:"black" , fontSize:"4rem"}} >A virtual <span style={{ color: "#9169c1" }}>Handshake</span>  across the miles...</h1>

                    <h3 style={{color:"black" , fontSize:"2rem"}} >Bridging the Gap by DittoCalling</h3>
                    <div role='button'>
                        <Link   to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.svg" alt="" />
                    <div> <h4 style={{color:"black" , fontSize:"1.5rem" , textAlign:'center'}}>Hello there catch me up!!</h4></div>
                </div>
               
             
            </div>


      
        </div>
    )
}