import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ImgPokeEvolution({url,next,previous,evolution}) {

const [img, setImg] = useState([])
const [id, setId] = useState()

    useEffect(()=>{
      if(url){
        axios
        .get(url.replace('-species',''))
        .then(res => {
          setImg(res.data.sprites.other['official-artwork'])
          setId(res.data.id)
        }
          )
        .catch(err=> console.log(err))
      }
    },[url,next,previous,evolution])


  return (
    <Link to={`/pokedex/${id}`} className=' min-[1000px]:w-134px min-[1000px]:h-134px cursor-pointer'>
        <img src={img?.front_default} alt="" className=' min-[1000px]:w-[134px] min-[1000px]:h-[134px] min-[1000px]:hover:h-[140px]'/>
    </Link>
  )
}

export default ImgPokeEvolution