import React from 'react'
import { PaginationType } from '../types/App'

const Pagination = ({
  firstIndex,
  lastIndex,
  changeNumberPerPage,
  posts,
  postsPerPage,
  paginate,
  previousPage,
  nextPage,
}: PaginationType) => {
  const pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <div>
        <select
          className='w-16 h-9 rounded font-normal bg-[#F5F6FA] pl-3 text-sm border-r-[8px] border-[#f5f6fa]'
          defaultValue={'4'}
          onChange={(e) => changeNumberPerPage(e.target.value)}
        >
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
        </select>
        <span className='text-[13px] text-[#667281] normal ml-3'>{`Showing ${
          posts.length ? firstIndex + 1 : 0
        } - ${lastIndex > posts.length ? posts.length : lastIndex} of ${
          posts.length
        }`}</span>
      </div>
      <div className='flex items-center justify-center gap-1'>
        <button
          onClick={previousPage}
          className='rounded bg-[#F5F6FA] h-8 w-8 flex items-center justify-center'
        >
          <img src='/arrowLeft.svg' alt='left' />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className='rounded h-8 w-8 bg-[#F5F6FA]  text-[#667281] text-sm'
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          className='rounded bg-[#F5F6FA] h-8 w-8 flex items-center justify-center'
        >
          <img src='/arrowRight.svg' alt='right' />
        </button>
      </div>
    </>
  )
}

export default Pagination
