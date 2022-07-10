import React, { useState } from 'react';
import {  IconButton, Input, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../theme';

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    marginTop: "5%",
    marginLeft: "25%",
    marginBottom: "6%",
    [theme.breakpoints.down('xs')]: {
      maxWidth: "80%",
      marginLeft: "10%",
      marginBottom: "15%",
    },
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: "8px",
  },
})

function Search(){
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  return(
    <div className={classes.root}>
      <Input 
        className={classes.searchBar} 
        id="search" 
        label="Encontre um restaurante" 
        variant="outlined" 
        value={searchValue}
        onChange={(event)=>{setSearchValue(event.target.value)}}
        fullWidth
        startAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            disabled={searchValue === ''}
            edge="end"
            href={`/repositorios/${searchValue}`}
          >
            {<SearchIcon sx={{color: "#ED1C24"}} />}
          </IconButton>
        </InputAdornment>}
        />
    </div>
  )
}

export default Search;