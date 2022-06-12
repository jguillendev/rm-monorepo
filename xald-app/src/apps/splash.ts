import { atom } from "recoil";

export interface ISplashSettings {
    isLoading:boolean;
    status?:string;
    title?:string;
    subtitle?:string;
    message?:string;
}

export const appSplash = atom<ISplashSettings>({
    key: 'app-splash-view',
    default: {
       isLoading:true,
       status:'app:init',
       title: 'por favor espere',
       subtitle: 'Cargando...',
       message:'Iniciando...',
    }
});