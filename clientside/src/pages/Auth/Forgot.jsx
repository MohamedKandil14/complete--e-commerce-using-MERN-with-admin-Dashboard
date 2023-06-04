import React,{useState} from 'react'
import Layout from '../../components/layout/Layout';
// import {toast} from 'react-toastify';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/auth';


export default function Forgot() {
    // const [auth,setAuth]=useAuth();
    const[email,setEmail]=useState("");
    const[newPassword,setnewPassword]=useState("");
    const[answer,setAnswer]=useState("");
    const navigate=useNavigate();
    const  handlesubmit=async(e)=>{
        e.preventDefault();
        try {
            const res= await axios.post("/api/v1/auth/forgot-password",{email,newPassword,answer});
            if( res && res.data.success){
            
                console.log(res.data.message)
                toast.success(res.data&& res.data.message);
                navigate("/login")
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("INVALID userName or password")
        }
          }
  return (
   <Layout title={'forgot-password'}>
    <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
            </div>
        
            <div className="col-md-5">
            <form onSubmit={handlesubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <label for="exampleInputanswer" class="form-labe2">Answer</label>
            <input type="text" value={answer} placeholder='enter Your Favourite sport' onChange={(e)=>setAnswer(e.target.value)} required  class="form-control" />
          </div>
        
       
       
        
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">New Password</label>
            <input type="password" value={newPassword} onChange={(e)=>setnewPassword(e.target.value)} required class="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="row mb-3">
          <div className="col-md-4"></div>
          <div className="col-md-4">
          <button  type="submit" class="btn btn-primary ">Reset</button>
        
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
