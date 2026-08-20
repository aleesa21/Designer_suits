import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />

    </section>
  )
}

export default Layout