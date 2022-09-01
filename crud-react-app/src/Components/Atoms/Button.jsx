import React from 'react'
import { styled, } from '@mui/system';
import { hover } from '@testing-library/user-event/dist/hover';

const Button = (props) => {
    const { buttonType , value } = props
    const MyButton = styled('button')(() => ({
        color: 'white',
        backgroundColor: '#1976d2',
        padding: 5,
        borderRadius: 4,
        width: '100px',
        textAlign: 'center',
        margin: 10,
        border: 'none',
        transition : '1s',
        ":hover":{
            textDecoration: 'none',
    backgroundColor: 'rgb(21, 101, 192)',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
        }
    }));
    return (
        <MyButton type={buttonType}>{value}</MyButton>
    )
}

export default Button