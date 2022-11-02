import React, { useEffect, useState } from 'react'
import { Table, Pagination, Buttons } from './'
import Link from 'next/link'

const Main = () => {
  const [filteredData, setFilteredDate] = useState('')
  const [posts, setPosts] = useState([])
  const [searchValue, setSearchvValue] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const post = localStorage.getItem('posts')
      if (typeof post === 'string') {
        setPosts(JSON.parse(post))
      }
    }
  }, [])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changeNumberPerPage = (str: string) => {
    const value = parseInt(str)
    setPostsPerPage(value)
  }

  return (
    <div className='bg-white w-full h-full rounded-lg  overflow-auto scrollbar-hide pt-2 flex justify-between flex-col'>
      <div className='overflow-auto h-full'>
        <div className='flex w-full justify-between pl-[24px] re pt-2'>
          <div className='h-9 rounded-lg flex justify-between items-center relative'>
            <input
              placeholder='Search'
              className='rounded-lg h-[36px] w-[432px] bg-[#F5F6FA] pl-[12px] text-[13px]'
              value={searchValue}
              onChange={(e) => setSearchvValue(e.target.value)}
            />
            <img
              src='/search.svg'
              className='absolute mr-2 w-[15px] h-[15px] right-[10.5px]'
              alt='Search Icon'
            />
          </div>
          <Link href={'/new-post'}>
            <button className='w-[163px] h-[36px] bg-[#177EFF] rounded-lg text-white mr-6 text-[13px]'>
              Create Post
            </button>
          </Link>
        </div>
        <div className='flex pt-[15px] ml-6'>
          <Buttons posts={posts} setFilteredDate={setFilteredDate} />
        </div>
        <div className='w-full xl:max-h-[520px] lg:max-h-[340px] md:max-h-[320px] mt-[8px]'>
          <Table
            indexOfFirst={indexOfFirstPost}
            currentPosts={currentPosts}
            searchValue={searchValue}
            filteredData={filteredData}
            posts={posts}
          />
        </div>
      </div>

      <div className='w-full h-auto flex items-center justify-between px-6 mt-8 mb-6'>
        <Pagination
          firstIndex={indexOfFirstPost}
          lastIndex={indexOfLastPost}
          changeNumberPerPage={changeNumberPerPage}
          nextPage={nextPage}
          previousPage={previousPage}
          postsPerPage={postsPerPage}
          posts={posts}
          paginate={paginate}
          currentPosts={currentPosts}
        />
      </div>
    </div>
  )
}

export default Main
