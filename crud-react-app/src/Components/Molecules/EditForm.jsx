import React, { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { action } from '../../Redux/index'
import Button from '../Atoms/Button'
import  {Inp} from '../Atoms/Input'
import Label from '../Atoms/Label'


const EditForm = (props) => {
    const dispatch = useDispatch()
    const { handleClose } = props
    const { post } = useSelector(state => state.post)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    useEffect(() => {
        if (post === undefined) {
            console.log("it is undefined")
            // setTitle(post.title)
            // setBody(post.body)
        } else {
            setTitle(post.title)
            setBody(post.body)
        }
    }, [])

    const Form = styled('form')(() => ({

    }))
    
 
    const handleSubmit = (e, id) => {
        console.log(id)
        let newpost = {
            id: id,
            title: title,
            body: body
        }

        e.preventDefault()
        dispatch(action.updatePost(newpost))
        handleClose()

    }
        
    return (
        <>
          <form action="" onSubmit={(e) => { handleSubmit(e , post.id) }}>
        <h2>Edit a note</h2>
        <Label value={'Title'} />
            <Inp type='text'  value={title} name={'newTitle'} onChange={(e)=>setTitle(e.target.value)} />
        
        <Label value={'Body'} />
            <Inp type='text'  value={body} name={'newBody'}  onChange={(e)=>setBody(e.target.value)} />
        
        <Button buttonType={'submit'} value='Edit note' />
      </form>
            
        </>
    )
}

export default EditForm