import React,{useEffect,useState} from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios'
import  toast  from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const {Option}=Select;

const CreateProduct=()=> {
  const navigate=useNavigate()
  const [categories,setCategories]=useState([])
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState("")
  const [category,setCategory ]=useState("")
  const [quantity,setQuantity]=useState("")
  const [shipping,setShipping]=useState("");
  const [photo,setPhoto]=useState("");
    //////get all categories
    const getAllCategories=async(req,res)=>{
      try {
       const {data}=await axios.get('/api/v1/category/getall-category');
       if(data?.success){
         setCategories(data.category);
       }
       
      } catch (error) {
       console.log(error);
       toast.error("something went wrong")
      }
       };
       useEffect(()=>{
     getAllCategories()
       },[]);
       ////////////////////////createproduct
       const handleCreate=async(e)=>{
        e.preventDefault();
        try {
          const productData = new FormData();
          productData.append("name", name);
          productData.append("description", description);
          productData.append("price", price);
          productData.append("quantity", quantity);
          productData.append("photo", photo);
          productData.append("category", category);
          const { data } =await axios.post(
            "/api/v1/product/create-product",
            productData
          );
          if (data?.success) {
            toast.success("Product Created Successfully");
          } else {
           
            toast.error(data?.message);
            navigate("/dashboard/admin/products");
          }
        } catch (error) {
          console.log(error);
          toast.error("something went wrong");
        }
      

       };
  return (
    
    <Layout title={"Dashboard-Create-Product"}>
          <div className="container-fluid m-3 p-3">

 <div className='row'>
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9"> 
        <h1>create-product page</h1>
        <div className="m-1 w-75">
          <Select bordered={false} placeholder="select a Category" size="large" showSearch  className="form-select mb-3" onChange={(value)=>{setCategory(value);}}>
         {categories?.map((c)=>(
          <Option key={c._id} value={c._id}>{c.name}</Option>
         ))}
          </Select>
          <div className="mb-3">
            <label  className='btn btn-outline-secondary col-md-12'>
              {photo ? photo.name:"upload phpto"} 
            <input type="file" name="photo" accept='/image/*' onChange={(e)=>{setPhoto(e.target.files[0])}} hidden />
            </label>
          </div>
          <div className="mb-3">
            {photo && (
              <div className="text-center">
                <img src={URL.createObjectURL(photo)} alt="product-photo" height={'200px'} className='img img-responsive' />
              </div>
            )}
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" 
            value={name}
            placeholder='Name of the product..'
            onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="mb-3">
          <textarea class="form-control"  value={description} placeholder='description of the product..'  onChange={(e)=>setDescription(e.target.value)} rows="3"></textarea>
            {/* <input type="text" className="form-control" 
            value={description}
            placeholder='description of the product..'
            onChange={(e)=>setDescription(e.target.value)} /> */}
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" 
            value={price}
            placeholder='Price of the product..'
            onChange={(e)=>setPrice(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" 
            value={quantity}
            placeholder='Quantity of the product..'
            onChange={(e)=>setQuantity(e.target.value)} />
          </div>
          <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3 text-center">
                <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>

              </div>
         
        </div>
        </div>
     
    </div>
    </div>
    </Layout>
  )
}
export default CreateProduct;