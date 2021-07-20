import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';
import './Profile.scss';
import Avatar from '../../../assets/img/avatar.png';
import { Grid, Image } from 'semantic-ui-react';
import UserNotFound from '../../UsertNotFound/UserNotFound';
import ModalBasic from '../../Modal/ModalBasic';
import AvatarForm from '../AvatarForm';
import useAuth from '../../../hooks/useAuth';

const Profile = ({username}) => {
    const { data, loading, error } = useQuery(GET_USER, {
        variables: { username }
    });

    const { auth } = useAuth(); 

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [childrenModal, setChildrenModal] = useState(null);

    if (loading) return null;

    if (error) return <UserNotFound />

    const { getUser } = data;

    const handleModal = (type) => {
        switch(type) {
            case 'avatar':
                setTitleModal('Cambia tu foto de perfil');
                setChildrenModal(<AvatarForm setShowModal={setShowModal} auth={auth} />);
                setShowModal(true);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <Grid className='profile'>

                <Grid.Column width={5} className='profile__left'>
                    <Image src={getUser.avatar ? getUser.avatar : Avatar} onClick={() => username === auth.username && handleModal('avatar')} />
                </Grid.Column>

                <Grid.Column width={11} className='profile__right'>
                    <div>HeaderProfile</div>
                    <div>Followers</div>
                    <div className='other'>
                        <p className='name'>{getUser.name}</p>
                        {
                            getUser.siteWeb && (
                                <a href={getUser.siteWeb} target='_blank' className='siteWeb'>
                                    {getUser.siteWeb}
                                </a>
                            )
                        }

                        {
                            getUser.description && (
                                <p className='description'>{getUser.description}</p>
                            )
                        }
                    </div>
                </Grid.Column>

            </Grid>
            <ModalBasic 
                show={showModal} 
                setShow={setShowModal}
                title={titleModal}>
                {childrenModal}
            </ModalBasic>
        </>
    );
};

export default Profile;