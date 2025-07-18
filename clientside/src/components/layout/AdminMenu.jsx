import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {
  return (
    <div className="text-center p-3 ">
 <div class="list-group">
    <h2 className='text-success'>Admin Pannel</h2>
    <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
    <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
    <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action">Products</NavLink>
    <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Orders</NavLink>
    <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
  </div>
    </div>
   
  )
}
