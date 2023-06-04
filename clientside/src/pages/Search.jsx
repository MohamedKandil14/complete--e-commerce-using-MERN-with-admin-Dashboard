import React from "react";
import { useSearch } from "../context/search";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate=useNavigate();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container ">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} products` }
          </h6>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2 text-center" style={{ width: "13rem" }}>
                <img
                  src={`/api/v1/product/productphoto/${p._id}`}
                  className="card-img-top w-75"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button class="btn btn-primary ms-1"  onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                  <button class="btn btn-secondary ms-1 mt-3 ">ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Search;