import React from 'react'

interface userProps {
    currColor:Boolean
}
const UserDetails:React.FC<userProps> = ({currColor}) => {
  return (
    <div className='w-full px-2  '>
    <div className={`w-full h-8 my-5 border border-gray-700 rounded ${currColor? 'bg-[#222426]':'bg-[#fff]'}`} >
        <p className='w-full text-[16px] text-left ml-3 mt-1'>Lead Details</p>
    </div>
    <div className='flex flex-col gap-5'>
        <div className='flex justify-between mx-3 text-[14px]'>
            <p>Name</p>
            <p>Orlando</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
            <p>Contact No</p>
            <p>+53 4245252354</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
            <p>Email ID</p>
            <p>orladom@gmail.com</p>
        </div>
        <div className='flex justify-between mx-3 text-[14px]'>
            <p>Linkedin</p>
            <p>linkedin.com/in/timvadde/</p>
        </div>
        <div className='flex justify-between mx-3  text-[14px]'>
            <p>Company Name</p>
            <p>Reachinbox</p>
        </div>

    </div>

    <div className={`w-full h-8 my-5 border border-gray-700 rounded ${currColor? 'bg-[#222426]':'bg-[#fff]'}`} >
        <p className='w-full text-[16px] text-left ml-3 mt-1'>Activities</p>
    </div>

  </div>
  )
}

export default UserDetails
