import { makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
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
  console.log(branches)

  return(
    <>
      <Header title="GitHub (versão-busca)" subtitle="Projeto apresentado a JustForYou!" />
      <Typography className={classes.textStyle}>Branches</Typography>
        {branches.length ? (
          <div className={classes.textItem}>
            {branches.map(( item, index) => (
              <ul>
                <li>
                  <a href={`${searchValue}/branches/${item.name}`} className={classes.itemStyle}>
                    {item.name}
                  </a>
                </li>
              </ul>
            ))}
        </div>
      ): <p className={classes.textItem}>Não existe nenhuma branch!</p>}
    </>
  )
}

export default BranchesResults;