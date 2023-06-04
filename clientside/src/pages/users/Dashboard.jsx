import React from 'react'
import Layout from '../../components/layout/Layout';
import { useAuth } from '../../context/auth';
import UserMenu from '../../components/layout/UserMenu';

export default function Dashboard() {
  const [auth]=useAuth()
  return (
<Layout title={"MA-STORE Dashborad"}>
    <div className="container-fluid m-3 p-3">
      <div className="row">
      <div className="col-md-3">
        <UserMenu/>
      </div>
      <div className="col-md-9">
        <h1 className='text-center text-success'>User Data</h1>
            <div className="container bg-secondary text-light w-75 p-5">
                <h3><strong className='text-dark'>User Name: </strong>{auth?.user?.name}</h3>
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
