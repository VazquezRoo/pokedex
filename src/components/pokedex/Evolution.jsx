import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImgPokeEvolution from './ImgPokeEvolution'

function Evolution({evolution, next, previous}) {


  const [evolutionPoke, setEvolutionPoke] = useState()
  const [evolutionDos, setEvolutionDos] = useState()
  const [evolutionTres, setEvolutionTres] = useState()
  // const [currentPoke, setCurrentPoke] = useState()


  console.log(evolution)

    useEffect(()=>{

        const URL = evolution

        axios
        .get(URL)
        .then(res=> {
          const evolutionData = res.data.chain
          const evolutionDataDos = res.data.chain.evolves_to
          const evolutionDataTres = res.data.chain.evolves_to[0].evolves_to

          console.log('qui cambie')
          
          setEvolutionPoke(evolutionData['species'])
          setEvolutionDos(evolutionDataDos)
          setEvolutionTres(evolutionDataTres[0]['species'])
          // setEvolutionDos(evolutionData['evolves_to'])x
          console.log(evolutionPoke)
          console.log(evolutionDos)
          console.log(evolutionTres)
          // console.log(evolutionPoke)
})
        .catch(err=> console.log(err))
      // console.log(evolutionPoke)
      
    },[evolution])

    const url = (evolutionPoke?.url)
    console.log(url)
    // const urlDos = (evolutionPoke?.url)


    const urlTres = (evolutionTres?.url)
    console.log(urlTres)

    // const urlDos = url.replace('-species','')
    // console.log(url)

  return (
    <section className='flex items-center justify-center gap-1 '>

    <div className=' opacity-100'>
      <ImgPokeEvolution url={url}/>
    </div>

    

    {/* <div className='flex gap-2 items-center'>
    <div >{'>'}</div>
    <div className='flex flex-col'>
      {
        evolutionDos?.map((name)=>
        // <ImgPokeEvolution url={name['species'].url}/>

        <div className={``}>{name['species'].name}</div>
        )
      }
      </div>
    </div> */}

      
    
    <div className={`${evolutionTres?.name ? 'opacity-100': 'opacity-0 invisible'} flex gap-2`}>
    <div className={`${evolutionTres?.name ? 'opacity-100': 'opacity-0 invisible'}`}>{'>'}</div>
    <ImgPokeEvolution url={urlTres}/></div>

    </section>
  )
}

export default Evolution