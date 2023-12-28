import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component/Home';
import { Navigationbar } from './component/Navigationbar';
import { Footer } from './component/Footer';
import { Registration } from './component/Registration';
import { Login } from './component/Login';
import { About } from './component/About';
import { Event } from './component/Event';

function App() {
  return (
    <BrowserRouter>
      <Navigationbar id="navbar"></Navigationbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Footer />} />

       
      <Route path='/registration' element={<Registration/>}></Route>
      {/* <Route path='/' element={<Home/>}></Route> */}
      {/* <Route path='/services' element={<Services/>}></Route> */}
      <Route path='/about' element={<About/>}></Route>
      <Route path='/event' element={<Event/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/product' element={<Product/>}></Route> */}
    

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
