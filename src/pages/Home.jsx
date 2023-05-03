import React from 'react'
import Footer from '../components/Footer'
import {  setNameTrainer } from '../store/slices/nameTrainer.slices'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {

    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch (setNameTrainer(e.target.nameTrainer.value))     
        navigate("/pokedex")
    }


  return (
    <section className='min-h-screen grid grid-rows-[1fr_auto] min-[1280px]:w-[1280px] bg-[url("/images/fondo2.jpg")]'>
        {/* Parte superior */}
        <section className=' self-center'>
            <article className='flex flex-col items-center gap-3 p-3'>
                <div className=' justify-self-center' >
                    <img src="/images/pokedex.png" alt="" />
                </div>
                <div className=' grid justify-items-center'>
                <h2 className='text-red-800 min-[600px]:text-[30px]'>Hello trainer</h2>
                <p className='text-green-800 min-[600px]:text-[30px]'>Give me your name start!</p>
                <form  className='pt-[20px]' onSubmit={handleSubmit}>
                <div className='flex relative w-[240px] ml-[-20px]'>
                <input id='nameTrainer' placeholder='Your name' className=' border-[1px] border-black border-r-0 w-[240px] h-[30px] font-[20px] text-center drop-shadow-lg text-[20px] ' />
                <button className='flex  border-[1px] border-l-0 border-black  bg-red-600 right-0'><i className='bx bx-search-alt text-[25px] text-white mx-auto'></i></button>
                </div>
                </form>
                </div>
            </article>
        </section>
        {/* Footer */}
        <Footer/>
    </section>
  )
}

export default Home