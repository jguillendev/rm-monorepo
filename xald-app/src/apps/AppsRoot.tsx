import React, {Suspense, useState, useLayoutEffect} from 'react';
import { BrowserRouter, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
// https://reactrouter.com/docs/en/v6
import {appSplash, ISplashSettings} from '~/apps/splash';
import SplashView from './SplashView';
import AdminRoutes from '~/is-admin-app/AdminAppRoutes';
import PublicRoutes from '~/is-public-app/PublicAppRoutes';

interface IAppRoutes {
    isProd:boolean;
}
const AppsRoutes = ({isProd=true}:IAppRoutes)=> {

    
    const navigate = useNavigate(); 

    const [ authState, setAuthState] = useState({
        isAuth:false,
        checked:false,
    });
    const [ splash, setSplash ] = useRecoilState<ISplashSettings>(appSplash);

    useLayoutEffect(()=>{
        //simulando que se checa la autenticacion
        setTimeout(function(){
            setAuthState({
                isAuth:true,
                checked:true,
            });
        },1500);
    });


    if(!authState.checked)
    return <SplashView location="appRoutes.tsx"/>
    else if (authState.isAuth)
    return <AdminRoutes/>
    else
    return <PublicRoutes />
}

const AppsRoot = () => {
    return (
        <RecoilRoot>
            <Suspense fallback={<SplashView location="logedInRoutes:fallback"/>}>
                <BrowserRouter>
                    <AppsRoutes isProd={false}/>
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    )
}
  
export default AppsRoot;

  