import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgPokeEvolution from './ImgPokeEvolution'
import { Link } from 'react-router-dom'

function Evolution({evolution, next, previous}) {


  const [evolutionPoke, setEvolutionPoke] = useState([])
  const [evolutionDos, setEvolutionDos] = useState([])
  const [evolutionTres, setEvolutionTres] = useState([])
  const [evolutionI, setEvolutionI] = useState(false)

  console.log(evolution)

    useEffect(()=>{

      setEvolutionI(false)

        const URL = evolution
      
        axios
        .get(URL)
        .then(res=> {

          const evolutionData = res.data.chain
          console.log(evolutionData.evolves_to)

          const evolutionDataDos = res.data.chain.evolves_to[0].species
          console.log(evolutionDataDos.name)

          const evolutionDataTres = res.data.chain.evolves_to[0].evolves_to
          console.log(evolutionDataTres)

       

          
          if(evolutionData.evolves_to.length){
            setEvolutionPoke(evolutionData['species'])
            setEvolutionI(true)

          }
          

          

          

            setEvolutionDos(evolutionDataDos)
            

          console.log(evolutionDos)

          if(!evolutionDataTres.length){
            setEvolutionTres([])
          }
          else {
            setEvolutionTres(evolutionDataTres[0]['species'])

          }
          console.log(evolutionTres)
          })

        .catch(err=> console.log(err))
      
    },[evolution,next,previous])

    const url = (evolutionPoke?.url)
    console.log(url)

    const urlDos = (evolutionDos?.url)
    console.log(urlDos)


    const urlTres = (evolutionTres?.url)
    console.log(urlTres)
   
   
  return (
    <>
    {
      evolutionI ?
       <section className='flex  w-[100%] '>

      <div className='flex items-center justify-center  justify-items-center  text-[10px]  '>
        

         <div className='grid  justify-center items-center justify-items-center'>

            <ImgPokeEvolution url={url} next={next} previous={previous} evolution={evolution}  className={``}/>     
            <p className='text-center text-[15px] min-[600px]:text-[20px] self-end'>{evolutionPoke?.name}</p>

         </div>
  
      </div>
  
  
      <div className={` flex items-center justify-center text-[10px] ${evolutionDos.name? 'opacity-100': 'opacity-0 absolute invisible'}`}>
  
         <p className=' text-[15px] min-[600px]:text-[20px] pl-2 text-black'>{'>'}</p>
  
  
        <div className='grid  justify-center items-center justify-items-center'>
            <ImgPokeEvolution url={urlDos} next={next} previous={previous}/>
            <p className=' text-[15px] text-center min-[600px]:text-[20px] self-end '>{evolutionDos?.name}</p>
  
         </div>
  
      </div>
  
      <div className={`flex items-center mimpl-4  justify-center text-[10px] ${evolutionTres.name? 'opacity-100': 'opacity-0 absolute invisible'}`}>
  
        <p className='text-[20px] pl-2  text-black'>{'>'}</p>
    
          <div className='grid  justify-center items-center'>
                
              <ImgPokeEvolution url={urlTres} next={next} previous={previous} className='items-center justify-center self-center justify-self-center' />
              <p className=' text-[15px] text-center min-[600px]:text-[20px] self-end '>{evolutionTres?.name}</p>
        
          </div>
  
      </div>
  
      </section>:
      <div>Este pokemon no evoluciona</div>
    }
    
   
    </>

  )
}

export default Evolution