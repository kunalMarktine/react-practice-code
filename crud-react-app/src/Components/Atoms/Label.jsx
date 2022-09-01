import React from 'react'
import { styled } from '@mui/system';

const FromLabel = styled('label')(()=>({

}))

const Label = (props) => {
    const {value} = props

  return (
    <>
    <FromLabel>{value}</FromLabel>
    </>
  )
}

export default Label