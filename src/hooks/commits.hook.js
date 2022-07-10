import { useState, useEffect } from 'react';
import api from '../api/api'

export function useCommits(username, repoName) {
  const [listCommits, setListCommits] = useState([])

  useEffect(() => {
    api
      .get(`/repos/${username}/${repoName}/commits`)
      .then((response) => {
        console.log(response)
        setListCommits(response.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [username, repoName])

  return listCommits
}