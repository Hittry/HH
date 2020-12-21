import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHead = () =>{
        //event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return(
        <nav>
            <div className="nav-wrapper blue darken-2">
                <NavLink to="/" className="brand-logo">HeadHunter</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/find">Ваши объявления</NavLink></li>
                    <li><NavLink to="/professor">Выбрать по профессии</NavLink></li>
                    <li><NavLink to="/descr">Добавить объявление</NavLink></li>
                    <li><NavLink to="/change">Изменить свой пароль</NavLink></li>
                    <li><NavLink to="/vacantion">Вакансии пользователей</NavLink></li>
                    <li><NavLink to="/info">Изменить свою вакансию</NavLink></li>
                    <li><NavLink to="/deleteVac">Удалить свою вакансию</NavLink></li>
                    <li><a href="/" onClick={logoutHead}>Выход</a></li>
                </ul>
            </div>
        </nav>
    )
}