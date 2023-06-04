import React,{useEffect,useState} from 'react'
import Layout from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Checkbox,Radio } from 'antd';
import { Prices } from '../components/Prices';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast'
export default function Home() {
  const navigate=useNavigate();
  const [cart,setCart]=useCart();
const [products,setProducts]=useState([]);
const [categories,setCategories]=useState([]);
const [checked,setChecked]=useState([]);
const [radio,setRadio]=useState([]);
const [total,setTotal]=useState(6)
const [page,setPage]=useState(1 );
const [loading,setLoading]=useState(false)
//////////////////getall products
const getAllCategories=async(req,res)=>{
  try {
   const {data}=await axios.get('/api/v1/category/getall-category');
   if(data?.success){
     setCategories(data?.category);
   }
   
  } catch (error) {
   console.log(error);
  
  }
   };
   useEffect(()=>{
 getAllCategories()
   },[]);
   //getTOtal COunt
 const getTotal = async () => {
  try {
    const { data } = await axios.get("/api/v1/product/product-count");
    setTotal(data?.total);
  } catch (error) {
    console.log(error);
  }
};
useEffect(()=>{
  getAllProduct();
  getTotal()
},[]);
useEffect(() => {
  if (page === 1) return;
  loadMore();
}, [page]);
  //////////////load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
   ///////////////////////filterbycat
   const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

/////////////////getall products
const getAllProduct=async()=>{
  try {
setLoading(true)
    const {data}=await axios.get(`/api/v1/product/product-list/${page}`);
    setLoading(false)
    setProducts(data.products);   
  } catch (error) {
    setLoading(false)

    console.log(error)
  }
}
useEffect(() => {
  if (!checked.length || !radio.length) getAllProduct();
}, [checked.length, radio.length]);

useEffect(() => {
  if (checked.length || radio.length) filterProduct();
}, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout  title={"Home-Kandil Store"}>
      <div>
     <img className="photo-container" src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1595665593673-bf1ad72905c0%3Fixlib%3Drb-4.0.3%26q%3D60%26fm%3Djpg%26crop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26w%3D1200%26fit%3Dcrop%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dclothing%252520store%26blend%3D000000" alt="" />
      </div>
     <div className="row mt-5">
      <div className="col-md-3">
      <h4 className=' text-success'>Fitter By Category</h4>
        <div className="d-flex flex-column mx-2 ">
        {categories?.map((c) => (
              <Checkbox className='fw-bold'
                key={c._id}
                 onChange={(e) => handleFilter(e.target.checked,c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
        </div>
        {/*price filter*/}
      <h4 className='mt-4  text-success'>Fitter By Price</h4>
        <div className="d-flex flex-column mx-2  ">
        <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio className='fw-bold' value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
        </div>
        <div className="d-flex flex-column mt-3 ">
          <button className='btn btn-danger w-50 mx-3' onClick={()=>window.location.reload()}>RESET FILTERS</button>
        </div>
        
       
      </div>
      <div className="col-md-9 text-center">
        {/* {JSON.stringify(radio,null,4)} */}
        <h1 className='text-center text-success'>All Products</h1>
        <div className="d-flex flex-wrap">
        {products?.map((p) => (
                <div className="card m-2 text-center mx-4" style={{ width: "15rem" }}>
                  <img
                    src={`/api/v1/product/productphoto/${p._id}`}
                    className="card-img-top w-75 mx-4 "
                    alt={p.name}
                  />
                  <div className="card-body">
                  <p className="card-text">{p.description.substring(0,30)}</p>

                    {/* <h5 className="card-title">Category:{p.category}</h5> */}
                    <h5 className="card-title"> {p.name}</h5>
                    <h5 className="card-title">  $ {p.price}</h5>
                    <div class="card-body">
   
    <button  className="btn btn-primary " onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
    <button  className="btn btn-secondary mt-2"     onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}>Add To Cart</button>
  </div>
                  </div>
                </div>
             
            ))}
        </div>
<div className=" m-2 p-3">{products && products.length < total && (
  <button className='btn btn-warning' onClick={(e)=>{e.preventDefault();
  setPage(page + 1)
  }}>{loading ? "Loading..." : "LodMore"}</button>
)}</div>
      </div>
     </div>
    </Layout>
  )
}
