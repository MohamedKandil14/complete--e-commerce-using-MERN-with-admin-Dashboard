// import logo from './logo.svg';
// import './App.css';
// import Layout from './components/layout/Layout';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Notfound from './pages/Notfound';
import Register from './pages/Auth/Register';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/users/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Forgot from './pages/Auth/Forgot';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import AllProducts from './pages/Admin/AllProducts';
import Profile from './pages/users/Profile';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProducts';
import CartPage from './pages/CartPage';
import Orders from './pages/users/Orders';
import AdminOrders from './pages/Admin/AdminOrders';
// import UpdateProduct from './pages/Admin/UpdateProduct';


function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/product/:slug' element={<ProductDetails/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/category/:slug' element={<CategoryProduct/>}/>
      
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      <Route path="user/profile" element={<Profile/>}/>
      <Route path="user/orders" element={<Orders/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path="admin" element={<AdminDashboard/>}/>
      <Route path="admin/create-category" element={<CreateCategory/>}/>
      <Route path="admin/create-product" element={<CreateProduct/>}/>
      <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
      <Route path="admin/products" element={<AllProducts/>}/>
      <Route path="admin/users" element={<Users/>}/>
      <Route path="admin/orders" element={<AdminOrders/>}/>

      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/forgot-password' element={<Forgot/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    {/* <Header/>
    <Footer/> */}
    {/* <Layout>
    <h1>hello from clientside</h1>
    </Layout> */}

    </>
  );
}

export default App;
