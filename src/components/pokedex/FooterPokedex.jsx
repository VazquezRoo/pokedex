import React from 'react'
import { Link } from 'react-router-dom'

function FooterPokedex() {

  return (

  <div className={` h-[300px] bg-black text-white grid justify-center text-[12px] min-[600px]:text-[20px] mt-[20px]`}>
      <div className='  max-w-[1200px] grid grid-cols-2 p-2'>

        <div className='flex flex-col justify-center items-start  '>
          <h4>Vazquez Roo</h4>
          <p>Thanks for reading!</p>
          <p><i className='bx bx-envelope '></i><span className='text-[10px] min-[400px]:text-[12px]  min-[600px]:text-[20px]'> vazquez.roo93@gmail.com</span> </p>
          <p><i className='bx bx-phone' ></i> (653) 100-7177</p>
          
          <p className='pt-[30px] '>&copy; 2023 Cristian Vazquez. All rights reserved.</p>
         </div>

         <div className='grid justify-center items-center'>
          <ul className='grid gap-2'>
            <Link to={'/'} className='hover:text-purple-500'>Home</Link>
            <Link to={'/pokedex'} className='hover:text-purple-500'>Pokedex</Link>
            {/* <Link to={'/projects'} className='hover:text-purple-500'>Porjects</Link>
            <Link to={'/contact'} className='hover:text-purple-500'>Contact</Link> */}
          </ul>
         </div>
         </div>
    </div>

  )
}

export default FooterPokedex