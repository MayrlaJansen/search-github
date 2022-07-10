import { makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useBranches } from '../../hooks/branchs.hook';

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

function BranchesResults(){
  const classes = useStyles();
  const { searchValue, repoName } = useParams();
  const branches = useBranches(searchValue, repoName);

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
      <Typography className={classes.textStyle}>Branches</Typography>
      {loading ? <Loading /> : (
        <>
        {branches.length ? (
          <div className={classes.textItem}>
            {branches.map(( item, index) => (
              <ul>
                <li>
                  <a href={`/repositorios/${searchValue}/commits/${repoName}`} className={classes.itemStyle}>
                    {item.name}
                  </a>
                </li>
              </ul>
            ))}
        </div>
      ): <p className={classes.textItem}>Não existe nenhuma branch!</p>}
        </>
      )}
    </>
  )
}

export default BranchesResults;