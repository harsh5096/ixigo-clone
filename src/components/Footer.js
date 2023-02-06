import React from 'react'
import "../components/css/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>

    <div className="footer-first">
      <div className="footer-para">
        <h1>Planning your next trip?</h1>
        <p>Subscribe to our newsletter. Get the latest travel trends & deals!</p>
      </div>
      <div className="footer-input">
        <div className="inputsection">
          <h1>Email</h1>
       <input type="text" placeholder="Enter email id" />
          <button>SUBCRIBE</button>
        </div>  
      </div>
    </div>

<div className="second-part">
<div className="footer-navbar">
<li className="li-items">BOOK FLIGHTS</li>
<li>POPULAR FLIGHT ROUTES</li>
<li>TOP FLIGHT ROUTES</li>
<li>TRENDING FLIGHT ROUTES</li>
<li>AIRLINES</li>
<li>POPULAR AIRLINES ROUTES</li>
<li>INFO</li>
</div>
<div className="second-part1">
<h1>Flight Ticket Booking</h1>
<p>ixigo has a database of all flights and airlines in the world with its user-friendly interface that makes it easy to search and make flight booking. Earn ixigo money on every flight booking. Redeem ixigo money on future bookings to get cheaper flight tickets.</p>
<div className="footer-head">
<h2>Cheap Flight Ticket</h2>
<div className="more-icon">
<h1>MORE</h1>
<i class="fa fa-sort-down"></i>
</div>
</div>
<div className="footerdetail">
<div className='li-items'>
<li className="about">ABOUT US</li>
<li>INVERSTOR RELATION</li>
<li>CSR</li>
<li>MOBILE</li>
<li>PRIVACY</li>
<li>TERMS OF USE</li>
<li>CAREERS</li>
<li>CUSTOMER SERVICE</li>
</div>
<div className="icon">
<i class="fa fa-facebook"></i>
<i class="fa fa-twitter"></i>
<i class="fa fa-youtube"></i>
</div>
</div>
</div>
</div>
<div className="last-part">
<p>© 2023 Le Travenues Technology Ltd. India. All brands are trademarks of their respective owners.</p>
</div>
  </div>

  )
}

export default Footer