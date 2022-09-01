import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '../Atoms/Button'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditForm from './EditForm';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { action } from '../../Redux/index'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const  EditModal = (props) => {
  const  {postid}  = props;
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGetPost = (id) =>{
      console.log(id)
     dispatch(action.getSinglePost(id))
     
    
  }



  return (
    <div>
      <span  onClick={()=>{handleOpen(); handleGetPost(postid)}}>

      <Button buttonType={'button'} value={'Edit note'} />
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default EditModal
