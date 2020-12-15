import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {FindPage} from "./pages/FindPage";
import {DescriptionPage} from "./pages/DescriptionPage";
import {AuthPage} from "./pages/AuthPage";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {VacationPage} from "./pages/VacantionPage";
import {ChangePage} from "./pages/ChangePage";
import {InfoPage} from "./pages/InfoPage";
import {DetailPage} from "./pages/DetailPage";
import {ProfessorPage} from "./pages/ProfessorPage";
import {ChooseProf} from "./pages/ChooseProf";
import {RatingPage} from "./pages/RatingPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route path="/find" exact>
                    <FindPage />
                </Route>
                <Route path="/detail/:username" >
                    <DetailPage />
                </Route>
                <Route path="/descr" exact>
                    <DescriptionPage />
                </Route>
                <Route path="/vacantion" exact>
                    <VacationPage />
                </Route>
                <Route path="/change" exact>
                    <ChangePage />
                </Route>
                <Route path="/professor" exact>
                    <ProfessorPage />
                </Route>
                <Route path="/choose/:prof" >
                    <ChooseProf />
                </Route>
                <Route path="/info" exact>
                    <InfoPage />
                </Route>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Route path="/vacantion" exact>
                <VacationPage />
            </Route>
            <Route path="/rat" exact>
                <RatingPage />
            </Route>
            <Route path="/professor" exact>
                <ProfessorPage />
            </Route>
            <Route path="/choose/:prof" >
                <ChooseProf />
            </Route>
            <Route path="/about" exact>
                <AboutPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}