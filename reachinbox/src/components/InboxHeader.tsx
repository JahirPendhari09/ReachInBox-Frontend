import { ChevronDown, RotateCw } from 'lucide-react'
import React, { useEffect } from 'react'
import { resetMail } from '../actions/actions'
import { useNavigate } from 'react-router'

interface headerProps {
    currColor:Boolean
}

const InboxHeader:React.FC<headerProps> = ({currColor}) => {
    const navigate =useNavigate()
    let token:string | null ;


    useEffect(()=>{
         token = localStorage.getItem("reachinbox-auth");
         token = token ? JSON.parse(token) : ""; 
    },[])

    const handleReset = ()=>{
        resetMail(token).then((res)=> navigate("/"))
    }
    return (<>
    <div className=' w-[160px] flex gap-1 items-center'>
       <h1 className='text-[20px] text-[#4285F4] text-left'>All Inbox(s)</h1>
        <ChevronDown color="#4285F4" className='cursor-pointer'/>
    </div>
    <div className={`w-8 h-8 ${ currColor? 'bg-[#25262B]':'bg-[#e1e7ee]' } rounded flex justify-between items-center`}>
        <RotateCw className='w-5 h-5 ml-1.5 cursor-pointer' onClick={handleReset}/>
    </div>
    </>
    
    )
}

export default InboxHeader
