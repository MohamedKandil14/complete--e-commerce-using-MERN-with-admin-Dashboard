import React from 'react';
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import { useAuth } from '../../context/auth';

export default function AdminDashboard() {
    const [auth]=useAuth()
  return (
   
<Layout>
  <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
       
        <div className="col-md-9">
        <h1 className='text-center text-success'>Admin Data</h1>
            <div className="container bg-secondary text-light w-75 p-5">
                <h3><strong className='text-dark'>Admin Name: </strong>{auth?.user?.name}</h3>
                <h3><strong className='text-dark'>E-mail: </strong>{auth?.user?.email}</h3>
                <h3><strong className='text-dark'>Contact: </strong>{auth?.user?.phone}</h3>
                <h3><strong className='text-dark'>Address: </strong>{auth?.user?.address}</h3>
            </div>
        </div>
    </div>
  </div>
</Layout>

  )
}
