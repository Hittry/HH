import React, {useState,useCallback, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {State} from "../components/State";
import {NewLoaderForCompanies} from "../components/NewLoaderForCompanies";
export const AllCompanyPage = () => {
    const [comp, setCompany] = useState(null)
    const {request, loading} = useHttp()

    const getComp = useCallback(async () => {
        try{
            const fetched = await request(`/api/comp/companyVac`, 'GET', null)

            setCompany(fetched)

        } catch (e) {
        }
    },[request])
    useEffect(() => {
        getComp()
    }, [getComp])
    if (loading) {
        return <State />
    }

    return (
        <>
            { !loading && comp && <NewLoaderForCompanies companies={comp} />}
        </>
    )
}