import { useState, useEffect } from 'react';
import api from '../api/api'

export function useRepositories(username) {
  const [listRepositories, setListRepositories] = useState([])

  useEffect(() => {
    api
      .get(`users/${username}/repos`)
      .then((response) => {
        setListRepositories(response.data)
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [username])

  return listRepositories
}