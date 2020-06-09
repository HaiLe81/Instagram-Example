import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DataContext } from "../DataProvider/DataProvider";
import { useRouter } from '../hooks/useRouter';
import { getCookie } from '../services/storage';
import { FullLoading } from "../components/common/FitLoading";

export const RouteWithAuth = ({ redirectPath = '/login', path, children, ...rest }) => {
    const context = useContext(DataContext);
    const router = useRouter();
    const existedToken = getCookie(process.env.REACT_APP_COOKIE_KEY);

    if(context.loggedIn){
        return(
            <Route path={path} {...rest}>
                {children}
            </Route>
        )
    }
    if(existedToken && context.initloading === true){
        return <FullLoading/>
    }
	const from = router.pathname
    return <Redirect to={{ pathname: redirectPath, state: { from } }} />
}