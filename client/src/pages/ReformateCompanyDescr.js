import React, {useState, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";

export const ReformateCompanyDescr = () => {
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
        {compname: '', phone: '', location: ''}
    )
    const changeHead = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHead = async () => {
        try{
            await request('/api/comp/infoCompany', 'POST', {...form})
        } catch (e) {
        }
    }


    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Введите имя своей компании"
                        id="compname"
                        type="text"
                        name="compname"
                        value={form.compname}
                        onChange={changeHead}
                    />
                    <label htmlFor="compname">Введите имя своей компании</label>
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
                        placeholder="Введите место расположения"
                        id="location"
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={changeHead}
                    />
                    <label htmlFor="location">Введите место расположения</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text"
                        onClick={registerHead}
                        disabled={loading}
                    >
                        Изменить данные
                    </button>
                </div>
            </div>
        </div>
    )
}