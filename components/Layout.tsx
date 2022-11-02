import React from 'react'
import { Header, Sidebar } from './'
import { LayoutProp } from '../types/App'

const Layout = ({ children }: LayoutProp) => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex border-t-[2px] border-neutral-100 p-0 wrapper h-full'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default Layout
