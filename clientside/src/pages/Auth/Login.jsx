import React,{useState} from 'react'
import Layout from '../../components/layout/Layout';
// import Forgot from './Forgot';
// import {toast} from 'react-toastify';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Login() {
    const [auth,setAuth]=useAuth()
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const location=useLocation();
    const  handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            const res= await axios.post("/api/v1/auth/login",{email,password});
            if( res && res.data.success){
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem("auth",JSON.stringify(res.data));
                console.log(res.data.message)
                toast.success(res.data&& res.data.message);
                navigate(location.state || "/")
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("INVALID userName or password")
        }
          }
          console.log(process.env.REACT_APP_APH)
          return (
            <Layout title={"Login-MA Store"}>
           <div className="row loginin mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <img  src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt=""  />
            </div>
        
            <div className="col-md-5 mt-5">
            <form onSubmit={handlesubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        
       
       
        
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required class="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="row mb-3">
          <div className="col-md-4"></div>
          <div className="col-md-4">
          {/* <button  type="button" onClick={()=>navigate('/forgot-password')} class="btn btn-primary mb-3 ">Forgetpassword</button> */}
          <button  type="submit" class="btn btn-primary ">Login</button>
        
          </div>
          <div className="col-md-4"></div>
          </div>
        </form>
            </div>
            <div className="col-md-1"></div>
        
           </div>
            </Layout>
          )
}
