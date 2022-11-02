import React from 'react'

const Sidebar = () => {
  return (
    <div className='container bg-white w-52 h-full flex justify-center items-start'>
      <div className='flex bg-neutral-100 w-[184px] h-10 rounded-lg items-center pl-4 mt-8 mx-3'>
        <img src='/color-swatch.svg' className='mr-2' alt='swatch' />
        <span className='text-sm'>Posts</span>
      </div>
    </div>
  )
}

export default Sidebar
