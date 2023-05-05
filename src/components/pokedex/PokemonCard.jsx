import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoaderCard from './LoaderCard'

function PokemonCard({pokemonURL}) {


    const borderByType = {
        normal: "border-neutral-600",
        fighting: "border-amber-700",
        flying: "border-blue-400",
        poison: "border-violet-500",
        ground: "border-yellow-600",
        rock: "border-yellow-800",
        bug: "border-lime-600",
        ghost: "border-purple-800",
        steel: "border-zinc-600",
        fire: "border-orange-600",
        water: "border-blue-500",
        grass: "border-green-600",
        electric: "border-yellow-400",
        psychic: "border-pink-400",
        ice: "border-cyan-600",
        dragon: "border-violet-800",
        dark: "border-stone-800",
        fairy: "border-pink-400",
        
    }

    const backgroundByType ={
        normal: "bg-gradient-to-b from-neutral-500 to-black",
        fighting: "bg-gradient-to-b from-amber-600 to-black",
        flying: "bg-gradient-to-b from-blue-300 to-black",
        poison: "bg-gradient-to-b from-violet-400 to-black",
        ground: "bg-gradient-to-b from-yellow-500 to-black",
        rock: "bg-gradient-to-b from-yellow-700 to-black",
        bug: "bg-gradient-to-b from-lime-500 to-black",
        ghost: "bg-gradient-to-b from-purple-700 to-black",
        steel: "bg-gradient-to-b from-zinc-500 to-black",
        fire: "bg-gradient-to-b from-orange-500 to-black ",
        water: "bg-gradient-to-b from-blue-400 to-black",
        grass: "bg-gradient-to-b from-green-500 to-black" ,
        electric: "bg-gradient-to-b from-yellow-300 to-black",
        psychic: "bg-gradient-to-b from-pink-300 to-black",
        ice: "bg-gradient-to-b from-cyan-500 to-black",
        dragon: "bg-gradient-to-b from-violet-700 to-black",
        dark: "bg-gradient-to-b from-stone-700 to-black",
        fairy: "bg-gradient-to-b from-pink-300 to-black",
    }

    //arreglo para cada tipo de pokemon

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
        dark: "bg-stone-800",
        fairy: "bg-pink-400",
        
    }

    const text ={
        normal: "text-neutral-500",
        fighting: "text-amber-700",
        flying: "text-blue-400",
        poison: "text-violet-500",
        ground: "text-yellow-600",
        rock: "text-yellow-800",
        bug: "text-lime-600",
        ghost: "text-purple-800",
        steel: "text-zinc-600",
        fire: "text-orange-600",
        water: "text-blue-500",
        grass: "text-green-600",
        electric: "text-yellow-400",
        psychic: "text-pink-400",
        ice: "text-cyan-600",
        dragon: "text-violet-800",
        dark: "text-stone-800",
        fairy: "text-pink-400",
    }


    const [pokemon, setPokemon] = useState() //Estado para cambiar pokemon a mostrar
    const [loader, setLoader] = useState(false)
   

    // Efecto 1 -- trar informacion del pokemon

    useEffect(()=>{ 
        setLoader(true)
        const newURL = pokemonURL.replace('-species','')
        axios.get(newURL)
        .then(res=> setPokemon(res.data))
        .catch(err=> console.log(err))
        .finally(()=>setLoader(false)) 
        
        console.log(pokemon
            )
    },[])

    
    //Logica para tomar solo dos tipos

    const types = pokemon?.types.slice(0,2).map(type=> type.type.name) 


    //Mayuscula primera letra3

    const  pokemonName = pokemon?.name[0].toUpperCase() + pokemon?.name.substring(1)


    //volver no. pokedes 0001

    const numberPokedex =  pokemon?.id.toString().padStart(4,'0')


    // const [opacity, setOpacity] = useState(false)

   

  return (
    <>
        {
            loader && <LoaderCard/>
        }

    <Link id='padreImgPokemon' to= {`/pokedex/${pokemon?.id}`} className={`text-center border-8  ${borderByType[pokemon?.types[0].type.name]} ${backgroundByType[pokemon?.types[0].type.name]} rounded-[80px] w-[280px] bg-slate-800/90 ${numberPokedex > 1010 && 'opacity-100 invisible absolute'} hover:opacity-80`}>

        {/* seccion superior */}

        <section className='relative h-[150px] grid'>

     
             <h3 className=' mt-2 text-[25px] w-[260px]'>{pokemonName}</h3>

             <p className='absolute mt-[35px] ml-[100px] text-black/50'>N.° {numberPokedex}</p>
            
            {/* imagen card */}

            <img id='imgPokemon'  src={pokemon?.sprites.other["official-artwork"].front_default} alt=""  className={`h-[180px]  ml-[50px] absolute mt-[55px] hover:h-[200px] hover:ml-[40px] hover:mt-[45px] transition-[2000] z-30`}/>

            {/* fondo opaco */}

             {/* <div className={`absolute w-[265px] h-[400px] bg-black rounded-[70px] ${opacity ? 'opacity-50' : 'opacity-0' }`}></div> */}
        
        </section>

        {/* seccion inferior */}
        <section className='bg-white h-[250px] grid align-bottom rounded-b-[70px]'>

            <div className='grid justify-center pt-2'>
            

            {/* tipo */}
            <div className='flex w-[150px]  pt-[70px]'>

            {
                types?.map((type)=> 
                    <div key={type} className='mx-auto'>
                        {         
                        types.length === 1 ?        
                            <div className={`${typeBackGround[type]} w-[80px] mx-auto rounded-xl`}>

                                <h4 >{type[0].toUpperCase() + type.substring(1)}</h4>

                            </div>:

                            <div className={`${typeBackGround[type]} w-[80px] mx-auto ${types[0] === type ?'rounded-l-xl': 'rounded-r-xl'}`}>

                                <h4 >{type[0].toUpperCase() + type.substring(1)}</h4>

                            </div>
                        }
                    </div>
                  )
            }
            </div>
              
            </div>

            {/* stats */}

            <section className='grid grid-cols-2 gap-2 p-2 text-[13px]'>
                {
                    pokemon?.stats.map((stat)=>(
                        <div key={stat.stat.name}>
                            
                            <h5>{stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}</h5>

                            <span><b className={`${text[[pokemon?.types[0].type.name]]}`} >{stat.base_stat}</b></span>
                            
                        </div>
                    ))
                }
            </section>

        </section>
    </Link>

    </>
  )
}

export default PokemonCard