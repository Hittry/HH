import React, {useState,useCallback,useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/msg.hook";
export const FindPage = () => {
    const {error, request, clearError, result} = useHttp()
    const history = useHistory()
    const msg = useMessage()
    useEffect(() =>{
        msg(result)
        msg(error)
        clearError()
    },[error, msg, clearError, result])
    const auth = useContext(AuthContext)
    const [vac, setVac] = useState(
        {username: ''}
    )
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const changeHead = event =>{
        setVac({...vac, [event.target.name]: event.target.value})
    }
    const pressHead = async () => {
        try {
            const data = await request('/api/descr/find', 'POST', {...vac}, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push(`/detail/${data.username}`)
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
                            value={vac.username}
                            onChange={changeHead}
                        />
                     <label htmlFor="username">Введите имя пользователя</label>
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
