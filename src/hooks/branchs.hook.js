import { useState, useEffect } from 'react';
import api from '../api/api'

export function useBranches(username, repoName) {
  const [listBranches, setListBranches] = useState([])

  useEffect(() => {
    api
      .get(`/repos/${username}/${repoName}/branches`)
      .then((response) => {
        setListBranches(response.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [username, repoName])

  return listBranches
}