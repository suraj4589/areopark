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

const  App = () => {
   const location = useLocation();

 
   const noNavbarRoutes = ['/api/user/dashboard'];

  return (
    <>
      
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<HolidayOffer />} />
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



 // <div>
  // <Navbar/>
  //       <Home/>      
  //       <About/>
  //       <HolidayOffer/>
  //       <HotelBooking/>
  //       <SignUpForm/>
  //       <LoginForm/>
  // <Footer/>
  // </div>
// export default App;
