import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const DeleteCompany = () => {
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
        {compname: '', description: ''}
    )
    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            await request('/api/comp/deleteCompany', 'POST', {...form})
        } catch (e) {
        }
    }


    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Введите название компании"
                        id="compname"
                        type="text"
                        name="compname"
                        value={form.compname}
                        onChange={changeHead}
                    />
                    <label htmlFor="compname">Название компании</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите место расположения"
                        id="description"
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={changeHead}
                    />
                    <label htmlFor="description">Введите место расположения</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text darken-4"
                        style={{marginRight: 10}}
                        onClick={registerHead}
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>

    )
}