import React from 'react'
import { useSearchUsersQuery } from '../redux/github/github.api'

const HomePage = () => {
  const {isLoading, isError, data} = useSearchUsersQuery('makarchuk92')

  return (
    <div>HomePage</div>
  )
}

export default HomePage