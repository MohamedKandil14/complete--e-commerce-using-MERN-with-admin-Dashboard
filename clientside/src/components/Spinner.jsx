import React,{useEffect,useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Spinner({path="login"}) {
    const [count,setCount]=useState(3);
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(() =>{
        const interval=setInterval(()=>{
            setCount((prevval) => --prevval)
        },1000)
        count===0 && navigate(`/${path}`,{
            state:location.pathname
        });
        return ()=>clearInterval(interval)
    }, [count,navigate,location,path])
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height:"100vh" }}>
        <h1 className='text-center'>Redirecting To You in...{count} second</h1>
        <div className='spinner-border' role='status'>
<span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </>
  )
}
