import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import MotionDashboard from "./components/MCAUS/MotionDashboard"
import MODDashboard from "./components/MCAUS/MODDashboard"
import VoteTest from './components/common/VoteTest';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<MODDashboard/>}></Route>
    <Route path='MotionDashboard' element={<MotionDashboard/>}></Route>
    <Route path='VoteTest' element={<VoteTest/>}></Route>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
