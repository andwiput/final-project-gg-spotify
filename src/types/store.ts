import {Track, UserProfile} from './spotify'

export interface PlaylistState {
    tracks: Track[],
    selectedTracks: string[],
    form: {
        title: string,
        description: string
    }
}

export interface AuthState {
    isAuth: boolean,
    token: string,
    user: UserProfile | null
}