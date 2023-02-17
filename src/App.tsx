import './App.css';
import Nav from './Components/Nav';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { Router } from './Router'
import Home from './Components/Home';
import User from './Components/Users';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/addUser' element={<AddUser />} />
      </Routes>

      {/* <RouterProvider router={Router} /> */}
    </div>
  );
}

export default App;
