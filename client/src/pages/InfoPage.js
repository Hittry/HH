import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const InfoPage = () => {
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
        {username: '',prof: '',exp: '', phone: '', education: '', rate: ''}
    )
    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            await request('/api/descr/info', 'POST', {...form})
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
                        value={form.username}
                        onChange={changeHead}
                    />
                    <label htmlFor="username">Введите имя пользователя</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите род деятельности"
                        id="prof"
                        type="text"
                        name="prof"
                        value={form.prof}
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
                        value={form.exp}
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
                        value={form.phone}
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
                        value={form.education}
                        onChange={changeHead}
                    />
                    <label htmlFor="education">Введите образование</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text"
                        onClick={registerHead}
                        disabled={loading}
                    >
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}