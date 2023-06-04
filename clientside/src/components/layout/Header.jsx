import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategry";
import { useCart } from "../../context/cart";
import {Badge} from 'antd'

const Header = () => {
  const [auth,setAuth]=useAuth();
  const [cart]=useCart()
  const categories=useCategory()
  const  handlelogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    })
    localStorage.removeItem('auth');
    toast.success("logout successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link  to="/" className="slogan navbar-brand mx-4">
              🛒 Kandil
            </Link>
            <SearchInput />
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
             
              {!auth.user ? (
                <>
                
                 <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
                </>
              ):(
                <>
                 <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {auth?.user?.name}
          </Link>
          <ul className="dropdown-menu">
            <li><Link to={`/dashboard/${auth?.user?.role === 1? "admin":"user"}`} className="dropdown-item" >Dashboard</Link></li>
            <Link to="/login" onClick={handlelogout}  className="dropdown-item">
                  Logout
                </Link>
          </ul>
        </li>
                
                </>
              )}
             
              <li className="nav-item ">
              <Link to="/cart" className="nav-link ">
                  <Badge className="text-light fs-5" count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;