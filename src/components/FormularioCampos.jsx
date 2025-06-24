import {Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form"

const FormularioCampos = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const agregarDatos= (data)=>{
        alert("Datos Enviados");
        console.log(data)
        reset();
    }

    const mensajeError= () =>{
        alert("Por favor, complete todos los campos correctamente.");
    }
    
    return (
        <Form onSubmit={handleSubmit(agregarDatos, mensajeError)}>
            <h3 className="text-center">DATOS PERSONALES</h3>
            <Form.Group className="mb-2" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ej: Juan" {...register('inputNombre', {
                    required: 'Ingrese el Nombre'
                })}/>
                <Form.Text className="mb-2 text-danger">{errors.inputNombre?.message}</Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ej: Pérez" {...register('inputApellido', {
                    required: 'Ingrese el Apellido'
                })}/>
                <Form.Text className="mb-2 text-danger">{errors.inputApellido?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="text" placeholder="Ej:11111111" {...register('inputDni', {
                    required: 'Ingrese el DNI',
                    pattern:{
                        value: /^[0-9]{1,3}\.?[0-9]{3,3}\.?[0-9]{3,3}$/,
                        message: 'Ingrese un DNI valido'
                    }
                })}/>
                <Form.Text className="mb-2 text-danger">{errors.inputDni?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ej. juan@perez.com" {...register('inputEmail', {
                    required: 'Ingrese el E-Mail', 
                    pattern: {
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: 'Ingrese un mail valido'
                    }
                })}/>
                <Form.Text className="mb-2 text-danger">{errors.inputEmail?.message}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default FormularioCampos;