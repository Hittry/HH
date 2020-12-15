import React from 'react'
import {NavLink} from "react-router-dom";

export const NavNotAuth = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-2">
                <NavLink to="/" className="brand-logo">HeadHunter</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/vacantion">Вакансии</NavLink></li>
                    <li><NavLink to="/professor">Выбрать по профессии</NavLink></li>
                    <li><NavLink to="/rat">Оставить отзыв</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                    <li><NavLink to="/auth">Авторизация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}