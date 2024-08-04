import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "./FormularioReservas.css"

import Dropdown from 'react-bootstrap/Dropdown';

const FormularioServicios = () => {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  // Carga la lista desde localstorage cuando el componente se monta
  useEffect(() => {
    const serviciosGuardados = localStorage.getItem('serviciosSeleccionados');
    if (serviciosGuardados) {
      setServiciosSeleccionados(JSON.parse(serviciosGuardados));
    }
  }, []);

  return (

    <section className='formulario'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label >Nombre</Form.Label>

            <Form.Control
              required
              type="text"
              placeholder="ingrese su nombre"
              defaultValue=""
              size='lg'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ingrese su apellido"
              defaultValue=""
              size='lg'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="ingrese su email"
                aria-describedby="inputGroupPrepend"
                required
                size='lg'
              />
              <Form.Control.Feedback type="invalid">
                por favor escribí un emal.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Servicios seleccionados</Form.Label>
            <ul>
              {serviciosSeleccionados.length === 0 ? (
                <li>No hay servicios seleccionados</li>
              ) : (
                serviciosSeleccionados.map((servicio) => (
                  <li key={servicio.id}>{servicio.nombre}</li>
                ))
              )}
            </ul>


          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04" className='calendario'>
            <Form.Label>Día</Form.Label>
            <input type="date" id="fecha" name="fecha" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Horario</Form.Label>


            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" size='lg'>
                Elegir un horario
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">9:30hs</Dropdown.Item>
                <Dropdown.Item href="#/action-2">10:30hs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">12hs</Dropdown.Item>
                <Dropdown.Item href="#/action-4">14hs</Dropdown.Item>
                <Dropdown.Item href="#/action-5">14:30hs</Dropdown.Item>
                <Dropdown.Item href="#/action-6">15:30hs</Dropdown.Item>
                <Dropdown.Item href="#/action-7">16:30hs</Dropdown.Item>
                <Dropdown.Item href="#/action-8">18hs</Dropdown.Item>
                <Dropdown.Item href="#/action-9">18:30hs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Form.Group>
        </Row>
        <Form.Group className="mb-3">

        </Form.Group>
        <Button variant="secondary" size="lg">Reservar!</Button>
      </Form>

    </section>

  );
}

export default FormularioServicios;