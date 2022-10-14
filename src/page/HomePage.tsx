import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useSearchUsersQuery } from '../redux/github/github.api'

const HomePage = () => {

  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  useEffect(() => {
    console.log(debounced)
  }, [debounced])

  const { isLoading, isError, data } = useSearchUsersQuery('makarchuk')


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
        <div className='absolute top-[45px] left-0 right-0 max-h-[200px] shadow-md bg-white'>

        </div>
      </div>
    </div>
  )
}

export default HomePage