import React from "react";

export const Loader= ({vace}) => {
    return (
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Профи</span>
                                <h5>Имя пользователя: </h5>
                                <p>{vace.username}</p>
                                <h5>Профессия: </h5>
                                <p>{vace.prof}</p>
                                <h5>Образование </h5>
                                <p>{vace.education}</p>
                                <h5>Контактные данные </h5>
                                <p>{vace.phone}</p>
                                <h5>Описание </h5>
                                <p>{vace.exp}</p>
                                <h5>Рейтинг </h5>
                                <p>{vace.rate}</p>
                                <h5>Дата регистрации </h5>
                                <strong>{new Date(vace.date).toLocaleDateString()}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
)

}