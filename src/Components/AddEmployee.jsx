import React, { useState } from 'react'
import userIcon from '../assets/user.svg';



function AddEmployee({ isOpen }) {

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [createLoginDetails, setCreateLoginDetails] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      middleName,
      lastName,
      employeeId,
      createLoginDetails,
      photo,
    });
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

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
          <div tabIndex={0} role="button" className="btn m-1 text-gray-500 focus:bg-orange-100 focus:text-orange-800 focus-within:bg-orange-100 focus-within:text-orange-800">Add Employee </div>
        </div>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1 text-gray-500 focus:bg-orange-100 focus:text-orange-800">Reports</div>
        </div>
      </div>

      <div className='relative w-[100%] h-[100%] flex flex-row items-center justify-center'>
        <div className="bg-white rounded-md shadow-md p-6 w-[85%]">
          <h2 className="text-xl font-bold mb-4">Add Employee</h2>
          <hr />
          <div className='relative w-[100%] '>
            <form onSubmit={handleSubmit} className="space-y-4 w-[100%] h-[100%] flex flex-row flex-wrap justify-between items-start">
              <div className='w-[30%]  h-[100%]'>
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design flex flex-col items-center justify-center">
                    <img src={userIcon} alt="Upload" className='w-[50%] cursor-pointer'/>
                    <p><span className="browse-button"> Accepets .Jpg , .Png , .gif up to 1mb . reccomemded dim 2:200px * 200px </span></p>
                  </div>
                  <input id="file" type="file" className='hidden' />
                </label>
              </div>
              <div className='relative w-[70%] m-0 h-[100%]'>
                <div>
                  <label htmlFor="employeeFullName" className="block text-gray-700 text-sm font-bold mb-2">
                    Employee Full Name*
                  </label>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      id="firstName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      id="middleName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Middle Name"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <input
                      type="text"
                      id="lastName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="employeeId" className="block text-gray-700 text-sm font-bold mb-2">
                    Employee Id
                  </label>
                  <input
                    type="text"
                    id="employeeId"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Employee Id"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="createLoginDetails"
                    className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                    checked={createLoginDetails}
                    onChange={() => setCreateLoginDetails(!createLoginDetails)}
                  />
                  <label htmlFor="createLoginDetails" className="ml-2 text-gray-700">
                    Create Login Details
                  </label>
                </div>
                <hr />
                <div className="flex justify-end mt-4">
                
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>


    </div>
  )
}

export default AddEmployee