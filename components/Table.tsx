import React, { useState } from 'react'
import { TableProp, Post } from '../types/App'
import { useDispatch } from 'react-redux'
import { updatePost } from '../redux/creator'
import { SinglePost } from './'

const Table = ({
  filteredData,
  searchValue,
  currentPosts,
  indexOfFirst,
  posts,
}: TableProp) => {
  const [, setChangeStatus] = useState('Draft')

  const dispatch = useDispatch()

  const handleChange = (statusChanged: string, id: string) => {
    setChangeStatus(statusChanged)
    posts.map((post: Post) => {
      if (post.id === id) {
        post.status = statusChanged
      }
    })
    dispatch(updatePost(posts))
    window.location.reload()
  }

  return (
    <>
      <div className=' flex w-full h-10 pl-6 border-b border-[#F5F6FA]'>
        <div className='flex items-center justify-start font-medium text-[13px] text-[#667281] w-[6.5%]'>
          ID
        </div>
        <div className='flex items-center justify-start font-medium text-[13px] text-[#667281] w-[35%]'>
          Title
        </div>
        <div className='flex items-center justify-start font-medium text-[13px] text-[#667281] w-[30%]'>
          Time
        </div>
        <div className='flex items-center justify-start font-medium text-[13px] text-[#667281] w-[30%]'>
          Status
        </div>
      </div>
      <div>
        {searchValue
          ? posts.map((post: Post, index) => {
              const list: Post[] = []
              if (post.title.includes(searchValue.toLowerCase().trim())) {
                list.push(post)
                return list.map(({ title, date, id, status }: Post) => {
                  indexOfFirst += 1
                  return (
                    <SinglePost
                      date={date}
                      status={status}
                      title={title}
                      id={id}
                      handleChange={handleChange}
                      i={(index += 1)}
                      key={id}
                    />
                  )
                })
              }
            })
          : filteredData == 'All statuses'
          ? currentPosts.map(({ status, date, title, id }: Post, index) => (
              <SinglePost
                date={date}
                status={status}
                title={title}
                id={id}
                handleChange={handleChange}
                i={(index += 1)}
                key={id}
              />
            ))
          : filteredData == 'Draft' || filteredData == 'Published'
          ? posts.map(({ status, date, title, id }: Post, index) => {
              if (filteredData === status) {
                return (
                  <SinglePost
                    date={date}
                    status={status}
                    title={title}
                    id={id}
                    handleChange={handleChange}
                    i={(index += 1)}
                    key={id}
                  />
                )
              }
            })
          : currentPosts.map(({ status, date, title, id }: Post, index) => {
              indexOfFirst += 1

              return (
                <SinglePost
                  date={date}
                  status={status}
                  title={title}
                  id={id}
                  handleChange={handleChange}
                  i={indexOfFirst}
                  key={id}
                />
              )
            })}
      </div>
    </>
  )
}

export default Table
