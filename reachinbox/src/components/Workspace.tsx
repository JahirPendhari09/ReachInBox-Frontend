import { ChevronDown } from 'lucide-react'
import React from 'react'

const Workspace = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <p className='text-[12px]'>Tim's Workspace </p>
        <span> <ChevronDown /></span>
    </div>
  )
}

export default Workspace
