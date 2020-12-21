import React from 'react'
import {NavLink} from "react-router-dom";

export const HomePage = () => {
    return (
            <div className="card-panel grey darken-2">
                <li><NavLink to="/companyVac" className="yellow-text text-darken-1">Посмотреть все объявления от компаний</NavLink></li>
                <li><NavLink to="/findCompany" className="yellow-text text-darken-1">Поиск по названию компании</NavLink></li>
            </div>
    )
}