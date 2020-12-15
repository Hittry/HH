import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError, result} = useHttp()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
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
            await request('/api/auth/register', 'POST', {...form})
        } catch (e) {
        }
    }

    const loginHead = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h4>Страница авторизации, если вы не регистрировались, сначала нажмите на кнопку регистрация, а потом войти</h4>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите email"
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
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="red-input"
                                    value={form.password}
                                    onChange={changeHead}
                                />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn white black-text darken-4"
                            style={{marginRight: 10}}
                            onClick={loginHead}
                            disabled={loading}
                        >
                            Войти
                        </button>
                        <button
                            className="btn white black-text"
                            onClick={registerHead}
                            disabled={loading}
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}