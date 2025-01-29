
import React, { Suspense } from 'react'
import FlightSearchForm from '../components/bookairticket/FlightSearchForm'
import WhereGoMore from '../components/Homecontainer/WhereGoMore'
import AirlinePartners from '../components/Homecontainer/AirlinePartners'
import AreoparkScene from '../components/Homecontainer/AreoparkScene'
import LoginForm from '../components/login/LoginForm'
import About from './About'
import HotelBooking from './HotelBooking'
import HolidayOffer from './HolidayOffer'
import SignupForm from '../components/signup/SignUpForm'

const LazyImage = React.lazy(() =>
  import('../components/Homecontainer/PopulerDestination'))


function Home() {
  const handleSubmit = (data) => {
    console.log('form data :', data);

  }


  return (
    <>
      <div className='mt-16 '>
        <FlightSearchForm onSubmit={handleSubmit} />
        <WhereGoMore />
        <AirlinePartners />
        <AreoparkScene />
        <Suspense fallback={<div>Loading images...</div>}>
          <LazyImage />
        </Suspense>
        <About/>
        <HolidayOffer/>
        <HotelBooking/>
        <SignupForm/>
        <LoginForm/>
      </div>
    </>
  )
}

export default Home
