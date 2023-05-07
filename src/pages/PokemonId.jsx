import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './trapecio.css'
import Attacks from '../components/PokemonId/Attacks'
import FooterPokedex from '../components/pokedex/FooterPokedex'
import Evolution from '../components/PokemonId/Evolution'
import Loader from '../components/Loader'

function PokemonId() {

    
   
    const [pokedex, setPokedex] = useState([])  //estado obtener pokedex
    const [pokemon, setPokemon] = useState()    //estado traer tipo,id,nombre
    const [pokemonSpecie, setPokemonSpecie] = useState('') //estado obtener descripcion del pokemon
    const [next, setNext] = useState(true) //estado para cambiar pokemon siguiente
    const [previous, setPrevious] = useState(true) //estado cambiar pokemon anterior   
    const [shiny, setShiny] = useState(false) //estado cambio de imagen normal/shiny
    const [evolution, setEvolution] = useState()

    const {id} = useParams()


    //Efecto 1-- obtener pokedex

    useEffect(()=>{
        const URL = `https://pokeapi.co/api/v2/pokedex/1`
        axios
        .get(URL)
        .then(res => setPokedex(res.data.pokemon_entries))
        .catch(err => console.log(err))
    },[])
   
    const navigate = useNavigate()
    //Efecto 2-- obtener id, tipo, nombre, img

    useEffect(()=>{
        if(Number.isNaN(Number(id))|| id > 1010 || id <= 0)  {
            navigate('/*')
        }      
        else{
        
        
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios
        .get(URL)
        .then(res => setPokemon(res.data))
        .catch(err => {
            console.log(err)
        })
    }
    

    },[next,previous,navigate])

    //Efecto 3-- obtener descripcion, evolucion

    
    useEffect(()=>{
        const URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        axios
        .get(URL)
        .then(res => {
            const pokemonsDos = (res.data)
            setEvolution(pokemonsDos['evolution_chain'].url)
        
            setPokemonSpecie(pokemonsDos.flavor_text_entries)
        })
        .catch(err => console.log(err))

    },[next, previous])


    

    //Logica buscar descripcion del pokemon en español

    let descriptionPokemon = ''

   
    for (let i = 0; i < pokemonSpecie.length; i++) {
            if(pokemonSpecie[i].language.name === 'en'){
                descriptionPokemon = pokemonSpecie[i].flavor_text
                break
            }
    }



    const pokedexList = {}

    for (let i = 0; i < pokedex?.length; i++) {  
        pokedexList[pokedex[i].entry_number.toString()] = pokedex[i].pokemon_species.name
        
    }
    
    
    //Logica vovler 0001 los no. pokedex
    

    const numberPokedex =  pokemon?.id.toString().padStart(4,'0')


    const numberNextPokedex = (pokemon?.id + 1).toString().padStart(4,'0')
    

    const numberPreviousPokedex =  (pokemon?.id - 1).toString().padStart(4,'0')
   

    

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
    //Images del pokemon normla/shinny

    const shinyImage = {
        normal: pokemon?.sprites.other["official-artwork"].front_default,
        shinys : pokemon?.sprites.other["official-artwork"].front_shiny
    }

    //Logica para hacer los cambios a shiny

    const changeShiny = ()=>{
        setShiny(!shiny)

    }

    //Logica reset shiny al cambiar pagina

    const restartShiny = ()=>{
        setShiny(false)
        setNext(!next)
        setPrevious(!previous)

    }

 

    //Arreglo con moviemientos, se los pone id para ponerle bg color

    const movesPokemon = {}

    let cont = 0



    pokemon?.moves.map((move)=>{

        movesPokemon[move.move.name] = cont++
    })

    

    // Logica obtener porcentajes de stats

    const getPercentStatBar = (stat_base) =>{
        const percentBarProgres = Math.floor(stat_base*100)/255
        return `${percentBarProgres}%`
    }

    const typePodemon = pokemon?.types[0].type.name


  return (
    <>
     
    <section className='grid  min-w-screen bg-[url("/images/fondo2.jpg")] border-2 border-black min-[1280px]:w-[1260px] min-[1600px]:w-[1500px]'>

<Header/>

{/* imagen con button para volver a pokedex */}

<Link to= {`/pokedex/`} className='flex  justify-center'>     
        <img src="/images/pokedex.png" alt=""  className=' h-[30px] w-[180px]'/>
</Link>  


{/* seccion de botones anterior/siguiente */}

 <div className=' h-[100px] flex gap-1 pt-3 justify-between p-2'>

    {/* Boton cambiar pokemon anterior */}

    <Link  className='w-[45%] relative' onClick={restartShiny} id='padre' to= {`/pokedex/${pokemon?.id -1 }`}>
    {
        pokemon?.id > 1 && 
        <button to= {`/pokemon/${pokemon?.id - 1}`} className='h-[80px] flex w-[100%] bg-gray-500 items-center justify-between pl-2 pr-3'>
            
            {/* flecha */}
            <i className='bx bx-left-arrow-circle text-[40px] text-white'></i>

            {/* nombre y no. pokemon anterior */}
            <p className='text-[12px] min-[800px]:pb-6 min-[900px]:text-[30px] min-[400px]:text-[18px] grid min-[800px]:flex min-[800px]:gap-6'>{pokedexList[(pokemon?.id -1).toString()][0].toUpperCase() + pokedexList[(pokemon?.id -1).toString()].substring(1)} <span className=' text-black/40 grid z-30 pt-4 min-[800px]:pt-0'>N.°{numberPreviousPokedex}</span>
            </p>  

            {/* trapecio boton anterior */}

            <div className={`trapecio__dos -ml-[8px]`}>

        </div>

        </button>

    }              
    </Link>

                {/* Boton cambiar pokemon siguiente */}

    <Link onClick={restartShiny} to= {`/pokedex/${pokemon?.id + 1}`} className='w-[45%] relative'>

    {
        pokemon?.id < 1010 &&
        <button  className='h-[80px] flex  w-[100%] bg-gray-500 items-center justify-between pr-2 pl-3'>
        
            {/* info pokemon y pokedex siguiente */}
            <p className='text-[12px] min-[900px]:text-[30px] min-[400px]:text-[18px] grid min-[800px]:flex min-[800px]:gap-6 min-[800px]:pb-6'>{pokedexList[(pokemon?.id +1).toString()][0].toUpperCase() + pokedexList[(pokemon?.id +1).toString()].substring(1)} <span className='text-black/40 grid pt-3 z-30 min-[800px]:pt-[0] '>N.°{numberNextPokedex}</span>
            </p>

            {/* flecha boton siguiente */}
            <i className='bx bx-right-arrow-circle  text-[40px] text-white' ></i>

            {/* trapecio boton siguiente */}
            <div className={`trapecio -ml-[12px]`}></div>

        
        </button>
    }
    </Link>

    

</div>

{/* Nombre/no. pokemon -1000px */}

<div className='grid justify-center  place-items-center opacity-100 visible min-[1100px]:opacity-0  min-[1100px]:absolute min-[1100px]:invisible'>

    <h3 className='text-[25px]'>{pokemon?.name[0].toUpperCase() + pokemon?.name.substring(1)}  <span className='text-black/50'>N.°{numberPokedex}</span>
    </h3>

</div>

        {/* article */}

<article className='flex justify-self-center min-[1100px]:pt-10 flex-wrap w-[90%]  bg-white p-4 min-[1000px]:gap-20  gap-3 justify-items-center justify-center min-[1100px]:grid '>

    {/* seccion de la imagen */}

    <div className='grid justify-items-center min-[1100px]:w-[100%]'>

        <div className={`${backgroundByType[pokemon?.types[0].type.name]} mt-[150px] w-[260px] h-[100px] relative min-[1100px]:w-[90%]`}>   

            {/* imagen pokemon/ shiny */}

            <img className='absolute -mt-[150px] min-[1100px]:w-[280px] min-[1100px]:ml-[320px] min-[1100px]:mt-[-180px]' src={shiny ? shinyImage.shinys: shinyImage.normal} alt="" />

            {/* boton para cambiar imagen del pokemon */}
            <button onClick={changeShiny} className='absolute right-0 -mr-[0px] -mt-[150px] flex items-center gap-1'>
                <i class='bx bxs-paint text-[30px]'></i>
            </button>

        </div>



        {/* seccion datos pokemon */}

        <div className=' min-[1100px]:border-t-[1px] border-black relative min-[1100px]:mt-[50px]   min-[1100px]:w-[100%]  '>

            {/* Nombre/no. pokemon +1000px */}
            <div className='absolute justify-center  place-items-center opacity-0 invisible min-[1100px]:opacity-100 min-[1100px]:visible w-[100%] text-center -mt-[25px]'>

                 <h3 className='text-[35px]'><span className='bg-white p-3'>{pokemon?.name[0].toUpperCase() + pokemon?.name.substring(1)} </span> <span className='text-black/50 bg-white p-3'>N.°{numberPokedex}</span>
                 </h3>

            </div>


   
             <div className='min-[1100px]:w-[100%] min-[1100px]:grid-cols-2 min-[1100px]:grid min-[1100px]:pt-16'>

                {/* seccion del tipo de pokemon */}

                <div className='flex w-[100%] p-4 min-[1100px]:flex-col justify-center min-[1100px]:p-0 min-[1100px]:gap-1 justify-self-start '>


                   <p className='text-black text-center min-[1100px]:text-[30px] opacity-0 invisible absolute min-[1100px]:opacity-100  min-[1100px]:relative min-[1100px]:visible'>Type</p>

                   <div className='flex justify-center'>
                        {
                            pokemon?.types.map((type)=> 
                            <div key={type.type.name} className=' flex '>
                                {         
                                pokemon?.types.length === 1 ?        
                                <div  className={`${typeBackGround[type.type.name]} w-[150px] mx-auto rounded-xl text-center min-[1100px]:text-[30px]`}>
                                <h4 >{type.type.name[0].toUpperCase() + type.type.name.substring(1)}</h4>
                                </div>              
                                :
                                <div className={`${typeBackGround[type.type.name]} text-center w-[80px]  ${type.type.name === pokemon.types[0].type.name ? 'rounded-l-xl ' : "rounded-r-xl "} min-[1100px]:text-[30px] min-[1100px]:w-[150px]`}>
                                <h4 >{type.type.name[0].toUpperCase() + type.type.name.substring(1)}</h4>
                                </div>
                                }
                                </div>
                            )
                        }

                    </div>

                </div>
   
    

               {/* seccion de pero y altura de pokemon  */}
                <div className='flex justify-between px-10  text-center min-[1100px]:justify-center min-[1100px]:text-[20px]'>

                    <p className='grid pr-10'>Weight <span>{pokemon?.weight} Lbs</span></p>
                    <p className='grid border-l-[2px] border-black/30 pl-10'>Height <span>{pokemon?.height} Ft</span></p>

                </div>

            </div>



             {/* Tabla de habilidades  */}

            <div className=' min-[1100px]:w-[90%] mx-auto  border-t-[1px] border-black/20 flex mt-[20px] flex-col gap-6 items-center bg-white w-[260px] justify-center min-[1100px]:mx-auto'>

                <p className='w-[50%] text-center pt-[10px] min-[1100px]:text-[25px]'>Abilities</p>

                <div className='grid pb-[20px] w-[100%]  border-black/50 gap-1 min-[1100px]:flex min-[1100px]:text-[20px] min-[1100px]:flex-wrap justify-center'>
                
            {
                pokemon?.abilities.map(ability => 
                <div key={ability.ability.name} className={`${ability.is_hidden ? 'bg-purple-200': 'bg-gray-200'} w-[200px] min-[1100px]:w-[250px]  text-center relative`}>{ability.ability.name} 
                    <abbr title={ability.is_hidden ? 'Habilidad oculta':'Habilidad comun'}>
                    <i className=' bx bx-question-mark w-[20px] h-[24px] bg-gray-300 absolute right-0 justify-items-center '></i>
                    </abbr>

                </div>)
            }
                </div>

            </div>


         </div>


     </div> 

{/* Informacion del pokemon */}



    <div className='grid gap-2 min-[1100px]:w-[900px] justify-items-center'>

        {/* descriocion del pokemon */}
        <div>
        
        {
            descriptionPokemon?

            <div className='border-t-[1px]  border-black/20 min-[648px]:border-t-0 w-[260px] h-[250px] text-start pl-6 flex items-center  bg-white min-[1100px]:w-[90%] min-[1100px]:text-center min-[1100px]:text-[30px]  min-[1100px]:h-[200px] min-[1100px]:mx-auto '>

                  <p className=''>{descriptionPokemon.replace('\f',' ')}</p>
        
            </div>:

            <div className=' justify-center w-[260px] h-[250px] text-center flex items-center  bg-white'>
               
                <p >No info</p>
    
            </div>      
          }

        </div>

        {/* Stats pokemon */}
     
        <section className=' border-t-[1px] border-black/20 grid p-2 pt-5 bg-white  w-[260px] h-[290px] min-[1100px]:w-[90%] '>

            {
                pokemon?.stats.map(stat =>(
                    <article key={stat.stat.name} >

                        <section className='flex justify-between'>

                            <h5 className='capitalize'>{stat.stat.name}</h5>
                            <span>{stat.base_stat}/255</span>

                        </section>

                        <div className="bg-gray-100 h-4 rounded-sm">

                            <div style={{"width": getPercentStatBar(stat.base_stat)} } className={`h-full bg-gradient-to-r from-yellow-300 to-yellow-600`}>

                            </div>

                        </div>

                    </article>
                ))
            }

        </section>
    </div>




    <div className={`w-[90%] grid  min-[1000px]:h-[300px] min-[750px]:w-[500px] justify-center border-t-[1px] border-black/30 pt-[10px] ${text[typePodemon]}`}>

    <div>
        <h3 className='text-center'>Evolutions</h3>
        </div>

        <Evolution evolution={evolution} next={next} previous={previous} id={id}/>

    </div>

</article>

    {/* Movimientos del pokemon */}

<div className=' grid justify-center mt-[50px]'>

    <section className='w-[260px]  border-[2px] border-black min-[550px]:w-[500px] min-[1000px]:w-[950px]'>
        <div className='flex h-[40px] border-b-2  border-black  '>
    
            <div className='flex w-[50%] min-[1000px]:w-[60%]  '>

                <div className='w-[100%] min-[1000px]:w-[60%] text-center  border-r-2 border-black h-[100%] ' >Movent
                </div>

                <div className=' opacity-0 invisible absolute min-[1000px]:opacity-100  min-[1000px]:relative min-[1000px]:visible min-[1000px]:w-[20%] text-center  border-r-2 border-black  ' >Accuracy
                </div>

                <div className=' opacity-0 invisible absolute min-[1000px]:opacity-100  min-[1000px]:relative min-[1000px]:visible  min-[1000px]:w-[20%] text-center  border-r-2 border-black ' >Power
                </div>

            </div>

            <div className='flex w-[50%] justify-center min-[1000px]:w-[40%]'>

                <div className={`w-[50%] text-center `} >Type</div>

                <div className={`w-[50%] border-l-2 border-black text-center opacity-0 invisible absolute min-[550px]:opacity-100  min-[550px]:relative min-[800px]:visible`} >Damage class</div>
        
            </div>

        </div>

        {
            pokemon?.moves.map(move=>(
                <div key={move.move.name} className={` ${movesPokemon[move.move.name]%2 === 0? 'bg-gray-200/60'  : 'bg-gray-400/40'} `}>

                   <Attacks  move={move.move.name}/>

                </div>
            
            ))
        }
        
    </section>
      
</div>



<FooterPokedex/>

</section>

    </>
  )
}

export default PokemonId