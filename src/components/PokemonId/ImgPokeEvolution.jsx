import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ImgPokeEvolution({url,next,previous,evolution}) {

const [img, setImg] = useState([])

console.log(url)
console.log( url.replace('-species',''))



    useEffect(()=>{
        axios
        .get(url.replace('-species',''))
        .then(res => setImg(res.data.sprites))
        .catch(err=> console.log(err))
        console.log(img)
    },[url,next,previous,evolution,img])


  return (
    <div>
        <img src={img?.front_default} alt="" />
    </div>
  )
}

export default ImgPokeEvolution