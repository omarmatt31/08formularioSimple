import {Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form"

const FormularioCampos = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const agregarDatos= ()=>{
        alert("Datos Enviados");
        reset();
    }
    

    return (
        <Form onSubmit={handleSubmit(agregarDatos)}>
            <h3 className="text-center">DATOS PERSONALES</h3>
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ej: Juan" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ej: Pérez" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="text" placeholder="Ej:11111111" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ej. juan@perez.com" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default FormularioCampos;