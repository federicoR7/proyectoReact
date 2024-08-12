import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./FormularioReservas.css"

import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom'; // Para redirigir al inicio

const FormularioServicios = () => {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState('Elegir un horario');
  const [validated, setValidated] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [reservaHecha, setReservaHecha] = useState(false); // Estado para manejar si la reserva fue realizada
  const navigate = useNavigate(); // Hook para redirigir a otra página
  const [horarioInvalido, setHorarioInvalido] = useState(false); // Estado de validación del horario

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dia: '',
    horario: '',
    email: '',
    servicios: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false || horarioInvalido) {
      event.stopPropagation();
    } else {
      setMensaje('El turno se agendó correctamente. Gracias por confiar en nosotros!');
      setReservaHecha(true); // Cambia el estado para deshabilitar el botón y mostrar el de volver
      console.log('Formulario enviado:', formData);
    }

    setValidated(true);

    if (horarioSeleccionado === 'Elegir un horario') {
      setHorarioInvalido(true); // Marca el horario como inválido si no se selecciono
    } else {
      setHorarioInvalido(false); // Marca el horario como válido si se selecciono
    }
  };

  const handleSelect = (eventKey) => {
    setHorarioSeleccionado(eventKey);
    setFormData({ ...formData, horario: eventKey });
    setHorarioInvalido(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const serviciosGuardados = localStorage.getItem('serviciosSeleccionados');
    if (serviciosGuardados) {
      setServiciosSeleccionados(JSON.parse(serviciosGuardados));
    }
  }, []);

  // Asegúrate de que los servicios seleccionados se guarden en formData
  useEffect(() => {
    setFormData({ ...formData, servicios: serviciosSeleccionados });
  }, [serviciosSeleccionados]);

  const handleVolverInicio = () => {
    navigate('/'); // Redirige al inicio
  };


  return (
    <section className='formulario'>     

      
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
        <h3 className='tituloFormulario'>Estas a un paso de reservar con nosotros!</h3>

        <Row className="mb-3 lineaDatos1">
          <div className='cajaInputs'>
            <Form.Group as={Col}  controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese su nombre"
                size='lg'
                value={formData.nombre}
                onChange={handleInputChange}
                name="nombre"
              />
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}  controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese su apellido"
                size='lg'
                value={formData.apellido}
                onChange={handleInputChange}
                name="apellido"
              />
              <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}  controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su email"
                  required
                  size='lg'
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </div>
          <Row className="mb-3 cajaHorarios">

            <Form.Group as={Col} md="3" controlId="fomrDia" className='calendario'>
              <Form.Label>Día</Form.Label>
              <Form.Control
                required
                type="date"
                size='lg'
                value={formData.dia}
                onChange={handleInputChange}
                name="dia"
                className='dia'
              />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="formHorario" className='calendario'>
              <Form.Label>Horario</Form.Label>
              <Dropdown onSelect={handleSelect} required>
                <Dropdown.Toggle variant={horarioInvalido ? 'danger' : 'secondary'} id="dropdown-basic" size='lg'>
                  {horarioSeleccionado}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className='horas' eventKey="9:30hs">9:30hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="10:30hs">10:30hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="12hs">12hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="14hs">14hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="14:30hs">14:30hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="15:30hs">15:30hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="16:30hs">16:30hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="18hs">18hs</Dropdown.Item>
                  <Dropdown.Item className='horas' eventKey="18:30hs">18:30hs</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Form.Group>
          </Row>

        </Row>





        <Form.Group as={Col} md="6" controlId="formServicios" required
          size='lg'
          value={formData.servicios}
          onChange={handleInputChange}
          name="servicios"
          className='cajaInferior'
        >
          <div className='subCajaInferior'>
            <Form.Label>Servicios seleccionados:</Form.Label>
            <ul>
              {serviciosSeleccionados.length === 0 ? (
                <li>No hay servicios seleccionados</li>
              ) : (
                serviciosSeleccionados.map((servicio) => (
                  <li key={servicio.id}>{servicio.nombre}</li>
                  
                ))
              )}
            </ul>
          </div>

        </Form.Group>
                  <div className='cajaBotonAgendar'>
            {/**  <Button variant="secondary" size="lg" type="submit">Reservar!</Button>*/}
            {!reservaHecha ? (
              <Button className='botonAgendar' variant="secondary" size="lg" type="submit" disabled={reservaHecha}>
                Reservar!
              </Button>
            ) : (
              <Button className='botonAgendar' variant="secondary" size="lg" onClick={handleVolverInicio}>
                Volver al Inicio
              </Button>
            )}
          </div>

     {mensaje && (
        <Alert variant="success" className="mt-4">
          {mensaje}
        </Alert>
      )}
      </Form>

    </section>
  );
};

export default FormularioServicios;