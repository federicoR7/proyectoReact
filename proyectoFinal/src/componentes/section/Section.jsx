
import "./Section.css";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Peluqueria from "../../assets/img/imagen-peluqueria.jpg";
import Manicuria from "../../assets/img/manicuria.jpg";
import Esculpidas from "../../assets/img/esculpidas.jpg";
import Pies from "../../assets/img/pies.jpg";
import TratamientosFaciales from "../../assets/img/tratamiento-facial.jpg"
import Depilacion from "../../assets/img/depilacion-laser.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { useServicio } from '../../contexto/ServicioContext'



const ServicioSelector = () => {
    const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
    const location = useLocation();
    //funcion para el contador de servicios
    const [count, setCount] = useState(0)
    const { servicioSeleccionado, acordeonKey } = useServicio();
    const [activeKey, setActiveKey] = useState('');





    useEffect(() => {
        // Escuchar el evento de cambio de hash en la URL
        const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              element.open = true;  // Abre la sección correspondiente del acordeón
            }
          }
        };
    
        // Ejecutar la función cuando se monta el componente
        handleHashChange();
    
        // Añadir el listener del evento
        window.addEventListener('hashchange', handleHashChange);
    
        // Limpiar el listener al desmontar el componente
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);




       

        useEffect(() => {
            if (servicioSeleccionado) {
              document.getElementById(servicioSeleccionado).scrollIntoView({ behavior: 'smooth' });
            }
          }, [servicioSeleccionado]);


    // Carga la lista desde localstorage cuando el componente se monta
    useEffect(() => {
        const serviciosGuardados = localStorage.getItem('serviciosSeleccionados');
        if (serviciosGuardados) {
            setServiciosSeleccionados(JSON.parse(serviciosGuardados));
        }
    }, []);

    // Guardar la lista en local storage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('serviciosSeleccionados', JSON.stringify(serviciosSeleccionados));
    }, [serviciosSeleccionados]);


    //función para agregar servicios 
    const agregarServicio = (servicio) => {
        setServiciosSeleccionados([...serviciosSeleccionados, servicio]);
        setCount(count + 1);
    };


    //funcion para eliminar servicios
    const eliminarServicio = (id) => {
        setServiciosSeleccionados(serviciosSeleccionados.filter(servicio => servicio.id !== id));
    };

    //funcion por si no se selecciona nada, que salte un alert y no se pueda agendar 
    const handleAlert = () => {
        if (serviciosSeleccionados.length === 0) {
            alert('Por favor selecciona un servicio.');
        }
    };


    //bootstrap para cerrar y abrir offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);







    return (

        <section className="cajaAcordeon rounded">


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <h1>Selecciona un servicio</h1>
                        <h2>Servicios seleccionados:</h2>
                        <ul>
                            {serviciosSeleccionados.map((servicio) => (
                                <li key={servicio.id}>
                                    {servicio.nombre}
                                    <button onClick={() => eliminarServicio(servicio.id) + setCount(count - 1)}>Eliminar</button>

                                </li>

                            ))}
                            <Button variant="success" size="lg" onClick={handleAlert}><Link to="/Reservas">Agendar</Link></Button>


                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>




            <div className="cajaTitulo">
                <h2>Nuestros servicios</h2>


                <Button variant="secondary" size="lg" onClick={handleShow}>
                    Agendar servicios <Badge bg="success">{count}</Badge>
                </Button>
            </div>



            <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} >


                <Accordion.Item eventKey="0"className="botonAcordeon" >
                    <Accordion.Header id="Servicio 1">Peluquería</Accordion.Header>

                    <Accordion.Body  id="service-1" className="contenedorCartas" >
                        <Card style={{ width: '30%' }}>
                            <img src={Peluqueria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Corte</Card.Title>
                                <Card.Text>
                                    Dale estilo a tu cabello con las mejores profesionales, dejales tu pelo en sus manos y mirá la magia!
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 1, nombre: 'Corte' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Peluqueria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Tintura</Card.Title>
                                <Card.Text>
                                    Tinte de cabello con los mejores productos, también podes elegir diseños!
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 2, nombre: 'Tintura' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Peluqueria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Alisado</Card.Title>
                                <Card.Text>
                                    Deja tu cabello alisado por meses! sin planchita, como una seda!
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 3, nombre: 'Alisado' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="botonAcordeon">
                    <Accordion.Header>Manicuría</Accordion.Header>
                    <Accordion.Body className="contenedorCartas">
                        <Card style={{ width: '30%' }}>
                            <img src={Manicuria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Manicuría Tradicional</Card.Title>
                                <Card.Text>
                                    Manicuría completa con esmalte común.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 4, nombre: 'Manicuría tradicional' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Manicuria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Manicuría semipermanente</Card.Title>
                                <Card.Text>
                                    Manicuría completa con esmalte semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 5, nombre: 'Manicuría semipermanente' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Manicuria} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Capping</Card.Title>
                                <Card.Text>
                                    manicuría completa con una capa de gel protectora, incluye semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 6, nombre: 'Capping' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="botonAcordeon">
                    <Accordion.Header>Esculpidas</Accordion.Header>
                    <Accordion.Body className="contenedorCartas">
                        <Card style={{ width: '30%' }}>
                            <img src={Esculpidas} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Esculpidas en acrilico</Card.Title>
                                <Card.Text>
                                    Extendemos el largo de tus uñas con acrilico, incluye semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 7, nombre: 'Esculpidas en acrilico' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Esculpidas} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Esculpidas en gel</Card.Title>
                                <Card.Text>
                                    Extendemos el largo de tus uñas con gel, incluye semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 8, nombre: 'Esculpidas en gel' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Esculpidas} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Soft Gel</Card.Title>
                                <Card.Text>
                                    extendemos el largo de tus uñas con tips de plastico, incluye semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 9, nombre: 'Soft Gel' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="botonAcordeon">
                    <Accordion.Header>Pies</Accordion.Header>
                    <Accordion.Body className="contenedorCartas">
                        <Card style={{ width: '30%' }}>
                            <img src={Pies} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Pedicuría</Card.Title>
                                <Card.Text>
                                    Trabajo extensivo en talones y uñas encarnadas, incluye belleza de pies y esmaltado tradicional o semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 10, nombre: 'Pedicuría' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Pies} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Belleza de pies</Card.Title>
                                <Card.Text>
                                    Embellecimiento de pies, incluye esmaltado tradicional o semipermanente.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 11, nombre: 'Bellesa de pies' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Pies} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Corte de uñas</Card.Title>
                                <Card.Text>
                                    Simple corte de uñas y limado.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 12, nombre: 'Corte de uñas' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="botonAcordeon">
                    <Accordion.Header>Tratamientos faciales</Accordion.Header>
                    <Accordion.Body className="contenedorCartas">
                        <Card style={{ width: '30%' }}>
                            <img src={TratamientosFaciales} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Limpieza Facial</Card.Title>
                                <Card.Text>
                                    Limpieza de cutis con los mejores productos importados, mascarilla humectante de Aloe Vera.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 13, nombre: 'Limpieza facial' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={TratamientosFaciales} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Humectación</Card.Title>
                                <Card.Text>
                                    Humectación de rostro y labios con los mejores productos importados.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 14, nombre: 'Humectación' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={TratamientosFaciales} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Remoción de manchas</Card.Title>
                                <Card.Text>
                                    Remoción de manchas de la piel con láser de última tecnología, indoloro.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 15, nombre: 'Remoción de manchas' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="botonAcordeon">
                    <Accordion.Header>Depilación</Accordion.Header>
                    <Accordion.Body className="contenedorCartas">
                        <Card style={{ width: '30%' }}>
                            <img src={Depilacion} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Perfilado</Card.Title>
                                <Card.Text>
                                    Perfilado de cejas con pinza.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 16, nombre: 'Perfilado' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Depilacion} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Depilación con cera</Card.Title>
                                <Card.Text>
                                    Depilación con cera caliente de alta calidad, no quema.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 17, nombre: 'Depilación con cera' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={Depilacion} alt="" />
                            <Card.Body>
                                <Card.Title className="tituloBoton">Depilación definitiva</Card.Title>
                                <Card.Text>
                                    Depilación con láser de última tecnología con cabezal frío, no duele ni quema.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => setCount(count + 1) + agregarServicio({ id: 18, nombre: 'Depilación definitiva' })}>Agregar servicio</Button>
                            </Card.Body>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>


    );
}

export default ServicioSelector;