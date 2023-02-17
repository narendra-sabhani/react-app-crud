import './App.css';
import Nav from './Components/Nav';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { Router } from './Router'
import Home from './Components/Home';
import User from './Components/Users';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import UploadDownload from './Components/UploadDownload';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/user/:id/edit' element={<EditUser />} />
        <Route path='/upload' element={<UploadDownload />} />
      </Routes>

      {/* <RouterProvider router={Router} /> */}
    </div>
  );
}

export default App;
