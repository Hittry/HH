import React, {useState,useCallback, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {State} from "../components/State";
import {NewLoader} from "../components/NewLoader";
export const VacationPage = () => {
    const [vac, setVac] = useState(null)
    const {request, loading} = useHttp()

    const getUser = useCallback(async () => {
        try{
            const fetched = await request(`/api/descr/vacantion`, 'GET', null)

            setVac(fetched)

        } catch (e) {
        }
    },[request])
    useEffect(() => {
        getUser()
    }, [getUser])
    if (loading) {
        return <State />
    }

    return (
        <>
            { !loading && vac && <NewLoader vace={vac} />}
        </>
    )
}