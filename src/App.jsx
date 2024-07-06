import { useState , useEffect} from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import NavBar from './Components/NavBar';
import SideMenuBar from './Components/SideMenuBar';
import AddEmployee from './Components/AddEmployee';
import DashBoard from './Components/DashBoard';
import axios from 'axios';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isSideBarOpen , setIsSideBarOpen] = useState(true);
  const [ user , setUser] = useState('')
  const [ employeeList , setEmployeeList] = useState()
  const [loginError, setLoginError] = useState('');

  // Getting All Registered Users Data From API
  useEffect(() => {
    async function getData() {
      const config = {
        headers: {
          Authorization: `Bearer 4450fbf547113c49c6e1811520d4eaf0421312b18ce0347818d5d89c2ee6a015`,
        },
      };
      try {
        const res = await axios.get('https://gorest.co.in/public/v2/users/', config);
        setEmployeeList(res.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        // Handle potential errors gracefully (e.g., display a generic error message)
      }
    }
    getData();
  }, []);


  // Checking If UserName & Password Matched With Database
  const handleLogin = async (username, password) => {
    setUser(username);
    setLoginError(''); // Clear any previous error message
    let isValidLogin = false;
    if (username && password && employeeList.length > 0) {
      await employeeList.map((obj) => {
        if( (obj.email === username && obj.name === password) || (username === 'admin' && password === 'admin') ){
          setIsLogedIn(true);
          isValidLogin = true;
        } 
      });
      console.log(isValidLogin)
      if (isValidLogin) {
        setIsLogedIn(true);
        console.log('====> ', username, password);
        //Used Password As Title to NavBar because API Data Doesn't Have Password Field
        localStorage.setItem('cred',JSON.stringify({password}))
      } else {
        setLoginError('Invalid username or password');
        alert('Wrong Credentials') // Set specific error message
      }
    } else {
      setLoginError('Please enter both username and password'); // Informative error message
    }
  };

  // SideBar Toggle Functions
  const handleSideBarVisible = () =>{
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
       <>
      {isLogedIn ? (
        <>
          <NavBar handleSideBarVisible={handleSideBarVisible} show={isSideBarOpen}/>
          <div className="flex flex-row items-center h-fit  w-[100vw] ">
            <SideMenuBar isOpen={isSideBarOpen} handleSideBarVisible={handleSideBarVisible}/>
            <Routes>
            <Route path="/" element={<DashBoard isOpen={isSideBarOpen} userLoggedIn={user}/>} />
              <Route path="/addEmp" element={<AddEmployee isOpen={isSideBarOpen} />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  )
}

export default App
