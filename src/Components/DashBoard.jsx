import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Switch } from "@material-tailwind/react";
import userImg from '../assets/user.png'

function DashBoard({ isOpen, userLoggedIn }) {

    const navi = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const goToAddEmp = () => {
        console.log(userLoggedIn)
        if (userLoggedIn === 'admin') {
            navi('/addEmp')
        }
        else {
            alert('You are not authorized to add employee')
        }
    }


// Used Conditional Rendering according to SideBar Menue

    return (
        <div className={`featured flex flex-col justify-start bg-white h-[90vh] ${isOpen ? '  w-[80%]' : '  w-[100%]'}`}>
            <div className='relative w-[100%] bg-gray-200 flex flex-row items-center justify-start gap-[4%] pl-20'>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 focus:bg-orange-100 focus:text-orange-800 text-gray-500">Click <i className='ri-arrow-down-s-line'></i></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className=''><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 text-gray-500 focus:bg-orange-100 focus:text-orange-800 ">Employee List </div>
                </div>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 text-gray-500 focus:bg-orange-100 focus:text-orange-800" onClick={goToAddEmp}>Add Employee </div>
                </div>

                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1 text-gray-500 focus:bg-orange-100 focus:text-orange-800">Reports</div>
                </div>
            </div>

            <div className="flex">
                {/* Left sidebar  Code*/}
                <div className="w-1/4 bg-gray-100 p-4 h-[100%] ">
                    <div className="mb-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2">
                        <img src={userImg} title="user icons" alt='aca'/>
                        </div>
                        <h2 className="text-center font-semibold">Chahal Vadalmiya</h2>
                    </div>
                    <nav>
                        <ul className="space-y-2 ">
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Personal Details'); }}>Personal Details</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Contact Details'); }}>Contact Details</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Emergency Details'); }}>Emergency Contacts</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Dependents'); }}>Dependents</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Immigration'); }}>Immigration</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Job Details'); }}>Job</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]' onClick={(e) => { setSelectedOption('Salary'); }}>Salary</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]'>Report-to</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]'>Qualifications</Link></li>
                            <li className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus-within::bg-gray-400 p-2 focus-within::rounded-2xl'><Link className='hover:bg-gray-400 hover:rounded-2xl cursor-pointer focus:bg-gray-400 p-2 focus:rounded-2xl w-[100%]'>Memberships</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Main content */}
                {/* Personal Details */}
                {selectedOption === 'Personal Details' ? <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">{selectedOption || ''}</h1>
                    <form className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Employee Full Name*</label>
                            <input type="text" placeholder="Chahal" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                            <input type="text" placeholder="Vadalmiya" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" placeholder="Vadalmiya" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Employee Id</label>
                            <input type="text" value="0004" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Other Id</label>
                            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div></div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Driver's License Number</label>
                            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">License Expiry Date</label>
                            <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>

                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nationality</label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Indian</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Single</option>
                            </select>
                        </div>
                        <div></div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" value="2001-11-27" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <div className="mt-2 space-x-4">
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="male" className="form-radio" />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="radio" name="gender" value="female" className="form-radio" checked />
                                    <span className="ml-2">Female</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div> : <div></div>}

                {/* Contact Details Page Code  */}
                {selectedOption === 'Contact Details' ? <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">{selectedOption || ''}</h1>
                    <h2 className="text-2xl font-semibold mb-6"> Address</h2>
                    <hr />
                    <form className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street 1</label>
                            <input type="text" placeholder="" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Street 2</label>
                            <input type="text" placeholder="" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" placeholder="Pune" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State / Province</label>
                            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Zip / PostCode</label>
                            <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>India</option>
                            </select>
                        </div>
                        <h1 className="text-2xl font-semibold mb-6">Telephone</h1>

                        <div></div>
                        <div></div>
                        <hr />
                        <div></div>
                        <div></div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Home</label>
                            <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Mobile</label>
                            <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Work</label>
                            <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <h1 className="text-2xl font-semibold mb-6">Email</h1>

                        <div></div>
                        <div></div>
                        <hr />
                        <div></div>
                        <div></div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Work Email</label>
                            <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                    </form>
                    
                </div> : <div></div>}


                {/* Job Details Page Code */}
                {selectedOption === 'Job Details' ? <div className="w-3/4 p-6">
                    <h1 className="text-2xl font-semibold mb-6">{selectedOption || ''}</h1>
                    <hr />

                    <form className="grid grid-cols-3 gap-8 mt-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Joined Date</label>
                            <input type="date" placeholder="" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Title </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Developer</option>
                                <option>Developer II</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Specification</label>
                            <input type="text" placeholder="Not Defined" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Category </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Developer</option>
                                <option>Developer II</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Sub Unit </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Developer</option>
                                <option>Developer II</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>India</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Employment Status </label>
                            <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option>Developer</option>
                                <option>Developer II</option>
                            </select>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div>
                            {/* <label className="block text-sm font-medium text-gray-700">Include Employment Contact Details  </label> */}
                            <label class="inline-flex items-center cursor-pointer">
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Employment Contact Details</span>
                                <input type="checkbox" value="" class="sr-only peer"/>
                                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                   
                            </label>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <button className='bg-green-400 rounded-xl p-2 w-[50%] '>Save</button>
                    </form>
                    <div className='absolute bottom-3  text-xl'>Employye Termination / Activation <span className='bg-red-200 text-red-950 p-2 rounded-2xl cursor-pointer '>Terminate Employee</span></div>
                </div> : <div></div>}
            </div>

        </div>
    );
}

export default DashBoard