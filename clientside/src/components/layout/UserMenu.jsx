import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserMenu() {
  return (
    <div className="text-center p-3 ">
 <div class="list-group">
    <h4 className='text-success'>Dashboard</h4>
    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
  </div>
    </div>
  )
}
