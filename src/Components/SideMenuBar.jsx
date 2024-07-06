import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import orange from '../assets/orange.jpg'
import { Input } from '@material-tailwind/react'




function SideMenuBar({isOpen , handleSideBarVisible}) {

    const HideMenu = ()=>{
        handleSideBarVisible();
    }



    return (
        <div className={`sidebar  bg-white h-[90vh] m-0 relative top-[0vh]  rounded-r-[10%] drop-shadow-2xl duration-700 ease-in-out  ${isOpen ? 'translate-x-0 w-[20%]':' translate-x-[-100%] w-[0%] overflow-x-hidden'}`}>
            <i class={`${isOpen ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'}  absolute top-[20%] right-[-5%] text-4xl bg-orange-400 rounded-[50%] h-[5%] text-white flex flex-row items-center justify-center cursor-pointer`} id='hidebtn' onClick={HideMenu}></i>
            <div className="sideBarWrapper p-[20px] text-gray-700">
                <div className="sideBarMenu mb-[20%] flex flex-row items-center ">
                    <img src={orange} alt="alaa" className='w-[25%] rounded-[50%] scale-105' />
                    <h1 className='relative text-2xl font-semibold text-gray-800'>Orange<span className='text-green-600'>HRM</span></h1>
                </div>


                <div className="sideBarMenu mb-[10px]">
                    {/* <h3 className="sideBarTitle text-md text-gray-400 font-semibold "> */}
                    <div className="sideBarTitle text-md text-gray-400 font-semibold ">
                        <div className="w-[100%] flex flex-row items-center justify-between">
                        <i class="ri-search-line font-bold text-xl mr-2"></i>
                            <Input
                                placeholder='Search'
                                className='w-[80%]'
                            />
                        </div>
                    </div>

                </div>
                <hr />
                <div className="sideBarMenu m-[10px]">
                    <ul className="sideBarList p-[5px]">
                        <Link to="/admin" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0]  hover:scale-105 duration-100  hover:text-orange-950 focus:text-orange-950">
                        <i class="ri-admin-line text-xl mr-2"></i>  Admin
                        </Link>

                        <Link to="/" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-team-line text-xl mr-2"></i> PIM
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                          <i class="ri-calendar-schedule-line text-xl mr-2 "></i>  Leave
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-time-line text-xl mr-2"></i>  Time
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-information-2-line text-xl mr-2"></i>    My Info
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-home-4-line text-xl mr-2"></i>    DashBoard
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-contacts-book-3-line text-xl mr-2"></i>    Directory
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-tools-line text-xl mr-2"></i>    Maintenance
                        </Link>

                        <Link to="/draftInvoice" className="sideBarListItem p-[5px] cursor-pointer flex flex-row items-center rounded-[10px] hover:bg-orange-200  hover:scale-105 duration-100  hover:text-orange-950 focus:bg-gradient-to-r from-[#fc7823] to-[#f7bba0] focus:text-orange-950">
                        <i class="ri-feedback-line text-xl mr-2"></i>    Buzz
                        </Link>

                    </ul>
                </div>



            </div>
        </div>
    )
}

export default SideMenuBar