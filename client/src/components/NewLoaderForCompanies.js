import React from "react";

export const NewLoaderForCompanies= ({companies}) => {
    return (
        <>
            {companies.map(comp => (
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Компания</span>
                                <h5>Название компании: </h5>
                                <p>{comp.compname}</p>
                                <h5>Описание компании: </h5>
                                <p>{comp.description}</p>
                                <h5>Кого ищет: </h5>
                                <p>{comp.vac}</p>
                                <h5>Контактные данные: </h5>
                                <p>{comp.phone}</p>
                                <h5>Место расположения: </h5>
                                <p>{comp.location}</p>
                                <h5>Дата регистрации :</h5>
                                <strong>{new Date(comp.date).toLocaleDateString()}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}