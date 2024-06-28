import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import { useState } from 'react';
function App() {

  const styleApp = {
    backgroundImage: 'url("https://play.tailwindcss.com/img/beams.jpg")'
  }

  const styleApp2 = {
    backgroundImage: 'none',
    backgroundColor: '#eee',
  }

  const [backgroundPic, setBackgroundPic] = useState(true);

  return (
    //Conditional rendrening
    <div className="App" style={(backgroundPic ? styleApp : styleApp2)}>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className='flex justify-center'>
          {/* Router in React.js */}
          <NavLink to='/' className={(navData) => navData.isActive ? 'm-3 text-xl2 font-bold text-orange-700 ring-1 ring-orange-700 rounded-md p-3' : 'm-3 p-3 text-xl2 font-bold text-gray-900 hover:text-orange-600 hover:animate-pulse'} >Project</NavLink>
          <NavLink to='/donate' className={(navData) => navData.isActive ? 'm-3 text-xl2 font-bold text-orange-700  ring-1 ring-orange-700 rounded-md p-3' : 'm-3 p-3 text-xl2 font-bold text-gray-900 hover:text-orange-600 hover:animate-pulse'}>Donate</NavLink>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onClick={() => setBackgroundPic(!backgroundPic)} />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-700"></div>
            <span class="ms-3 text-sm font-medium text-black-900">Background</span>
          </label>
        </div>
        <Routes>
          {/* useReducer and useState and Context API in Component1 is available */}
          <Route path='/' element={<Component1 />} />
          <Route path='/donate' element={<Component2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
