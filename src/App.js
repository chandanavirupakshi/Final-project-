import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Compoents/Contact';
import Home from './Compoents/Home';
import Jobs from './Compoents/Jobs';
import NavBar from './Compoents/NavBar';
import ApplyJob from './Compoents/ApplyJob';
import Footer from './Compoents/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <NavBar/>
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path = "/applyjob/:id" element={<ApplyJob/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </div>
    </div>
    {/* <div className='fixed-bottom'></div> */}
    </BrowserRouter>
    
  );
}

export default App;
