import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addPost } from '../redux/creator'
import { useAppDispatch } from '../redux/hooks'
import MaxDate from '../utils/MaxDate'

const Create: React.FC = () => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')

  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (title.trim().length && date.trim().length && status.trim().length) {
      dispatch(addPost({ title, date, status, id: uuidv4() }))
      setTitle('')
      setDate('')
      setStatus('')
    }
  }

  return (
    <div className='bg-white h-160 ml-5 rounded-lg h-full w-full'>
      <form className='flex flex-col mt-[19px] ml-6 text-base'>
        <>
          <p className='mb-[18px]'>Post information</p>
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-[356px] h-10 bg-[#F5F6FA] rounded-lg  mb-2 pl-3 text-[14px] text-[#667281]'
          />
          <select
            name='type'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-[356px] h-10 bg-[#F5F6FA] rounded-lg  mb-2 pl-3 text-[14px] border-r-[17px] border-transparent text-[#667281]'
          >
            <option value='Status' hidden>
              Status
            </option>
            <option value='Published'>Published</option>
            <option value='Draft'>Draft</option>
          </select>
          <input
            type='datetime-local'
            placeholder='Time'
            value={date}
            max={MaxDate()}
            onChange={(e) => setDate(e.target.value)}
            className='w-[356px] h-10 bg-[#F5F6FA] rounded-lg border-r-[14px] border-transparent mb-[42px] pl-3 text-[14px] text-[#667281]'
          />
          <button
            onClick={handleClick}
            type='button'
            className='w-[163px] h-9 bg-[#177EFF] rounded-lg text-white text-sm '
            disabled={!title || !date || !status}
          >
            Submit
          </button>
        </>
      </form>
    </div>
  )
}

export default Create
