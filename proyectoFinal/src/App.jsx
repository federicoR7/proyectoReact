import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import GoogleMaps from './componentes/googleMaps/GoogleMaps';
import Horarios from './componentes/horarios/Horarios';
import Carrousel from './componentes/carrousel/Carrousel';
import Formulario from './componentes/formularioReservas/FormularioReservas';
import Nosotros from './componentes/nosotros/Nosotros';
import Contacto from './componentes/contacto/Contacto';
import React, { useRef } from 'react';
import ServicioSelector from './componentes/section/Section';



function App() {
  return (
    <Router>
      <section className='body'>
        <Header />
        <Carrousel /> 
        <main className='main'  >
        
                
          <Routes>
          
          <Route path="/servicio/:tipo" element={<ServicioSelector />} />
          
           <Route  path="/" element={<ServicioSelector />} />
            <Route path='/Reservas' element={<Formulario />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Contacto' element={<Contacto />} />
            
            


            
          </Routes>   
          <div className='cajaHorarioMapa'>     
        <GoogleMaps />
        <Horarios />
        </div> 
        </main>
        <Footer />
      </section>
    </Router>
  )
}

export default App
