import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
export default function Notfound() {
  return (
    <Layout  title={"Not found page,back!"}>
    <div className="row p-5 mt-3">
      <div className="col-md-4"></div>
      <div className="col-md-4 text-center">
      <div className="pnf ">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading mb-3">Oops ! Page Not Found</h2>
        <Link  to="/" className="pnf-btn mt-3">
          Go Back
        </Link>
      </div>
      </div>
      <div className="col-md-4"></div>

    </div>
  </Layout>
  )
}
