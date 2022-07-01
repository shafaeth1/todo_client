
import './App.css';
import Navbar from './Pages/Shered/Navbar';
import { Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';
import To_Do from './Pages/Home/To_Do';
import Calender from './Pages/Home/Calender';
import Completed_task from './Pages/Home/Completed_task';




function App() {


  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed_task />} />
        <Route path="/to_do" element={<To_Do />} />
        <Route path="/calender" element={<Calender />} />



      </Routes>


    </div>
  );
}

export default App;
