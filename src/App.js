import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigationbar } from './component/Navigationbar';
import { Footer } from './component/Footer';
import { Home } from './component/Home';
import { Result } from './component/Result';
import { About } from './component/About';
import { AddEvent } from './component/AddEvent';
import ShowEvent from './component/ShowEvent';
import ShowEventAdmin from './component/ShowEventAdmin';
import EditEvent from './component/EditEvent';
import { Registration } from './component/Registration';
import Admin from './component/Admin';
import Login from './component/Login'; // Import Login component
import AdminLogin from './component/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Navigationbar id="navbar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path='/registration' element={<Registration/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/showEvent" element={<ShowEvent />} />
        <Route path="/showEventAdmin" element={<ShowEventAdmin />} />
        <Route path="/editevent/:eventId" element={<EditEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;