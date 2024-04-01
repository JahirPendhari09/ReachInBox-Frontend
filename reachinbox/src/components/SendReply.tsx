import { ChevronDown, Eye, Reply, X, Zap } from 'lucide-react'
import React, { MouseEventHandler } from 'react'

interface sendReplyProps {
    handleCancel?:  MouseEventHandler<HTMLDivElement>;
    currColor:Boolean;
}
const SendReply:React.FC<sendReplyProps> = ({currColor,handleCancel}) => {
    
  return (
    <div className='flex flex-col w-full h-full '>
        <div>
            <div className={`h-10 flex justify-between px-8 py-2 text-[16px]  ${currColor ? 'bg-[#23272C]': 'bg-white'}`}>
                <p>Reply</p>
                <p onClick={handleCancel} className='cursor-pointer'><X/></p>
            </div >
            <hr className='border-t border-gray-700' />
            <div className={`text-[12px] h-10 flex pt-2 px-8 py-2 h-7   items-center gap-2`} >
                <p className='text-gray-400'>To :- </p>
                <input type="text" placeholder='' className={`${currColor? 'bg-[#141517]':"bg-white"} outline-none`} />
            </div>
            <hr className='border-t border-gray-700' />
            <div className={`text-[12px] h-10 flex pt-2 px-8 py-2   h-7  items-center gap-2`} >
               <p className='text-gray-400'>From :- </p>
                <input type="text" placeholder='' className={`${currColor? 'bg-[#141517]':"bg-white"} outline-none`} />
            </div>
            <hr className='border-t border-gray-700' />
             <div className={`text-[12px] h-10 flex pt-2 px-8 py-2  h-7 items-center gap-2`} >
                <p className='text-gray-400'>Subject :- </p>
                <input type="text" placeholder='' className={`${currColor? 'bg-[#141517]':"bg-white"} outline-none`} />
            </div>
            <hr className='border-t border-gray-700' />
            <div className={`text-[12px] p-2 text-left`}> 
                <textarea placeholder='Hello John...' className={`ml-6   h-[250px] w-[500px] outline-none ${currColor ? 'bg-[#141517]': 'bg-white'}`}/>
            </div>
        </div>
        <div className='h-[54px] 0 w-full '>
            <hr className='border-t border-gray-700 mb-2'/>
            <div className='flex text-[12px] gap-1'>
                <div className='w-[100px] h-8 bg-[#4B63DD]  flex items-center ml-4 mb-3 rounded gap-1 flex justify-center gap-2 cursor-pointer items-center'>
                    <button className='text-white'>Send</button>
                    <ChevronDown color={"white"}/>
                </div>
                <div className='w-[100px] h-8 flex items-center  mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center'>
                    <Zap className='h-4' />
                    <button >Variables</button>
                </div>
                <div className='w-[120px] h-8  flex items-center  mb-3 rounded gap-1 flex justify-center  cursor-pointer items-center'>
                    <Eye className='h-4'/>
                    <button >Preview Email</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendReply
