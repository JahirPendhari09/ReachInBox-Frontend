import React from 'react'

interface SingleProps {
    currColor:Boolean
}
const SingleMail:React.FC<SingleProps> = ({currColor}) => {
  return (
    <div className='mr-4  border border-gray-700 p-3 text-[14px] flex flex-col gap-2.5 text-left'> 
    <div className='flex justify-between'>
       <p>New Product Launch</p>
       <p className='text-[#AEAEAE]'>20 june 2022 : 9:16AM</p>
    </div>
    <p className='text-[#AEAEAE]'>from : jeanne@icloud.com cc : lennon.j@mail.com</p>
    <p className='text-[#AEAEAE]'>to : lennon.j@mail.com</p>
    <p className={`${currColor ? 'text-[#E1E0E0]':'text-[#2a2626]'} w-[500px]`}>Hi FIRST_NAME, <br/><br/> I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>

 </div>
  )
}

export default SingleMail
