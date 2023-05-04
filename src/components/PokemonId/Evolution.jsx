import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgPokeEvolution from './ImgPokeEvolution'

function Evolution({evolution, next, previous}) {


  const [evolutionPoke, setEvolutionPoke] = useState([])
  const [evolutionDos, setEvolutionDos] = useState([])
  const [evolutionTres, setEvolutionTres] = useState([])
  // const [currentPoke, setCurrentPoke] = useState()


  console.log(evolution)

    useEffect(()=>{

        const URL = evolution
      
        axios
        .get(URL)
        .then(res=> {

          const evolutionData = res.data.chain
          console.log(evolutionData)
          const evolutionDataDos = res.data.chain.evolves_to[0]
          console.log(evolutionDataDos)
          const evolutionDataTres = res.data.chain.evolves_to[0].evolves_to
          console.log(evolutionDataTres)

          
          setEvolutionPoke(evolutionData['species'])
          console.log(evolutionPoke)
          setEvolutionDos(evolutionDataDos['species'])
          console.log(evolutionDos)
          if(evolutionDataTres === []){
            setEvolutionTres()
          }
          else {
            setEvolutionTres(evolutionDataTres[0]['species'])
          }
          console.log(evolutionTres)
          
          
          // setEvolutionDos(evolutionData['evolves_to'])x

          // console.log(evolutionPoke)
          })
        .catch(err=> console.log(err))
      // console.log(evolutionPoke)
      
    },[evolution,next,previous])

    const url = (evolutionPoke?.url)
    console.log(url)
    // const urlDos = (evolutionPoke?.url)

    const urlDos = (evolutionDos?.url)
    console.log(urlDos)


      const urlTres = (evolutionTres?.url)
   
   

    // const urlDos = url.replace('-species','')
    // console.log(url)

  return (
    <section className='flex items-center justify-center gap-6 w-[90%] '>

    <div className='grid justify-center text-[10px]'>
       {/* <ImgPokeEvolution url={url} next={next} previous={previous} evolution={evolution}/> */}
       {evolutionPoke?.name}
    </div>


    <div className={`grid justify-center text-[10px] ${evolutionDos.name? 'opacity-100': 'opacity-0 absolute invisible'}`}>
       {/* <ImgPokeEvolution url={urlDos} next={next} previous={previous}/> */}
       {evolutionDos?.name}
    </div>
    <div className={`grid justify-center text-[10px] ${evolutionTres.name !== undefined ? 'opacity-100': 'opacity-0 absolute invisible'}`}>
       {/* <ImgPokeEvolution url={urlTres} next={next} previous={previous}/> */}
      {evolutionTres?.name}
    </div>

    </section>

  )
}

export default Evolution