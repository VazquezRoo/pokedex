import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectecAuth from './components/auth/ProtectecAuth'
import PokemonId from './pages/PokemonId'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <section className='bg-gradient-to-b from-red-600 to-white font-mono xl:grid justify-items-center '>


      {/* lista de rutas */}
      <Routes>
        <Route path="/" element={<Home/>}/>


      {/* Rutas protegidas con Route */}

        <Route element={<ProtectecAuth/>}>

          <Route path='pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokemonId/>} />

        </Route>

          {/* Ruta de error con /* */}

        <Route path='/pokedex/*' element={<NotFound/>}/>

        <Route path='/*' element={<NotFound/>}/>
   
      </Routes>

    </section>
  )
}

export default App
