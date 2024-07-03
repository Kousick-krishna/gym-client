import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoginList from './components/LoginList';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminReg from './components/AdminReg';
import UserReg from './components/UserReg';
import Userplatform from './components/Userplatform';
import AdminDash from './components/AdminDash';



function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/LoginList" element={<LoginList/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/UserLogin" element={<UserLogin/>}/>
      <Route path="/AdminReg" element={<AdminReg/>}/>
      <Route path="/UserReg" element={<UserReg/>}/>
      <Route path="/AdminDash" element={<AdminDash/>}/>
      <Route path="/Userplatform" element={<Userplatform/>}/>
     </Routes>
    </Router>
    </>
  );
}

export default App;
