import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgPokeEvolution from './ImgPokeEvolution'
import { Link } from 'react-router-dom'

function Evolution({evolution, next, previous}) {


  const [evolutionPoke, setEvolutionPoke] = useState([])
  const [evolutionDos, setEvolutionDos] = useState([])
  const [evolutionTres, setEvolutionTres] = useState([])
  const [evolutionI, setEvolutionI] = useState(false)


    useEffect(()=>{

      

        if(evolution){
          setEvolutionI(false)
        const URL = evolution
      
        axios
        .get(URL)
        .then(res=> {

          const evolutionData = res.data.chain

          const evolutionDataDos = res.data.chain.evolves_to[0].species

          const evolutionDataTres = res.data.chain.evolves_to[0].evolves_to

              
          if(evolutionData.evolves_to.length){
            setEvolutionPoke(evolutionData['species'])
            setEvolutionI(true)
          }
          setEvolutionDos(evolutionDataDos)
            
         if(!evolutionDataTres.length){
            setEvolutionTres([])
          }
          else {
            setEvolutionTres(evolutionDataTres[0]['species'])

          }
          // console.log(evolutionTres)
          })

        .catch(err=> console.log(err))
        }
    },[evolution,next,previous])

 
   
   
  return (
    <>
    {
      evolutionI ?
       <section className='flex  w-[100%] '>

      <div className='flex items-center justify-center  justify-items-center  text-[10px] hover:bg-gray-200  '>
        

         <div className='grid  justify-center items-center justify-items-center'>

            <ImgPokeEvolution  id='pokeUno'htmlFor='pokeUno'  url={evolutionPoke?.url} next={next} previous={previous} evolution={evolution} />     
            <p className='text-center text-[15px] min-[600px]:text-[20px] self-end' >{evolutionPoke?.name[0].toUpperCase() + (evolutionPoke?.name).substring(1)}</p>

         </div>
  
      </div>
  
  

      <div className={` flex items-center justify-center text-[10px] ${evolutionDos.name? 'opacity-100': 'opacity-0 absolute invisible '}`}>
  
         <p className=' text-[15px] min-[600px]:text-[20px] pl-2 text-black'>{'>'}</p>
  
  
        <div className='grid  justify-center items-center justify-items-center  hover:bg-gray-200 '>
            <ImgPokeEvolution id='pokeDos'  url={evolutionDos?.url} next={next} previous={previous}/>
            <p className=' text-[15px] text-center min-[600px]:text-[20px] self-end' htmlFor='pokeDos'>{evolutionDos?.name[0].toUpperCase() + (evolutionDos?.name).substring(1)}</p>
  
         </div>
  
      </div>
  
      
    
          
                
              {
                evolutionTres.length !== 0 && 
                <div className={`flex items-center mimpl-4  justify-center text-[10px] ${evolutionTres.name? 'opacity-100': 'opacity-0 absolute invisible'} hover:bg-gray-200  `}>
  
        <p className='text-[20px] pl-2  text-black'>{'>'}</p>
                <div className='grid  justify-center items-center'>
                <ImgPokeEvolution id='pokeTres' url={evolutionTres?.url} next={next} previous={previous} className='items-center justify-center self-center justify-self-center' />
                <p className=' text-[15px] text-center min-[600px]:text-[20px] self-end ' htmlFor='pokeTres'>{evolutionTres?.name[0].toUpperCase() + (evolutionTres?.name).substring(1)}</p>
                </div>
                </div>
              }
        
          
  
     
  
      </section>:
      <div>This Pokémon does not evolve</div>
    }
    
   
    </>

  )
}

export default Evolution