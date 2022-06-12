import React from "react";
import { AnswerContent, AnswerData } from "../components/AnswerContent";
import { Counter } from "../components/Counter";
import { ErrorCard } from "../components/ErrorCard";
import { LoadingCard } from "../components/LoadingCard";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { IRequest } from "../interfaces/interfaces";

type AnswerFourData = {
    oldest:AnswerData;
    newest:AnswerData;
}
export const useAnswerThree = (param: IRequest) => useHttpRequest<any, AnswerFourData>(param);

export const AnswersFour = () =>{

    const {isLoading, data, error} = useAnswerThree({
        url:"http://localhost:5000/api/answers/four"
    });

    return <div className="bg-gray-200 shadow-md py-3 px-3 rounded-md">
        <p className="text-sm text-gray-400 pb-2">respuesta más <strong className="text-slate-500">vieja</strong> y más <strong className="text-green-500">actual</strong></p>
        {
            isLoading == false && data
            ? <div className="flex flex-col space-y-2">
                <AnswerContent data={data.oldest} className="bg-slate-300 rounded-md p-2"/> 
                <AnswerContent data={data.newest} className="bg-green-200 rounded-md p-2"/> 
            </div>
            : <LoadingCard />
        }

        {
            isLoading == false && error && <ErrorCard error={error}/>
        }
    </div>
}
