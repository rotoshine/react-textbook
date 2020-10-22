import './Layout.scss'
import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
