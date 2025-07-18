import React from 'react'
import Header from './Header'
import Footer from './Footer';
import {Helmet} from "react-helmet";
import { Toaster} from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
export default function Layout({children,title,keywords,author,description}) {
  return (
    <div>
         <Helmet>
                
                <meta charSet="utf-8" />

                <meta name="description" content={description}/>
                 <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
               
             
            </Helmet>
        <Header/>
           <main style={{minHeight:'80vh'}}>{children}
           <Toaster />

           </main>
           <Footer/>

    </div>
  )
}
Layout.defaultProps={
title:"MA-Store,Shop NOW",
description:"MERN stack Project",
keywords:"Mongo,Express,React,Node.js",
author:"mohamed kandil"
}
