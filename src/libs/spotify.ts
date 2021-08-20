import { AlbumsResponse, PlaylistResponse, TracksResponse, UserProfile } from '../types/spotify'
import axios, { AxiosResponse } from 'axios'

export const baseURL = 'https://api.spotify.com/v1'

const send = axios.create({ baseURL })

export const spotifyAuthUrl = (): string => {
  const options: string = new URLSearchParams({
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID as string,
    redirect_uri: process.env.REACT_APP_URL as string,
    response_type: 'token',
    scope: 'playlist-modify-private',
  }).toString()
  return `https://accounts.spotify.com/authorize?${options}`
}

export const authorize = (): void => {
  window.location.href = spotifyAuthUrl()
}

export const getProfile = (accessToken: string): Promise<AxiosResponse<UserProfile>> => {
  return send.get(`/me`, {
    headers: { Authorization: 'Bearer ' + accessToken },
  })
}

export const getTracks = (accessToken: string, params: Object): Promise<AxiosResponse<TracksResponse>> => {
  return send.get('/search', {
    params,
    headers: { Authorization: 'Bearer ' + accessToken },
  })
}

export const getNewReleases = (accessToken: string): Promise<AxiosResponse<AlbumsResponse>> => {
  return send.get('/browse/new-releases', {
    headers: { Authorization: 'Bearer ' + accessToken },
  })
}

export const postPlaylist = (
  accessToken: string,
  userID: string,
  payload: Object
): Promise<AxiosResponse<PlaylistResponse>> => {
  return send.post(`/users/${userID}/playlists`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  })
}

export const postPlaylistTracks = (
  accessToken: string,
  id: string,
  payload: Object
): Promise<AxiosResponse<{ snapshot_id: string }>> => {
  return send.post(`/playlists/${id}/tracks`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  })
}