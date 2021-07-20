import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { REGISTER } from '../../../gql/user';
import './RegisterForm.scss';

const initialValues = () => {
    return {
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    };
}

const RegisterForm = ({setShowLogin}) => {

    const [register, setRegister] = useMutation(REGISTER);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            name: Yup.string()
                     .trim()
                     .required("Es requerido"),
            username: Yup.string()
                         .matches(/^[a-zA-Z0-9]*$/, 
                                  "El nombre de usuario no debe tenece espacios")
                         .required("Debe agregar un nombre de usuario"),
            email: Yup.string()
                      .email("El email no es valido")
                      .required("El email es obligatorio"),
            password: Yup.string()
                         .required("La contraseña es obligatoria"),
                        //  .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son igulaes"),
            repeatPassword: Yup.string()
                               .required("La contraseña es obligatoria")
                               .oneOf([Yup.ref("password")], "Las contraseñas no son igulaes")
        }),
        onSubmit: async (formData) => {
            try {
                const newUser = formData;
                delete newUser.repeatPassword;

                const result = await register({
                    variables: {
                        input: newUser
                    }
                })

                console.log(result);
                if (result.data.register.id === null || !result) {
                    return toast.error("El usuario ya esta en uso");
                }

                toast.success('usuario registrado');
                setShowLogin(true);
            } catch (err) {
                console.log('Error => ', err);
            }
        }
    });

    return (
        <>
            <h2 className="register-form-title">Regístrate para ver fotos y videos de tus amigos</h2>
            <Form
                onSubmit={formik.handleSubmit} 
                className="register-form">

                <Form.Input
                    onChange={formik.handleChange} 
                    value={formik.values.name}
                    type="text" 
                    placeholder="
                    Nobre y apellidos"
                    error={formik.errors.name && true} 
                    name="name"/>

                <Form.Input
                    onChange={formik.handleChange} 
                    type="text" 
                    placeholder="
                    Nobre de usuario" 
                    error={formik.errors.username && true} 
                    name="username"/>

                <Form.Input
                    onChange={formik.handleChange} 
                    type="email" 
                    placeholder="
                    Correo electronico" 
                    error={formik.errors.email && true}
                    name="email"/>

                <Form.Input
                    onChange={formik.handleChange} 
                    type="password" 
                    placeholder="
                    Contraseña"
                    error={formik.errors.password && true} 
                    name="password"/>

                <Form.Input
                    onChange={formik.handleChange} 
                    type="password" 
                    placeholder="
                    Repite la contraseña"
                    error={formik.errors.repeatPassword && true} 
                    name="repeatPassword"/>

                <Button 
                    type="submit"
                    className="btn-submit">
                        Registrarse
                </Button>

            </Form>
        </>
    );
};

export default RegisterForm;