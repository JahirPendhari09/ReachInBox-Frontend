import { Mail } from 'lucide-react'
import React from 'react'

interface userProps {
    currColor: Boolean
}
const UserDetails: React.FC<userProps> = ({ currColor }) => {
    return (
        <div className='w-full px-2  '>
            <div className={`w-full h-8 my-5 border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`} >
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

            <div className={`w-full h-8 my-5 border border-gray-700 rounded ${currColor ? 'bg-[#222426]' : 'bg-[#fff]'}`} >
                <p className='w-full text-[16px] text-left ml-3 mt-1'>Activities</p>
                <div className="p-2 sm:p-5 font-sans font-semibold space-y-5">
                    <div className={`${currColor  ? 'text-white' : 'text-black'} text-left text-lg `}>Campaign Name</div>
                    <div className="text-xs flex gap-2">
                        <div className={`${currColor? 'border-gray-300' : 'border-gray-700'} border-r pr-2`}><span className="font-normal">3</span> Steps</div>
                        <div><span className="font-normal">8</span> Days in Sequence</div>
                    </div>

                    <div className="w-full space-y-6 ">
                        <div className="flex gap-4">
                            <div className={`${currColor ? 'bg-[#58595b]':'bg-[#dbe4ef]'}  rounded-3xl h-8 w-8 flex justify-center items-center`}>
                              <Mail color={currColor?"white":"black"} className='w-4'/>
                            </div>
                            <div >
                                <div className={` ${currColor  ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 1: Email</div>
                                <div className="flex items-center gap-2">
                                    <Mail color={currColor?"white":"black"} className='w-3'/>
                                    <div className={`${currColor  ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Sent <span className="font-normal">5th, March</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className={`${currColor ? 'bg-[#58595b]':'bg-[#dbe4ef]'}  rounded-3xl h-8 w-8 flex justify-center items-center`}>
                            <Mail color={currColor?"white":"black"} className='w-4'/>
                            </div>

                            <div >
                                <div className={`${currColor ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 2: Email</div>
                                <div className="flex items-center gap-2">
                                    <Mail color={currColor?"white":"black"} className='w-3'/>
                                    <div className={`${currColor ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Opened <span className="font-normal">1st, March</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className={`${currColor ? 'bg-[#58595b]':'bg-[#dbe4ef]'} rounded-3xl md h-8 w-8 flex justify-center items-center`}>
                                <Mail color={currColor?"white":"black"} className='w-4'/>
                            </div>

                            <div >
                                <div className={` ${currColor  ? 'text-white' : 'text-black'} text-sm mb-1`}>Step 3: Email</div>
                                <div className="flex items-center gap-2">
                                   <Mail color={currColor?"white":"black"} className='w-3'/>
                                    <div className={`${currColor ? 'text-gray-400' : 'text-black'} font-inter font-normal text-xs`}>Opened <span className="font-normal">1st, March</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserDetails
