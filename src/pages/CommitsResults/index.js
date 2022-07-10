import { makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useCommits } from '../../hooks/commits.hook';
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

function CommitsResults(){
  const classes = useStyles();
  const { searchValue, repoName } = useParams();
  const commits = useCommits(searchValue, repoName);

  return(
    <>
      <Header title="GitHub (versão-busca)" subtitle="Projeto apresentado a JustForYou!" />
      <Typography className={classes.textStyle}>Commits</Typography>
        {commits.length ? (
          <div className={classes.textItem}>
            {commits.map(( item, index) => (
              <ul>
                <li className={classes.itemStyle}>
                  {item.name}
                </li>
              </ul>
            ))}
        </div>
      ): <p className={classes.textItem}>Não existe nenhum commit!</p>}
    </>
  )
}

export default CommitsResults;