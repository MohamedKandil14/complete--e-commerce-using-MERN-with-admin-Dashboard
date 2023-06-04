import React,{useState} from 'react'
import Layout from '../../components/layout/Layout';
// import {toast} from 'react-toastify';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const[answer,setAnswer]=useState("");
    const navigate=useNavigate()

    ///////////////////////////////////////////
  const  handlesubmit=async(e)=>{
e.preventDefault();
try {
    const res= await axios.post("/api/v1/auth/register",{name,email,password,address,answer,phone});
    if( res && res.data.success){
        console.log(res.data.message)
        toast.success( res.data.message);
        navigate("/login")
    }else{
        toast.error(res.data.message)
    }
} catch (error) {
    console.log(error);
    toast.error("somrthing went erong")
}
  }
  console.log(process.env.REACT_APP_APH)
  return (
    <Layout title={"Register For-MA Store"}>
   <div className="row regiser mt-4">
    <div className="col-md-1"></div>
    <div className="col-md-5">
        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg" alt="" />
    </div>

    <div className="col-md-5">
    <form onSubmit={handlesubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
  </div>
 
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label">address</label>
    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} required class="form-control" id="exampleInputAddress" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone</label>
    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required class="form-control" id="exampleInputAddress" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Answer</label>
    <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} required class="form-control" id="exampleInputAddress" placeholder='what is your favourite sport' />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="row mb-3">
  <div className="col-md-4"></div>
  <div className="col-md-4">
  <button  type="submit" class="btn btn-primary ">Submit</button>

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
