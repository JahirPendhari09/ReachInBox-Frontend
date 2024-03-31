import { ChevronDown } from 'lucide-react'
import React from 'react'

interface replyProps {
    currColor:Boolean
}

const ReplySection:React.FC<replyProps> = ({currColor}) => {
  return (
    <div  className='w-[800px] border border-gray-700 '>
        <div className='h-[70px] w-[800px] border border-gray-700 py-3 pl-4 flex justify-between'>
            <div className='text-left w-full'>
                <h1 className='text-[14px]'>Orlando</h1>
                <p className='text-[12px] text-gray-400'>orladom@gmail.com</p>
            </div>
            <div className='flex justify-end mr-6  gap-4 h-8 my-2 w-full text-right'>
                <div className={`flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor? 'bg-[#222426]':'bg-[#e1e7ee]'}`} >
                    <p className= 'w-3 h-3 rounded-3xl bg-yellow-600'></p>
                    <p className='text-[12px]'>Meeting Completed</p>
                    <ChevronDown/>
                </div>
                <div className={` flex justify-center p-2 items-center border border-gray-700 rounded ${currColor? 'bg-[#222426]':'bg-[#e1e7ee]'}`} >
                    <p className='text-[12px]'>Move</p>
                    <ChevronDown className='h-4'/>
                </div>
                <div className={` flex justify-center gap-2 p-2 items-center border border-gray-700 rounded ${currColor? 'bg-[#222426]':'bg-[#e1e7ee]'}`} >
                    <p className='mb-2'>...</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReplySection
