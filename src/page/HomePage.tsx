import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useSearchUsersQuery } from '../redux/github/github.api'

const HomePage = () => {

  const [search, setSearch] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const debounced = useDebounce(search)

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  })

  useEffect(() => {
    setDropDown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])




  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-700'>Something error</p>}
      <div className='relative w-[550px]'>
        <input
          type="text"
          className='border py-4 px-4 w-full h-[42px] mb-3'
          placeholder='Search...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dropDown && <ul className='absolute top-[45px] left-0 right-0 max-h-[200px] overflow-x-scroll shadow-md bg-white'>
          {isLoading && <p className='text-center'>Loading...</p>}
          {data?.map(u => (
            <li
              className='py-2 px-4 hover:bg-slate-500 hover:text-white transition-colors cursor-pointer'
              key={u.id}
            >{u.login}
            </li>
          ))}
        </ul>}
      </div>
    </div>
  )
}

export default HomePage