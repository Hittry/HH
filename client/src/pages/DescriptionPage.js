import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/msg.hook";

export const DescriptionPage = () => {
    const {error, request, clearError, result} = useHttp()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
    const auth = useContext(AuthContext)
    const [vac, setVac] = useState(
        {username: '',prof: '', exp: '', phone: '', education: '', rate: ''}
    )

    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHead = event =>{
        setVac({...vac, [event.target.name]: event.target.value})
    }
    const pressHead = async () => {
        try {
            const data = await request('/api/descr/exp', 'POST', {...vac}, {
                Authorization: `Bearer ${auth.token}`
            })
        } catch (e) {
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Введите имя пользователя"
                        id="username"
                        type="text"
                        name="username"
                        value={vac.username}
                        onChange={changeHead}
                    />
                    <label htmlFor="username">Введите имя пользователя</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите описание"
                        id="prof"
                        type="text"
                        name="prof"
                        value={vac.prof}
                        onChange={changeHead}
                    />
                    <label htmlFor="prof">Введите профессию</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите описание"
                        id="exp"
                        type="text"
                        name="exp"
                        value={vac.exp}
                        onChange={changeHead}
                    />
                    <label htmlFor="exp">Введите описание</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите номер телефона"
                        id="phone"
                        type="text"
                        name="phone"
                        value={vac.phone}
                        onChange={changeHead}
                    />
                    <label htmlFor="phone">Введите номер телефона</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите образование"
                        id="education"
                        type="text"
                        name="education"
                        value={vac.education}
                        onChange={changeHead}
                    />
                    <label htmlFor="education">Введите образование</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text darken-4"
                        style={{marginRight: 10}}
                        onClick={pressHead}
                    >
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}

