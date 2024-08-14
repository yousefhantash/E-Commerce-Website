import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Users from './Pages/Dashboard/Users';
import HomePage from './Pages/Website/HomePage';


function App() {
  return (

  <div>
        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/users' element={<Users/>}/>

        </Routes>
        


  </div>

);}

export default App;
