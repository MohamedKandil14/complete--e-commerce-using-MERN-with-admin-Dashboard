import React,{useEffect,useState} from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';
import { Modal } from 'antd'
export default function CreateCategory() {
  const [categories,setCategories]=useState([]);
  const [name,setName]=useState("");
  const [visible,setVisible]=useState(false);
  const [selected,setSelected]=useState(null);
  const [updatedName,setUpdatedName]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post('/api/v1/category/create-category',{name});
      if(data?.success){
        toast.success(`Successful creation of an category ${name} `);
        getAllCategories();
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error("error in input form")
    }
  }
  //////get all categories
  const getAllCategories=async(req,res)=>{
 try {
  const {data}=await axios.get('/api/v1/category/getall-category');
  if(data?.success){
    setCategories(data?.category);
  }
  
 } catch (error) {
  console.log(error);
  toast.error("something went wrong")
 }
  };
  useEffect(()=>{
getAllCategories()
  },[])
  //////////////////////////////update
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try {
     const {data}=await axios.put(`/api/v1/category/update-category/${selected._id}`,{name:updatedName});
     if(data.success){
      toast.success(`${updatedName} is uppdated`);
      setSelected(null);
      setUpdatedName("");
      setVisible(false);
      getAllCategories()
     }else{
      toast.error(data.message)
     }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
      }
      //////////
  //////////////////////////////delete
  const handleDelete=async(Pid)=>{
    
    try {
     const {data}=await axios.delete(`/api/v1/category/delete-category/${Pid}`);
     if(data.success){
      toast.success(`Category is deleted`);
      
      
      
      getAllCategories()
     }else{
      toast.error(data.message)
     }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
      }
      //////////
  return (
    <Layout title={"Dashboard-Create Category"}>
          <div className="container-fluid m-3 p-3">

 <div className='row'>
 <h1 className='text-center m-3 '>Manage Category</h1>

        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-8 w-50  "> 
        <div className="p-3">
          <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}/>
        </div>
        <div>
        <table className="table w-75 mx-3">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col" className='text-center'>Actions</th>
    </tr>
  </thead>
  <tbody>
   {categories?.map((c) =>(
    <>
     <tr>
    <td key={c._id}>{c.name}</td>
    <td><button className='btn btn-success ms-2' onClick={()=>{setVisible(true);setUpdatedName(c.name);setSelected(c)}}>Edit</button></td>
    <td><button className='btn btn-danger ms-2' onClick={()=>{handleDelete(c._id)}}>Delete</button></td>
   
   
    
    </tr>
    </>
     ))}
  </tbody>
</table>
        </div>
        
        <Modal onCancel={()=>setVisible(false)} footer={null} visible={visible}>
          <CategoryForm value={updatedName} setValue={ setUpdatedName }  handleSubmit={handleUpdate}/>
        </Modal>
        </div>
     
    </div>
    </div>
    </Layout>
  )
}
