import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Attacks({move}) {

    const [damage, setDamage] = useState()

    useEffect(()=>{
        const URL = `https://pokeapi.co/api/v2/move/${move}`
        axios
        .get(URL)
        .then(res=> setDamage(res.data))
        .catch(err=> console.log(err))
    },[]) 
    

    const typeBackGround = {
        normal: "bg-neutral-500",
        fighting: "bg-amber-700",
        flying: "bg-blue-400",
        poison: "bg-violet-500",
        ground: "bg-yellow-600",
        rock: "bg-yellow-800",
        bug: "bg-lime-600",
        ghost: "bg-purple-800",
        steel: "bg-zinc-600",
        fire: "bg-orange-600",
        water: "bg-blue-500",
        grass: "bg-green-600",
        electric: "bg-yellow-400",
        psychic: "bg-pink-400",
        ice: "bg-cyan-600",
        dragon: "bg-violet-800",
        dark: "bg-stone-600",
        fairy: "bg-pink-400",
        
    }

    const damageClass = {
      status: ' bg-gray-400 ' ,
      physical: 'bg-pink-200',
      special: ' bg-purple-400'
       }

  return (
    <section className='flex h-[40px]'>
      <div className='w-[50%] min-[1000px]:w-[60%] flex'>
    <div className='w-[100%] min-[1000px]:w-[60%] text-center overflow-hidden border-r-2 border-black/20' >{move[0].toUpperCase() + move.substring(1)}</div>

    <div className={` flex items-center justify-center opacity-0 invisible absolute min-[1000px]:opacity-100  min-[1000px]:relative min-[1000px]:visible min-[1000px]:w-[20%] text-center  border-r-2 border-black  `}>{damage?.accuracy?damage?.accuracy: '-' }</div>
            
            <div className='flex items-center justify-center opacity-0 invisible absolute min-[1000px]:opacity-100  min-[1000px]:relative min-[1000px]:visible  min-[1000px]:w-[20%] text-center  border-r-2 border-black ' >{damage?.power? damage?.power: '-'}</div>


      </div>


    <div className='w-[50%] min-[1000px]:w-[40%] flex justify-center'>
   
    <div className={`w-[70%] min-[550px]:w-[50%]  text-center flex items-center justify-center`} ><p className={`${typeBackGround[damage?.type.name]} w-[100px]`}>{damage?.type.name[0].toUpperCase() + damage?.type.name.substring(1)}</p></div>


    <div className={`w-[50%] border-l-2 border-black/20 opacity-0 invisible absolute min-[550px]:opacity-100  min-[550px]:relative min-[550px]:visible text-center grid items-center justify-center`} ><p className={`${damageClass[damage?.damage_class.name]} w-[100px]`}>{damage?.damage_class.name[0].toUpperCase() + damage?.damage_class.name.substring(1)}</p></div>
      
    </div>
    </section>
  )
}

export default Attacks