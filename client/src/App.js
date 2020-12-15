import React from 'react'
import 'materialize-css'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar";
import {NavNotAuth} from "./components/NavNotAuth";
import {State} from "./components/State";

function App() {
    const {token, login, logout, userId, ready} =  useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    if (!ready) {
        return <State />
    }
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                { isAuthenticated && <Navbar />}
                { !isAuthenticated && <NavNotAuth />}
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
