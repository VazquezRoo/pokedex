import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='grid justify-center items-center min-h-screen'>


      {/* Texto */}

      <div className='grid h-[50%]'>
        <h5 className='text-[40px] text-center'>404</h5>

        <h4 className='text-[35px] text-center'>PAGE NOT FOUND</h4>

        <p className='text-center'>Are you sure the website URL is correct?</p>

        <Link to= {`/pokedex`} className='mt-[30px] text-center bg-white h-[30px] w-[200px] justify-self-center rounded-md'>Go back!</Link>
      </div>


      {/* Imagen */}

      <div className='h-[50%] grid  '>
        <img src="./images/notFound.png" alt="" className='h-[100%] mx-auto' />
      </div>

    </div>
  )
}

export default NotFound 