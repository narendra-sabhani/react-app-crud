import './App.css';
import DrawerAppBar from './Components/DrawerAppBar';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router'

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
