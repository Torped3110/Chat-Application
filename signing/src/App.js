import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Registration from './pages/Registration';
import User from './pages/user';
import Page from './pages/main_page';
import Trail from './pages/trail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/Trail' element={<Trail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
