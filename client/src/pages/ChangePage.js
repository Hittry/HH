import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const ChangePage = () => {
    const {loading, error, request, clearError} = useHttp()
    const msg = useMessage()
    useEffect(() =>{
        msg(error)
        clearError()
    },[error, msg, clearError])
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const [form, setForm] = useState(
        {email: '', password: ''}
    )
    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            await request('/api/descr/change', 'POST', {...form})
        } catch (e) {
        }
    }


    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Изменить пароль</h1>
                <p>Если ошибка не выдается, значит пароль был заменен успешно</p>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Форма ввода</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите ваш email"
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="red-input"
                                    value={form.email}
                                    onChange={changeHead}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите новый пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="red-input"
                                    value={form.password}
                                    onChange={changeHead}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn white black-text"
                            onClick={registerHead}
                            disabled={loading}
                        >
                            Change password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}