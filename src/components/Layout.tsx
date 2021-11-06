import React from  'react'
import Navbar from '../pages/Nav'
import Footer from './container'

const Layout = ( {children}) => {
  return(
<>
<Navbar />
    {children}
    <Footer />
  </>
  )
}

export default Layout