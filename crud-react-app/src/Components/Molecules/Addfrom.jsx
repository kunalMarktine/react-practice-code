import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { action } from '../../Redux/index'
import Button from '../Atoms/Button'
import  {Inp} from '../Atoms/Input'
import Label from '../Atoms/Label'

const Addfrom = () => {
  const dispatch = useDispatch()
  const [ newPost , setNewpost] = useState({newTitle : '' , newBody : ''})
  const handleSubmit = (e) => {
   
    let data = {
      title: newPost.newTitle,
      body : newPost.newBody
    }
    e.preventDefault()
    dispatch(action.newPost(data))
    
}
const {log} = console
  const handleChange = (e) => {

    log('eevent ->>>>>', e.target.value)
 

    setNewpost({...newPost,[e.target.name] : e.target.value})

}


  return (
    <>
      <form action="" onSubmit={(e) => { handleSubmit(e) }}>
        <h2>Add a Note</h2>
        <Label value={'Title'} />
        <Inp type='text' value={newPost.newTitle} name={'newTitle'} onChange={handleChange} />
        <Label value={'Body'} />
        <Inp type='text'  value={newPost.newBody} name={'newBody'} onChange={handleChange} />
        <Button buttonType={'submit'} value={'Add Note'} />
      </form>
    </>
  )
}

export default Addfrom