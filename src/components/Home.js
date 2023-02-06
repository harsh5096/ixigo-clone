import React from 'react'
import "../components/css/Home.css";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Home = () => {
  return (
    <div className='home'>

      <div className="snow"></div>
      
      <div className="mainnfirst">

      <div className="booking">
       <FlightTakeoffIcon className="i"/> 
      <h1>Flight Booking</h1>
      </div>
       <div className="state">
        {/* <h1> Uttarakhand</h1> */}
        {/* <p>India</p> */}
       </div>
      </div>

<div className='middle-box'>

<div className='snow2'>
  <li className='oneway'>ONE WAY</li>
  <li>ROUND TRIP</li>
  <li>EXPLORE</li>
</div>

      <div className="snowform">

        <div className="inputs">
        <div className='input-heading'>From</div>
        <input type="text" placeholder='Enter city or airport' />
        </div>
        <i class="fa fa-exchange"></i>
        <div className="inputs">
        <div className='input-heading'>To</div>
        <input type="text" placeholder='Enter city or airport' />
        </div>
        <div className="inputs">
        <div className='input-heading'> Departure</div>
        <input type="date"  />
        </div>
        <div className="inputs">
        <div className='input-heading'> Return</div>
        <input type="text" placeholder='Return' />
        </div>
        <div className="inputs">
        <div className='input-heading'>Travells|class</div>
        <input type="text" placeholder='1 Passenger,Economy' />
        </div>
        <button>Search</button>
      </div>
    
      </div>
      <img src="./images/offerimg.png" alt="" />
      <div className="snow1">
      {/* <img src="./images/offerimg.png" alt="" /> */}
      </div> 
        
    </div>
  )
}

export default Home
