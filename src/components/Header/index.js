import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Logo from '../../assets/logo.png'

const useStyles = makeStyles({
  imageStyle:{
    width: "80%", 
    marginLeft: "10%", 
    marginTop: "5%"
  },
  header: {
    marginTop: '30px',
    fontSize: '24px',
    textAlign: "center", 
  }
})

function Header({title, subtitle}){
  const classes = useStyles();

  return(
    <div>
       <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid item xs={10} sm={2}>
        <a href="/">
          <img className={classes.imageStyle} src={Logo} alt="Logo" />
        </a>
      </Grid>
      <Grid item xs={8} sm={4} className={classes.header}>
        <Typography>
         <strong>{title}</strong>
        </Typography>
        <Typography style={{fontSize: '18px', color: '#676666'}}>
         {subtitle}
        </Typography>
      </Grid>
    </Grid>
    </div>
  )
}

export default Header;