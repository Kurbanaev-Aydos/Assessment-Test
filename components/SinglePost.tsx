import React from 'react'
import { formatDate } from '../utils/formateDate'
import { SinglePostType } from '../types/App'

const SinglePost = ({
  id,
  status,
  title,
  date,
  handleChange,
  i,
}: SinglePostType) => {
  return (
    <div
      key={id}
      className='w-full flex pl-6 h-20 items-center justify-start border-b border-[#F5F6FA]'
    >
      <div className='w-[6.5%]'>{i}</div>
      <div className='w-[35%] break-all pr-3 overflow-hidden'>{title}</div>
      <div className='w-[30%]'>{formatDate(date)}</div>
      <div className='w-[30%]'>
        <select
          name='type'
          defaultValue={status}
          onChange={(e) => handleChange(e.target.value, id)}
          className='w-min outline-none h-4 bg-inherit rounded-lg text-[14px] border-r-[17px] border-transparent text-[#111111] font-medium'
        >
          <option value='Published'>Published</option>
          <option value='Draft'>Draft</option>
        </select>
      </div>
    </div>
  )
}

export default SinglePost
