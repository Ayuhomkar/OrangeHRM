import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Avatar, Typography } from "@material-tailwind/react";



function NavBar({handleLOgOut , show , handleSideBarVisible}) {
  const [ userName , setUserName] = useState('')
  const navi = useNavigate()


  useEffect(()=>{
    // Getting UserName From LocalStorage TO Display it on NavBar
    const data = JSON.parse(localStorage.getItem('cred'));
    console.log(data);
    //Used Password As Title to NavBar because API Data Doesn't Have Password Field
    setUserName(data.password);
  },[])

  return (
    // Nav Bar Div
    <div className={`sticky top-0 h-[10vh] w-[100vw] bg-gradient-to-r from-[#fc7823] to-[#f35c17] border-b-2 shadow-sm flex flex-row items-center p-1 z-10 `}>
      <i class={`ri-menu-line text-3xl cursor-pointer text-white pl-4 ${!show ? 'block':'hidden'}`} onClick={handleSideBarVisible}></i>
        <h2 className='relative  text-white font-semibold text-lg ml-[5%]'>PIM</h2>
        <div className="flex items-center gap-4 h-[100%]  bg-white/30 p-2 rounded-full ml-[75%] mr-4">
        
        {/* Avatar From Material UI - tailwind For User Profile Badge */}
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded" className='h-full rounded-[50%] ' />
        <div>
          <Typography variant="h6" className='mr-2 text-white'>{userName || 'XYZ'}</Typography>
          <Typography variant="small" color="white" className="font-normal cursor-pointer">
            View Pofile <i className="ri-arrow-down-s-fill"></i>
          </Typography>
        </div>


      </div>
    </div>
  )
}

export default NavBar