import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ImgPokeEvolution({url}) {

const [img, setImg] = useState()

console.log(url)
console.log( url.replace('-species',''))



    useEffect(()=>{
        axios
        .get(url.replace('-species',''))
        .then(res => setImg(res.data.sprites))
        .catch(err=> console.log(err))
    },[])


  return (
    <div>
        <img src={img?.front_default} alt="" />
        
    </div>
  )
}

export default ImgPokeEvolution