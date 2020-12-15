import React, {useState, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const RatingPage = () => {
    const { error, request, clearError, result, loading} = useHttp()
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
        {username: '',rate: ''}
    )
    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            console.log({...form})
            await request('/api/otz/rat', 'POST', {...form})
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
                <div className="input-field">
                    <input
                        placeholder="Введите образование"
                        id="rate"
                        type="text"
                        name="rate"
                        value={form.rate}
                        onChange={changeHead}
                    />
                    <label htmlFor="rate">Введите отзыв с рейтингом</label>
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
        </div>
    )
}