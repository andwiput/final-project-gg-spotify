import { useEffect } from 'react'
import { getProfile } from './spotify'
import { useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store'
import { login, userStore } from '../store/auth'

export const useAuthen = () => {
  const { isAuth, token, user } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!isAuth && window.location.hash) {
      const params: string[] = window.location.hash.substr(1).split('&')
      params.forEach((param: string) => {
        const [key, value]: string[] = param.split('=')
        if (key === 'access_token') dispatch(login(value))
      })
    }
    if (isAuth && user === null) {
      getProfile(token).then(({data}) => {
        dispatch(userStore(data))
        history.push('/create-playlist')
      })
    }
  }, [isAuth, token, user, history, dispatch])

  return useAppSelector(state => state.auth)
}