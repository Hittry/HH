import React, {useState,useCallback,useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {State} from "../components/State";
import {Loader} from "../components/Loader";
export const DetailPage = () => {
    const {token} = useContext(AuthContext)
    const [vac, setVac] = useState(null)
    const {request, loading} = useHttp()
    const vacs = useParams().username

    const getUser = useCallback(async () => {
        try{
            const fetched = await request(`/api/descr/${vacs}`, 'GET', null,{
                Authorization: `Bearer ${token}`
            })

            setVac(fetched[0])

        } catch (e) {
        }
    },[request, token, vacs])
    useEffect(() => {
        getUser()
    }, [getUser])
    if (loading) {
        return <State />
    }

    return (
        <>
            { !loading && vac && <Loader vace={vac} />}
        </>
    )
}