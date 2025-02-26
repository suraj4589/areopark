import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LoginForm from './components/login/LoginForm';
import SignUpForm from './components/signup/SignUpForm';
import Home from './pages/Home';
import About from './pages/About';
import HolidayOffer from './pages/HolidayOffer';
import HotelBooking from './pages/HotelBooking';
import Dashboard from './components/dashboard/DashBoard';

function App() {
  const location = useLocation();

 
  const noNavbarRoutes = ['/api/user/dashboard'];

  return (
    <>
      
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<HolidayOffer />} />
        <Route path="/hotel" element={<HotelBooking />} />
        <Route path="/api/user/dashboard" element={<Dashboard />}/>
      </Routes>
      {!noNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
