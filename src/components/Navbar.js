import React from 'react'
import "../components/css/Navbar.css";
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GroupsIcon from '@mui/icons-material/Groups';

const navbar = () => {
  return (
    <div>

    <div className="navbar">


      <div className="logo">
        <img src="./images/logo.jpg" alt="" />
      </div>
      <div className="middlepart">
        <div className="icon icon-active">
 <FlightIcon className="i"/>
<div className="heading1">flight</div>
        </div>
        <div className="icon">
        <DirectionsRailwayIcon className="i"/>
<div className="heading1">Trains</div>
        </div>
        <div className="icon">
        <DirectionsBusFilledIcon className="i"/>
<div className="heading1">Buses</div>
        </div>
        <div className="icon">
        <HotelIcon className="i"/>
<div className="heading1">Hotels</div>
        </div>
        <div className="icon">
        <SaveIcon className="i"/>
<div className="heading1">Visa</div>
        </div>
         <div className="icon">
         <LocalOfferIcon className="i"/>
<div className="heading1">Group Booking</div>
        </div>
      </div>

      <div className="lastpart">
      <div className="icon">
      < GroupsIcon className="i"/>
<div className="heading1">Offers</div>
        </div>
      <div className="icon">
      <SettingsPhoneIcon className="i"/>
<div className="heading1">Customer Service</div>
        </div>
      <div className="icon">
      <PersonIcon className="i"/>
<div className="heading1">Login/signup</div>
        </div>
      </div>

    </div>

    </div>

    
  )
}

export default navbar
