import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
   <div className='flex flex-col items-center space-y-2'>
    <div className='spinner'></div>
    <h2>Loading...</h2>
   </div>
  )
}

export default Spinner