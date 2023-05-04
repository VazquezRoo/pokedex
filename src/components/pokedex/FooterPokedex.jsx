import React from 'react'

function FooterPokedex() {

  return (

    <div className='h-[290px] min-w-screen bg-black mt-[40px] grid   justify-items-center justify-center items-end pb-8'>

          <div className='w-[40%] grid  text-yellow-200 '>

            <img src="/images/construccion.png" alt="" />

            <div className='grid justify-center'>
              <h3 className='text-[20px]'>ZONE UNDER</h3>
              <p className='text-[30px]'>CONSTRUCTION</p>
            </div>

          </div>

          <div className=' min-[550px]:flex min-[550px]:gap-10 min-[750px]:justify-center min-[750px]:gap-[100px]  min-[550px]:w-[80%] min-[550px]:align-start min-[550px]:justify-items-end '>

                <div className='text-white flex gap-2 items-center '>
                  <i class='bx bx-envelope'></i>
                  <p>vazquez.roo93@gmail.com</p>
                </div>

                <div className='text-white flex gap-2 items-center'>
                  <i class='bx bx-phone' ></i>
                  <p>(653) 100-7177</p>
                </div>
          </div>
      
   </div>
     

  )
}

export default FooterPokedex