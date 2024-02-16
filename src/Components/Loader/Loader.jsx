import React from 'react'
import Loading from "../../assets/loader.svg"
import "./Loader.css"
const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={Loading} alt="" />

    </div>
  )
}

export default Loader