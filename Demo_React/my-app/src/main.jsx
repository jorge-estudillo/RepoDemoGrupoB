import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MiComponente from './componentes/MiComponente.jsx'
import Tarjeta from './componentes/Tarjeta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta
      imagen="anona"
      nombre="ANONA"
      region="Sureste de México"
      texto="Es un fruto que se da en un arbol silvestre en las regiones del sur sureste de México"
    />
    <Tarjeta
      imagen="manzano"
      nombre="MANZANA"
      region="Altas montañas"
      texto="Es un fruto que se da en climas frios y lluviosos, generalmente propio de las altas montañas"
    />
    <Tarjeta
      imagen="carambola"
      nombre="CARAMBOLA"
      region="Centro y Sur de México"
      texto="Es una fruta tropical que se da en arbustos propio de climas calurosos"
    />

  </StrictMode>,
)
