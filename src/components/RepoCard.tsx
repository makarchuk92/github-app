import React from 'react'
import { IRepo } from '../models/models'

export const RepoCard = ({repo}: {repo: IRepo}) => {
  return (
    <div className='border py-3 px-5 rounded mb-2 hover: shadow-md hover:bg-gray-100 transition-all'>
        <a href={repo.html_url} target='_blank' >
            <h2 className='font-bold text-lg'>{repo.full_name}</h2>
            <p className='text-sm'>
                Watcers: <span className='mr-2 font-bold'>{repo.watchers}</span>
                Forks: <span className='mr-2 font-bold'>{repo.forks}</span>
            </p>
            <p className='font-thin text-sm'>{repo?.description}</p>
        </a>
    </div>
  )
}

