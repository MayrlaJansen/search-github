import { Button, makeStyles, Tooltip } from '@material-ui/core';
import React from 'react';
import NotFoundImage from '../../assets/notFound.png'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

function NotFound(){
  const classes = useStyles();
  const navigate = useNavigate();

  return(
    <div className={classes.container}>
      <Tooltip title="Voltar para a home">
        <Button 
          onClick={()=>{navigate('/')}}>
            <img style={{width: '50%'}} src={NotFoundImage} alt="Not Found" />
        </Button>
      </Tooltip>
    </div>
  )
}

export default NotFound;