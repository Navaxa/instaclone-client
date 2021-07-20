import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { LOGIN } from '../../../gql/user';
import useAuth from '../../../hooks/useAuth';
import './LoginForm.scss';
import { setToken, decodeToken } from '../../../utils/token';

const initialValues = () => {
    return {
        email: '',
        password: '',
    }
}

const LoginForm = () => {

    const [error, setError] = useState('');
    const [login] = useMutation(LOGIN);

    const { setUser } = useAuth();

    const onSubmit = async (formData) => {
        setError('');
        try {
            const { data } = await login({
                variables: {
                    input: formData
                }
            });
            const { token } = data.login;
            setToken(token);
            setUser(decodeToken(token));
        } catch(err) {
            setError(err.message);
        }
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
            password: Yup.string().required('La contraseña es obligatoria')
        }),
        onSubmit: (formData) => onSubmit(formData)
    })

    return (
        <Form
            onSubmit={formik.handleSubmit} 
            className="login-form">

            <h2>Incia sesión</h2>

            <Form.Input
                type='email'
                placeholder='Correo electronico'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
            />

            <Form.Input
                type='password'
                placeholder='Contraseña'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
            />

            <Button 
                type='submit' 
                className='btn-submit'>
                    Iniciar sesión
            </Button>
            {<p className='submit-error'>{error}</p>}

        </Form>
    );
};

export default LoginForm;