import React, { useState } from 'react';
import './Auth.scss';
import { Container, Image } from 'semantic-ui-react'
import instaclone from '../../assets/img/instaclone.png';
import RegisterForm from '../../components/Auth/RegisterForm';
import LoginForm from '../../components/Auth/LoginForm';

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <Container fluid className="auth">
            <Image src={instaclone} />
            <div className="container-form">
                {showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin}/>}
            </div>

            <div className="change-form">
                <p>
                    {showLogin ? 
                        (
                            <>
                                ¿No tienes cuenta?
                                <span onClick={() => setShowLogin(!showLogin)}> Registrate</span>
                            </>
                        ) : (
                            <>
                                Ya tengo cuenta
                                <span onClick={() => setShowLogin(!showLogin)}> Iniciar sesión</span>
                            </>
                        )
                    }
                </p>
            </div>
        </Container>
    );
};

export default Auth;