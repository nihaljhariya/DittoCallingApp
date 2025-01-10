import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (wrappedComponent) =>{
    const AuthComponent = (props)=>{
        const router = useNavigate();

        const isAuthenticate = ()=>{
            if(localStorage.getItem("token")){
                return true;
            }
            return false;
        }
        useEffect(()=>{
            if(!isAuthenticate()){
                router("/auth")
            }
        } , [])
        return <wrappedComponent {...props}/>
    }
    return AuthComponent;

}

export default withAuth;