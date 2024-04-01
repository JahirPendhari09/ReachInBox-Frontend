import React, { useEffect, useState } from 'react'
import Slidebar from '../components/Slidebar'
import Theme from '../components/Theme';
import Workspace from '../components/Workspace';
import { useLocation } from 'react-router';
import { jwtDecode } from "jwt-decode";
import { ChevronDown } from 'lucide-react';
import { getMailList, getMailMasseges } from '../actions/actions';
import InboxEmailCard from '../components/InboxEmailCard';
import InboxHeader from '../components/InboxHeader';
import LoadingPage from '../components/LoadingPage';
import SearchBar from '../components/SearchBar';
import UserDetails from '../components/UserDetails';
import ReplySection from '../components/ReplySection';

const Desktop = () => {
    const [currColor, setCurrColor] = useState<Boolean>(true);
    const [data , setData ]= useState([]);
    const [singleMail , setSingleMail ]= useState({})

    const location = useLocation();
    const [ showEmailDesktop,setShowEmailDesktop]= useState(0)

    let token:string =localStorage.getItem("reachinbox-auth") || takeToken();

    const fetchData =()=>{
        getMailList().then(res => {
           setData(res);
            if (res.length > 0) {
               setSingleMail(res[0]);
                const id: number = res[0]?.threadId;
                if (id !== undefined)  return getMailMasseges(id);
                else  console.log("error id not found")
                
            } else  console.log("Email not Found")
            
        }).then(messages => setSingleMail(messages))
        .catch(error => console.error('Error:', error));
    }
    
    useEffect(()=>{
      
      token = location.search.split("?token=")?.join("") ;
      if(token)
      {
        let ParseData = jwtDecode(token);
        localStorage.setItem("reachinbox-auth",JSON.stringify(token));
        localStorage.setItem("reachinbox-auth-firstname",JSON.stringify((ParseData as any).user.firstName));
        localStorage.setItem("reachinbox-auth-lastname",JSON.stringify((ParseData as any).user.lastName));
        localStorage.setItem("reachinbox-auth-email",JSON.stringify((ParseData as any).user.email));
      }

      fetchData()

    },[token]);
  
    function takeToken(): string {
        try {
            const token = localStorage.getItem("reachinbox-auth");
            return token ? JSON.parse(token) : ""; 
        } catch (e) {
            console.log("Error:", e);
            return ""; 
        }
    }

    useEffect(()=>{},[singleMail,showEmailDesktop])
   
    const handleChangeEmail = (id: number) => {
        getMailMasseges(id).then(messages => setSingleMail(messages))
        .catch(error => console.error('Error:', error));
    }

    const handleChange=(index:number)=> setShowEmailDesktop(index)

    let firstName = localStorage.getItem('reachinbox-auth-firstname');
    firstName = firstName ? JSON.parse(firstName):''
    let lastName = localStorage.getItem('reachinbox-auth-lastname') 
    lastName = lastName ? JSON.parse(lastName):''
    const username = firstName ? (firstName[0] + (lastName ? lastName[0] : '')) : '';
    return (
        <div className={`w-full h-full m-auto max-w-[1440px] ${currColor ? "bg-black" : "bg-white"} ${currColor ? "text-white" : "text-black"} h-10 flex`}>
            <div className='w-[56px] h-screen '>
                <Slidebar currColor={currColor} username = {username} showEmailDesktop={showEmailDesktop} handleChange={handleChange} />
            </div>
            <div  className='w-full max-w-[1383]'>
                <div className={` h-[64px] flex justify-between py-4 pl-8 ${currColor ? "bg-[#1F1F1F]" : "bg-white"} border ${currColor ? "border-gray-700":"border-gray-300" } `}>
                    <p className={`w-full text-left text-xl ${currColor ? "text-white-900" : "text-black-900"} `}>Onebox</p>
                    <div className='w-[210px] h-8 mr-5 flex justify-center items-center gap-5'>
                      <Theme currColor={currColor} onClick={()=> setCurrColor(!currColor)} />
                      <Workspace/>
                    </div>
                </div>
                {
                showEmailDesktop != 5? <LoadingPage/>
                : <div className={`flex border ${currColor ? "border-gray-700" : "border-gray-300"} `}>
                    <div className='w-[275px] ml-5  pr-3'>
                        <div className='flex justify-between mt-4 items-center'>
                           <InboxHeader currColor={currColor}/>
                        </div>
                        <p className='text-left  text-[14px] mt-2.5'>25/25 <span className=' text-[#7F7F7F]'>Inboxes selected</span></p>
                        <div className=' mt-2 h-11 '>
                           <SearchBar currColor ={currColor}/>
                        </div>
                        <div className='flex justify-between  text-[14px]'>
                            <div className='flex items-center gap-2 '>
                                <p className={`text-blue-500 w-8 h-7 pt-0.5 rounded-2xl ${ currColor? 'bg-[#25262B]':'bg-[#e1e7ee]' }`}>26</p>
                                <p>New Replies</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p>Newest</p>
                                <ChevronDown/>
                            </div>
                        </div>
                        <hr className='mt-2.5'/>
                        <div className=' text-left'>
                            {
                                data.length >0 && data.map((item:any) =>{
                                    return <div key={item.id}>
                                        <InboxEmailCard currColor = {currColor} {...item} handleChangeEmail={handleChangeEmail}/>
                                        <hr />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <ReplySection currColor={currColor} singleMail = {singleMail}/>
                    <UserDetails currColor={currColor}/>
                </div>
                }
            </div>
        </div>
    );
}

export default Desktop 
