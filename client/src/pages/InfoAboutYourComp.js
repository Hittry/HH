import React, {useState,useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {State} from "../components/State";
import {NewLoaderForCompanies} from "../components/NewLoaderForCompanies";
export const InfoAboutYourComp = () => {
    const [comp, setComp] = useState(null)
    const {request, loading} = useHttp()
    const companies = useParams().compname

    const getComp = useCallback(async () => {
        try{
            const fetched = await request(`/api/comp/${companies}`, 'GET', null)

            //setVac(fetched[0])
            setComp(fetched)
        } catch (e) {
        }
    },[request, companies])
    useEffect(() => {
        getComp()
    }, [getComp])
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
            { !loading && comp && <NewLoaderForCompanies companies={comp} />}
        </>
    )
}