import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const DeleteVac = () => {
    const { error, request, clearError, result} = useHttp()
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
        {username: ''}
    )

    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            await request('/api/descr/deleteVac', 'POST', {...form})
        } catch (e) {
        }
    }


    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Введите свое имя"
                        id="username"
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={changeHead}
                    />
                    <label htmlFor="username">Введите свое имя</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text darken-4"
                        style={{marginRight: 10}}
                        onClick={registerHead}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>

    )
}