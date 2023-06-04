import React, { useState, useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
const AllProducts = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/getall-products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2 text-center" style={{ width: "13rem" }}>
                  <img
                    src={`/api/v1/product/productphoto/${p._id}`}
                    className="card-img-top w-75 mx-4 mt-2 "
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-title">{p.description}</p>
                    <p className="card-title"><strong>Price : </strong>{p.price} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;