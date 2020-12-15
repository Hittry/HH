import {createContext} from 'react'

function nth() {}
export const AuthContext = createContext({
    token: null,
    userId: null,
    login: nth,
    logout: nth,
    isAuthenticated: false
})