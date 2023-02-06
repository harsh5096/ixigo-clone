import React from 'react'
import Searchbody from './Searchbody'
import "../components/css/Search.css"
import Routesbody from './Routesbody'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = () => {
  return (
    <div className='third-part'>
    <div className='search'>
        <div> <h1>Book Cheap flight with ixigo</h1> </div>
        <div className="search-input">
            <div><h1>Flying Form</h1></div>
            <input type="text" placeholder='Enter city or airport'/>
        </div>
        <div className="search-option">
            <div className="li-item">
                <li>Africa</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>North America</li>
                <li>Oceania</li>
                <li>South America</li>
                <li>India</li>
                <li>United Arab Emirates</li>
                <li>Canada</li>
            </div>
            <div className="li-item">
                <li>United States</li>
                <li>United kingdom</li>
                <li>Thailand</li>
                <li>Saudi Arabia</li>
                <li>Australia</li>
                <li>Singapore</li>
                <li>Italy</li>
            </div>
            </div>
            <hr />

            <div className='arrow'>
            <div className='para'>Popularity</div>
          <ArrowDropDownIcon/>
        </div>

            <div className="search-card">
<Searchbody image="./images/jaipur.png" title="jaipur" from="DEL" to="JAI" rs="1349"/>
<Searchbody image="./images/Leh.png" title="Leh" from="DEL" to="IXL" rs="1750"/>
<Searchbody image="./images/Bareilly.png" title="Bareilly" from="DEL" to="BEK" rs="1890"/>
<Searchbody image="./images/Shimla.png" title="Shimla" from="DEL" to="SLV" rs="2100"/>
<Searchbody image="./images/Ahemdabad.png" title="Ahemdabad" from="DEL" to="AMD" rs="2350"/>
<Searchbody image="./images/Lucknow.png" title="Lucknow" from="DEL" to="LKO" rs="2550"/>
            </div>
            <button>SHOW MORE DESTINATION</button>
    </div>


<div className="routes">
    <h1>Popular Flight Routes</h1>
    <div className="routes-part1">
<Routesbody title="Mumbai Flights" image="./images/mumbai.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Delhi Flights" image="./images/delhi.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Kolkata Flights" image="./images/kolkata.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Chennai Flights" image="./images/chennai.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Hyderabad Flights" image="./images/hyderabad.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Ahemdabad Flights" image="./images/hemdabad.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Bangalore Flights" image="./images/bangarole.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Pune Flights" image="./images/pune.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
<Routesbody title="Goa Flights" image="./images/goa.png" route=" Goa, Delhi, Bangalore, Ahmedabad"/>
    </div>
</div>


<div className="faqs">

    <h1>Flight Booking FAQs</h1>

    <div className="detail">
    <p>Why is flight ticket booking the cheapest on ixigo?</p>
    <div><i class="fa fa-chevron-down"></i></div>
    </div>
    <div className="detail">
    <p>How to book cheap flight tickets ?</p>
    <i class="fa fa-chevron-down"></i>
    </div>
    <div className="detail">
    <p>How can I avail domestic flight offers on ixigo?</p>
    <i class="fa fa-chevron-down"></i>
    </div>
    <div className="detail">
    <p>What are the advantages of booking flight tickets with ixigo?</p>
    <i class="fa fa-chevron-down"></i>
    </div>
    <div className="detail">
    <p>How can I make a flight booking on ixigo?</p>
    <i class="fa fa-chevron-down"></i>
    </div>
    <div className="detail-last ">
    <p>How can I cancel flight ticket booking?</p>
    <i class="fa fa-chevron-down"></i>
    </div>

</div>

    </div>



  )
}

export default Search