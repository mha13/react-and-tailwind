import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import { useState } from 'react';
import TaskProvider from './TaskProvider';
import Coins from './Coins';
function App() {

  const styleApp = {
    backgroundImage: 'url("https://play.tailwindcss.com/img/beams.jpg")'
  }

  const styleApp2 = {
    backgroundImage: 'none',
    backgroundColor: '#6B7280',
  }

  const [darkmode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode(!darkmode);
    !darkmode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
  }



  return (
    //Conditional rendrening

    <div className="App" style={(darkmode ? styleApp : styleApp2)}>
      <TaskProvider>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className='flex justify-center'>
            {/* Router in React.js */}
            <NavLink to='/' className={(navData) =>
              navData.isActive ? 'm-3 text-xl2 font-bold text-orange-700 dark:text-white dark:bg-orange-600 ring-1 ring-orange-700 dark:ring-white rounded-md p-3' : 'm-3 p-3 text-xl2 font-bold text-gray-900 dark:text-black hover:text-orange-600 dark:hover:text-white hover:animate-pulse'} >
              Project</NavLink>
            <NavLink to='/donate' className={(navData) =>
              navData.isActive ? 'm-3 text-xl2 font-bold text-orange-700 dark:text-white dark:bg-orange-600 ring-1 ring-orange-700 dark:ring-white rounded-md p-3' : 'm-3 p-3 text-xl2 font-bold text-gray-900 dark:text-black hover:text-orange-600 dark:hover:text-white hover:animate-pulse'} >
              Donate</NavLink>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={() => changeTheme()} />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-700 rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-700"></div>
              <span className="ms-3 text-sm font-medium text-black-900">Background</span>
            </label>
          </div>
          <Routes>
            {/* useReducer and useState and Context API in Component1 is available */}
            <Route path='/' element={<Component1 />} />
            <Route path='/donate' element={<Component2 />} />
          </Routes>
          <Coins />
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
