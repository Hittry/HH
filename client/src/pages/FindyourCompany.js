import React, {useState,useCallback,useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/msg.hook";
export const FindyourCompany = () => {
    const {error, request, clearError, result} = useHttp()
    const history = useHistory()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
    const auth = useContext(AuthContext)
    const [comp, setComp] = useState(
        {compname: ''}
    )
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHead = event =>{
        setComp({...comp, [event.target.name]: event.target.value})
    }
    const pressHead = async () => {
        try {
            const data = await request('/api/comp/findCompany', 'POST', {...comp}, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push(`/greatComp/${data.compname}`)
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
                    <div className="card-action">
                        <button
                            className="btn white black-text darken-4"
                            onClick={pressHead}
                        >
                            Нажмите
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
