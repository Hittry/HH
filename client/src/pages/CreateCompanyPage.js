import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/msg.hook";

export const CreateCompanyPage = () => {
    const {error, request, clearError, result} = useHttp()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
    const auth = useContext(AuthContext)
    const [comp, setComp] = useState(
        {compname: '', description: '', vac: '', phone: '', location: ''}
    )
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHead = event =>{
        setComp({...comp, [event.target.name]: event.target.value})
    }
    const pressHead = async () => {
        try {
           await request('/api/comp/companyCreate', 'POST', {...comp}, {
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
                        placeholder="Введите имя компании"
                        id="compname"
                        type="text"
                        name="compname"
                        value={comp.compname}
                        onChange={changeHead}
                    />
                    <label htmlFor="compname">Введите имя компании</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите кого хотите найти"
                        id="description"
                        type="text"
                        name="description"
                        value={comp.description}
                        onChange={changeHead}
                    />
                    <label htmlFor="description">Введите кого хотите найти</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите описание"
                        id="vac"
                        type="text"
                        name="vac"
                        value={comp.vac}
                        onChange={changeHead}
                    />
                    <label htmlFor="vac">Введите описание вакансии</label>
                </div>
                <div className="input-field">
                    <input
                        placeholder="Введите номер телефона"
                        id="phone"
                        type="text"
                        name="phone"
                        value={comp.phone}
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
                        value={comp.location}
                        onChange={changeHead}
                    />
                    <label htmlFor="location">Введите место расположения</label>
                </div>
                <div className="card-action">
                    <button
                        className="btn white black-text darken-4"
                        style={{marginRight: 10}}
                        onClick={pressHead}
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>
    )
}