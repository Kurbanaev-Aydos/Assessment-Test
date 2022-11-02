import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()

  return (
    <div className='bg-white w-full h-12 flex items-center'>
      <div className='w-52 pl-6 flex align-middle'>
        <img src='/logo.svg' alt='logo' />
      </div>
      <div className=''>
        {router.pathname == '/new-post' ? (
          <div className='flex'>
            <Link href={'/'}>
              <button className=' w-[28px] border border-[#DBDBE2] rounded-[4px] flex items-center justify-center mr-[18px]'>
                <img src='/Vector.svg' alt='left' />
              </button>
            </Link>
            <p className='font-normal text-lg ml-[20px] text-center'>Posts</p>
          </div>
        ) : (
          <p className='font-normal text-lg ml-[20px] text-center'>Posts</p>
        )}
      </div>
    </div>
  )
}

export default Header
