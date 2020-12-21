import React, {useState,useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {State} from "../components/State";
import {NewLoader} from "../components/NewLoader";
export const ChooseProf = () => {
    const [vac, setVac] = useState(null)
    const {request, loading} = useHttp()
    const vacs = useParams().prof

    const getUser = useCallback(async () => {
        try{
            const fetched = await request(`/api/done/${vacs}`, 'GET', null)

            //setVac(fetched[0])
            setVac(fetched)
        } catch (e) {
        }
    },[request, vacs])
    useEffect(() => {
        getUser()
    }, [getUser])
    if (loading) {
        return <State />
    }

    //return (
      //  <>
        //    { !loading && vac && <Loader vace={vac} />}
        //</>
    //)
    return (
        <>
            { !loading && vac && <NewLoader vace={vac} />}
        </>
    )
}