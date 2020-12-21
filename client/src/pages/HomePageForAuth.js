import React from 'react'
import {NavLink} from "react-router-dom";

export const HomePageForAuth = () => {
    return (
            <div className="card-panel grey darken-2">
                <li><NavLink to="/companyCreate" className="yellow-text text-darken-1">Создать объявление от компании</NavLink></li>
                <li><NavLink to="/companyVac" className="yellow-text text-darken-1">Посмотреть все объявления от компаний</NavLink></li>
                <li><NavLink to="/infoCompany" className="yellow-text text-darken-1">Редакитровать ваше объявление</NavLink></li>
                <li><NavLink to="/findCompany" className="yellow-text text-darken-1">Поиск ваших объявлений</NavLink></li>
                <li><NavLink to="/deleteCompany" className="yellow-text text-darken-1">Удалите одно из ваших объявлений</NavLink></li>
            </div>
    )
}