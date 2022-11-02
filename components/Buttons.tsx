import React, { useState } from 'react'
import { Post, ButtonProp } from '../types/App'

const Buttons = ({ setFilteredDate, posts }: ButtonProp) => {
  const [isAll, setIsAll] = useState(true)
  const [isDraft, setIsDraft] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setFilteredDate('All statuses')
          setIsAll(true)
          setIsDraft(false)
          setIsPublished(false)
        }}
        className={
          isAll
            ? 'h-9 w-36 bg-[#177EFF] flex justify-between items-center mr-2 rounded-lg text-[14px] text-white  pl-3 pr-2'
            : 'h-9 w-36 bg-[#F5F6FA] flex justify-between items-center mr-2 rounded-lg text-[14px] pl-3 pr-2'
        }
      >
        All statuses
        <div className='bg-[#B2C2DF] rounded-[46px] text-xs text-white px-2 py-1'>
          {posts.length}
        </div>
      </button>
      <button
        onClick={() => {
          setFilteredDate('Draft')
          setIsAll(false)
          setIsDraft(true)
          setIsPublished(false)
        }}
        className={
          isDraft
            ? 'h-9 w-36 bg-[#177EFF] flex justify-between items-center mr-2 rounded-lg text-[14px] text-white  pl-3 pr-2'
            : 'h-9 w-36 bg-[#F5F6FA] flex justify-between items-center mr-2 rounded-lg text-[14px] pl-3 pr-2'
        }
      >
        Draft
        <div className='bg-[#B2C2DF] rounded-[46px] text-xs text-white px-2 py-1'>
          {posts.filter(({ status }) => status == 'Draft').length}
        </div>
      </button>
      <button
        onClick={() => {
          setFilteredDate('Published')
          setIsAll(false)
          setIsDraft(false)
          setIsPublished(true)
        }}
        className={
          isPublished
            ? 'h-9 w-36 bg-[#177EFF] flex justify-between items-center mr-2 rounded-lg text-[14px] text-white  pl-3 pr-2'
            : 'h-9 w-36 bg-[#F5F6FA] flex justify-between items-center mr-2 rounded-lg text-[14px] pl-3 pr-2'
        }
      >
        Published
        <div className='bg-[#B2C2DF] rounded-[46px] text-xs text-white px-2 py-1'>
          {posts.filter(({ status }) => status == 'Published').length}
        </div>
      </button>
    </>
  )
}

export default Buttons
