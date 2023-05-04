import React from 'react'

function Footer() {
  return (
    <section className='relative'>

        <div className='  border-t-4 flex min-[400px]:grid  border-black h-[60px] bg-red-600 items-center '>
            <div className='absolute  mt-[55px] w-[200px] min-[450px]:w-[250px] min-[1050px]:w-[300px]  '>
                <img src="/images/pokemon-logo.png" alt="" />
            </div>
        </div>
        
        <div className=' h-16 bg-white border-b-4 border-t-8 border-black'></div>
       
        <div className='absolute bottom-0  right-0 mr-[15px] flex items-center w-16 aspect-square bg-white border-[8px] border-black rounded-full -mt-[90px]'>
          
        </div>
        
    </section>
  )
}

export default Footer