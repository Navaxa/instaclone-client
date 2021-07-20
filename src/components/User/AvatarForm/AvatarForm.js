import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import './AvatarForm.scss';
import { useDropzone } from 'react-dropzone';
import { GET_USER, UPDATE_AVATAR, DELETE_AVATAR } from '../../../gql/user';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

const AvatarForm = ({ setShowModal, auth }) => {

    const [updateAvatar] = useMutation(UPDATE_AVATAR, {
        update(cache, {data: {updateAvatar}}) {
            const { getUser } = cache.readQuery({
                query: GET_USER,
                variables: {username: auth.username}
            });

            cache.writeQuery({
                query: GET_USER,
                variables: {username: auth.username},
                data: {
                    getUser: {...getUser, avatar: updateAvatar.urlAvatar}
                }
            })
        }
    });
    const [loading, setLoading] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);

    const [deleteAvatar] = useMutation(DELETE_AVATAR, {
        update(cache) {
            const { getUser } = cache.readQuery({
                query: GET_USER,
                variables: {username: auth.username}
            });

            cache.writeQuery({
                query: GET_USER,
                variables: {username: auth.username},
                data: {
                    getUser: {...getUser, avatar: ''}
                }
            })
        }
    });

    const onDrop = useCallback(async acceptedFiles => {
        const file = acceptedFiles[0];
        try {
            setLoading(true);
            const { data } = await updateAvatar({ variables: { file } });
            const { status } = data.updateAvatar;
            if (status) {
                setTimeout(() => {
                    setLoading(false);
                    setShowModal(false);
                    toast.success('Sa cambio con éxito!');
                }, 1000);
                return;
            }
            toast.error('Error al actualizar avatar!');
            setLoading(false);
        } catch (err) {
            console.log('error => ', err);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        multiple: false,
        onDrop,
    });

    const onDeleteAvatar = async () => {
        try {
            const result = await deleteAvatar();
            const {data} = result;
            setLoadingDelete(true);
            setTimeout(() => {
                setLoadingDelete(false);
                if(!data.deleteAvatar) {
                    toast.warn('Error al eliminar el avatar');
                } else {
                    setShowModal(false);
                    toast.success('Avatar eliminaro!');
                }
            }, 1000);
        } catch(err) {
            console.log('Error => ', err);
        }
    }

    return (
        <div className='avatar-form'>
            <Button
                {...getRootProps()}
                loading={loading}>Cargar una foto</Button>
            <Button 
                onClick={onDeleteAvatar}
                loading={loadingDelete}>Eliminar foto actual</Button>
            <Button onClick={() => setShowModal(false)}>Cancelar</Button>
            <input {...getInputProps()}></input>
        </div>
    );
};

export default AvatarForm;