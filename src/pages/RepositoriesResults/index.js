import { makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useRepositories } from '../../hooks/repositories.hook';

const useStyles = makeStyles({
  textStyle:{
    color: '#C45F77',
    textAlign: 'center',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    maxWidth: '80%',
    margin: '5% 10%',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  textItem: {
    maxWidth: '80%',
    marginLeft: '10%',
  },
  itemStyle:{
    color: '#864B57',
    font: 'bold'
  }
})

function RepositoriesResults(){
  const classes = useStyles();
  const { searchValue } = useParams();
  const repositories = useRepositories(searchValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout();
  }, []);

  return(
    <>
      <Header title="GitHub (versão-busca)" subtitle="Projeto apresentado a JustForYou!" />
      <Typography className={classes.textStyle}>Repositórios</Typography>
      {loading ? <Loading /> : (
        <>
          {repositories.length ? (
            <div className={classes.textItem}>
              {repositories.map(( item, index) => (
                <ul>
                  <li>
                    <a href={`${searchValue}/branches/${item.name}`} className={classes.itemStyle}>
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
          </div>
        ): 
          <p className={classes.textItem}>Não existe nenhum repositório!</p>}
        </>
      )}
    </>
  )
}

export default RepositoriesResults;