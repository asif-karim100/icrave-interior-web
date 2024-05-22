import React from 'react'


import Head from './components/Head'
import { Outlet } from 'react-router'

 const Home = () => {
  return (
    
    <>
    <Head></Head>
    
    <Outlet></Outlet>
   
    
    
    </>
  )
}
export default Home
