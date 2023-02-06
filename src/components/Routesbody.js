import React from 'react';
import "../components/css/Search.css"

const Routesbody = ({title,image,route}) => {
  return (
    <div className='routesbody'>
      <div className='imgg'><img src={image} alt="" /></div>
      <div className='para2'>
        <h1>{title}</h1>
        <div className="route-part">
        <div>From:</div>
        <p> {route}</p>
        </div>
      </div>
    </div>
  )
}

export default Routesbody
