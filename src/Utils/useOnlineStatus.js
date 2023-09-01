import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
    // check online or not 
    const [onlineStatus,setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener('online',(event)=>{
            setOnlineStatus(true)
        });
        window.addEventListener('offline',(event)=>{
            setOnlineStatus(false)
        });
        return()=>{

        }
    },[])
    
    //retun boolean value
    return onlineStatus;
}

export default useOnlineStatus