import React from 'react'
import "../components/css/Offer.css";

const Sliderbody = ({image}) => {
  return (
    <div className="box">
      <div className="box-img">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Sliderbody
