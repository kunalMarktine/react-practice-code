import React from 'react'
import { styled, } from '@mui/system';
import Button from '../Atoms/Button';
import { useDispatch } from 'react-redux'

import { action } from '../../Redux/index'
import EditModal from './EditModal';


const Wrapper = styled('div')(() => ({

    padding: '0.5rem',
    width: '345px',
    margin: '2rem',
    boxShadow: '0px -1px 16px 1px rgba(0,0,0,0.31)'
}))

const Cardcontent = styled('div')(() => ({
    padding: '0.5rem',
    width: '345px'
}))

const Title = styled('h2')(() => ({
    fontSize: '27px',
    margin: '10px 20px'

}))

const Para = styled('p')(() => ({
    fontSize: '15px',
    margin: '10px 20px'


}))

const CardItems = styled('div')(() => ({
    padding: '0.5rem'
}))



const Card = (props) => {
    const dispatch = useDispatch()
    const { post } = props
    function handleDelete(id) {
        console.log(post.id)
        dispatch(action.deletePost(id))

    }
    return (
        <>
            <Wrapper>
                <Cardcontent>
                    <Title>{post.title.slice(0, 20)}</Title>
                    <Para>{post.body.slice(0, 150)}</Para>
                </Cardcontent>
                <CardItems>
                    <span onClick={() => { handleDelete(post.id) }}>
                        <Button value={'Delete'}></Button>
                    </span>
                    <span >

                        <EditModal postid={post.id} />
                    </span>
                </CardItems>
            </Wrapper>

        </>
    )
}

export default Card