import React from 'react'
import "../components/css/Search.css"

const Searchbody = ({image,title,from,to,rs}) => {
  return (
    <div className='Searchbody'>
        <img src={image} alt="" />
        <div className='seaarch-info'>
            <div className="heading">
                <h1>{title}</h1>
                <p>
                {to}<i class="fa fa-arrow-right"></i> {from}
                </p>
            </div>
            <div className="heading2">
                <h1>from ₹{rs}</h1> 
               <p>28 FEB 2019</p>
            </div>
        </div>
    </div>
  )
}

export default Searchbody