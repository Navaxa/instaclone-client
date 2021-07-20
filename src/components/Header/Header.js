import React from 'react';
import './Header.scss';
import { Container, Grid, GridColumn, Image } from 'semantic-ui-react';
import Logo from '../../assets/img/instaclone.png';
import { Link } from 'react-router-dom';
import RightHeader from './RightHeader';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Grid>
                    <GridColumn 
                        className='header__logo'
                        width={3}>
                        <Link to='/'>
                            <Image src={Logo} alt='Instaclone'/>
                        </Link>
                    </GridColumn>
                    <GridColumn width={10}>
                        <p>Buscador</p>
                    </GridColumn>
                    <GridColumn width={3}>
                        <RightHeader />
                    </GridColumn>
                </Grid>
            </Container>
        </div>
    );
};

export default Header;