import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonCard from '../components/pokedex/PokemonCard'
import { current } from '@reduxjs/toolkit'
import FooterPokedex from '../components/pokedex/FooterPokedex'
import Loader from '../components/pokedex/Loader'

function Pokedex() {

    const nameTrainer = useSelector(store=> store.nameTrainer)



    const [pokemons, setPokemons] = useState([])  //Estado para mostrar pokemons
    const [pokemonName, setPokemonName] = useState('')  //Estado para mostra por nombre
    const [types, setTypes] = useState([])      //Estado para traer los tipos
    const [currentType, setCurrentType] = useState()  //Estado para mostrar tipos
    // const [page, setPage] = useState(0)         
    const [currentPage, setCurrentPage] = useState(1)   //Estado para cambiar pagina
    const [currentOptionPage, setCurrentOptionPage] = useState(1)//Estado para cambiar bloque de pagina
    const [currentGeneration, setCurrentGeneration] = useState()   //Estado para mostrar por generaciones




    //Efecto para volver ajustes de la paginacion

    useEffect(()=>{
        setCurrentPage(1)
        // setPage(0)
        setCurrentOptionPage(1)
        // setCurrentType('')
        
        
    },[pokemonName,currentType])
    

    // Efecto para traer los tipos 


    useEffect(()=>{

        const URL = 'https://pokeapi.co/api/v2/type'
        axios.
        get(URL)
        .then(res=> {
            const newTypes = res.data.results.map(type => type.name)
            newTypes.pop()
            newTypes.pop()
            setTypes(newTypes)
        })

        .catch(err=> console.log(err))

    },[])

    //handle para tomar el nombre del input


    const handleSubmit = (e) =>{

        e.preventDefault()
        // setCurrentGeneration()
        // setCurrentType
        
        const pokeName = e.target.pokemonName.value
        setCurrentType()
        setCurrentGeneration()
        setPokemonName(pokeName)
        
        
    }

   

        //Efecto 1 -- tomar los pokemones del api

    useEffect(()=>{
       

        if(!currentType && !currentGeneration){
          
            inputType.current.value = ''

        const URL = `https://pokeapi.co/api/v2/pokemon?limit=1010`
        axios.
        get(URL)
        .then(res=> setPokemons(res.data.results))
        .catch(err=> console.log(err))
        console.log('current pokemon')
        }
        else if(currentType === 'hi'){
            console.log('hi')
        }


    },[pokemonName,currentType])   //Efecto al tomar nombre del input, al poner el type en all



    // Efecto 2 -- al cambiar el tipo

        useEffect(()=>{
            
            if(currentType ){
                setPokemonName('')
                setCurrentGeneration()
                inputName.current.value = ''
                
                const URL = `https://pokeapi.co/api/v2/type/${currentType}`
                axios
                .get(URL)
                .then(res=>{
                    const pokemonByType = res.data.pokemon.map(pokemon=>pokemon.pokemon)
                    setPokemons(pokemonByType)
                })
                .catch(err=>console.log(err))
               
                console.log('currente type')
            }

            
            
        },[currentType])    //efecto al poner type distinto a all


        //Efecto 3 -- Al cambiar de generacion

        useEffect(()=>{
            
            if(currentGeneration ){
                setPokemonName('')  
                inputType.current.value = ''
                inputName.current.value = ''
                const URL = `https://pokeapi.co/api/v2/pokedex/${currentGeneration}`
                axios
                .get(URL)
                .then(res=> {
                    const generation = []
                    const generationU = (res.data.pokemon_entries)
                    generationU.map((u)=> generation.push({
                        name:  u.pokemon_species.name,
                        url:   u.pokemon_species.url
                    }))
                    setPokemons(generation)
                }
                )
                               
                .catch(err=>console.log(err))
                console.log('currente generation')
            }

        },[currentGeneration]) //efecto al cambiar la generacion


        //activar botton de cambio de generacion

        const changeGeneration = (e) => {
            setCurrentGeneration(e)
        
        }

        
        // Logica para filtrar pokemones por el input

        const pokemonsByName = pokemons.filter((pokemon)=> pokemon.name.includes(pokemonName))
        
    
        //Logica para cambiar el el nombre del usuario a mayuscula

    const nameLogin = nameTrainer.toLowerCase()[0].toUpperCase() +  nameTrainer.toLowerCase().substring(1)


    //Logica de bloques de paginacion
    

    const POKEMONS_PER_PAGE = 20      //queremos 20 cards por pagina



    const pages = []                    //arreglo para almacenar las card a renderizar


    //calculo de las paginas total de cards/cantidad de cards que queremos

    const quantityPages = Math.ceil(pokemonsByName?.length / POKEMONS_PER_PAGE) 
    
    // total de paginas en el arreglo

    for( let i = 1; i <= quantityPages; i++){
        pages.push(i)
      }

    //Logica card por bloque

    const startCut =  currentPage * POKEMONS_PER_PAGE - POKEMONS_PER_PAGE
    const endCut = currentPage * POKEMONS_PER_PAGE 


    const OPTIONS_PER_PAGE = 5

    const optionsPages = []


    const quantityOptionsPages = Math.ceil(pages.length / OPTIONS_PER_PAGE)
    for( let i = 1; i <= quantityOptionsPages; i++){
        optionsPages.push(i)
      }     
    

    const pageStartCut =  currentOptionPage * OPTIONS_PER_PAGE - OPTIONS_PER_PAGE
    const pageEndCut = currentOptionPage * OPTIONS_PER_PAGE 

    

    const inputName = useRef(null)
    const inputType = useRef(null)


    // useEffect(()=>{
        
    //     inputName.current.value = ''
    // },[currentType,currentGeneration])

    // useEffect(()=>{
    //     inputType.current.value = ''
    // },[currentGeneration])


    // ref={inputName}

    // 
    // ref={inputName}

  return (
    
    <section className='relative min-w-screen bg-[url("/images/fondo2.jpg")] border-2 border-black'>
        <Header/>

        {/* seccion de filtros y saludos */}
        <section className='grid py-6 '>
            <div className='grid justify-center text-center min-[1100px]:text-[30px] min-[600px]:text-[20px]'>
            <h3>Welcome <span className='text-red-600'>{nameLogin}</span>, here you can find your favorite pokemon</h3>
            </div>
           

            <form onSubmit={handleSubmit} action="" className=' justify-self-center'>

                <div className='flex flex-col min-[700px]:flex-row min-[700px]:gap-[80px] justify-between p-6 gap-4'>
                <div className='flex relative w-[260px] ml-[-20px]'>
                <input ref={inputName}  id='pokemonName' placeholder='Search your pokemon' className=' border-[1px] border-black border-r-0 w-[260px] h-[30px] font-[20px] text-center drop-shadow-lg text-[20px] '/>
                <button  className='flex w-[50px] border-[1px] border-l-0 border-black  bg-red-600 right-0'><i className='bx bx-search-alt text-[25px] text-white mx-auto'></i></button>
                </div>
                
                <select  ref={inputType}  className='flex border-[1px] border-black drop-shadow-lg relative w-[260px] ml-[-20px] h-[30px]' onChange={(e)=> setCurrentType(e.target.value)}>
                
                <option  value="">All</option>
                {
                    types.map(type=>(
                        <option value={type} key={type}>{type}</option>
                    ))
                }
                </select>
                </div>

                                   
            </form>

            <section className='grid justify-items-center gap-2 '>

                <h2><li onClick={()=>changeGeneration(1)} className={`cursor-pointer ${currentGeneration === 1 ? 'opacity-100': 'opacity-40'} h-[20px] w-[200px] bg-blue-200 text-[11px] text- rounded-md flex justify-center items-center`}>Todas las generaciones</li></h2>

                <ul className='flex flex-wrap gap-2 justify-center'>
                    <li onClick={()=>changeGeneration(2)} className={` cursor-pointer ${currentGeneration === 2 ? 'opacity-100': 'opacity-40'} h-[20px] w-[90px] bg-blue-200 text-[11px] text- rounded-md flex justify-center items-center`}>I Generation</li>
                    <li onClick={()=>changeGeneration(3)} className={`cursor-pointer  h-[20px] w-[90px] bg-green-200 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 3 ? 'opacity-100': 'opacity-40'}`}>II Generation</li>
                    <li onClick={()=>changeGeneration(4)} className={`cursor-pointer  h-[20px] w-[90px] bg-red-300 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 4 ? 'opacity-100': 'opacity-40'}`}>III Generation</li>
                    <li onClick={()=>changeGeneration(5)} className={`cursor-pointer h-[20px] w-[90px] bg-orange-300 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 5 ? 'opacity-100': 'opacity-40'}`}>IV Generation</li>
                    <li onClick={()=>changeGeneration(8)} className={`cursor-pointer h-[20px] w-[90px] bg-gray-300 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 8 ? 'opacity-100': 'opacity-40'}`}>V Generation</li>
                    <li onClick={()=>changeGeneration(12)} className={`cursor-pointer h-[20px] w-[90px] bg-yellow-400 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 12 ? 'opacity-100': 'opacity-40'}`}>VI Generation</li>
                    <li onClick={()=>changeGeneration(16)} className={`cursor-pointer h-[20px] w-[90px] bg-violet-300 text-[11px] text- rounded-md flex justify-center items-center ${currentGeneration === 16 ? 'opacity-100': 'opacity-40'}`}>VII Generation</li>
                 
                </ul>
                
            </section>
        </section>

       
       
        <section className='px-2 grid  gap-6  grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] min-[1280px]:grid-cols-4 min-[1600px]:grid-cols-5   justify-items-center'>

            {pokemonsByName?.slice(startCut, endCut).map(pokemon=><PokemonCard key={pokemon.url} pokemonURL = {pokemon.url}/> )}
        </section>
       
         <ul className='flex justify-center items-center gap-4 mt-[50px] '>
            {
                currentOptionPage > 1 ? <button onClick={()=> setCurrentOptionPage(currentOptionPage - 1)} className='flex justify-center'><i className='bx bx-caret-left text-[30px] text-red-600'></i></button>:
                <button  className='flex justify-center'><i className='bx bx-caret-left text-[30px] cursor-auto opacity-0'></i></button>

            }
                {
                    pages.slice(pageStartCut, pageEndCut).map(page => <li onClick={()=> setCurrentPage(page)} key={page} className={`w-[50px] h-[50px] text-[25px] cursor-pointer   flex justify-center items-center ${page === currentPage && 'bg-red-600 text-white'}`}>{page}</li> )
                }

            {
                currentOptionPage < optionsPages.length ? <button className='flex justify-center' onClick={()=> setCurrentOptionPage(currentOptionPage + 1)}><i className='bx bx-caret-right text-[30px]  text-red-600' ></i></button>:
                <button className='flex justify-center opacity-0 cursor-auto' ><i className='bx bx-caret-right text-[30px]' ></i></button>
            }
            
        </ul> 

            <FooterPokedex/>

            <ul>

            </ul>
       
    </section>
    
  )
}



export default Pokedex