import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../../store/slices/nameTrainer.slices'

function Header() {

  const dispatch = useDispatch()
    const navigate =  useNavigate()


    const logOut = () =>{
      dispatch (setNameTrainer(''))     
        navigate("/")
    }


  return (
    <section className='relative min-w-screen'>
      {/* <div className='bg-gray-500 w-screen h-[20px]'></div> */}
        <div className='  border-t-4 flex min-[400px]:grid  border-black h-[60px] bg-red-600 items-center '>
            <div className='absolute min-[1400px]:justify-self-center   mt-[55px] w-[200px] min-[450px]:w-[250px] min-[1050px]:w-[300px]  '>
                <img src="/images/pokemon-logo.png" alt="" />
            </div>
        </div> 
        
          <div className=' h-16 bg-white border-b-4 border-t-8 border-black'></div> 
          {/* <div className='h-16 aspect-square rounded-full bg-white border-[8px] border-black absolute -bottom-4 right-0 -translate-x-1/2 after:content-[""] after:h-14 after:aspect-square after:rounded-full after:bg-gray-700 after:absolute after:border-[8px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-30'></div>  */}
          
        <div className='absolute min-[1400px]:mr-[300px] right-0 mr-[15px] flex items-center w-16 aspect-square bg-gray-200 border-[8px] border-black rounded-full -mt-[90px]'>
        
        <abbr onClick={logOut} title='Log out' className='text-black/50 z-50 hover:text-[35px] hover:ml-[6px] hover:text-red-600 absolute mt-[8px] text-[30px] ml-[8px] cursor-pointer'>
        <i class='bx bx-log-out-circle'></i>
        </abbr>
        </div>
        
        
    </section>
  )
}

export default Header