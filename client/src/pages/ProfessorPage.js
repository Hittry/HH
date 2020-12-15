import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/msg.hook";
export const ProfessorPage = () => {
    const {error, request, clearError, result} = useHttp()
    const history = useHistory()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
    const [vac, setVac] = useState(
        {prof: ''}
    )
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHead = event =>{
        setVac({...vac, [event.target.name]: event.target.value})
    }
    const pressHead = async () => {
        try {
            const data = await request('/api/done/professor', 'POST', {...vac})
            history.push(`/choose/${data.prof}`)
        } catch (e) {
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        placeholder="Введите имя пользователя"
                        id="prof"
                        type="text"
                        name="prof"
                        value={vac.prof}
                        onChange={changeHead}
                    />
                    <label htmlFor="prof">Введите имя пользователя</label>
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
        </div>
    )
}