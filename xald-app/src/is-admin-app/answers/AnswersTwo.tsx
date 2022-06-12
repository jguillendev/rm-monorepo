import React from "react";
import { AnswerContent, AnswerData } from "../components/AnswerContent";
import { Counter } from "../components/Counter";
import { ErrorCard } from "../components/ErrorCard";
import { LoadingCard } from "../components/LoadingCard";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { IRequest } from "../interfaces/interfaces";

export const useAnswerTwo = (param: IRequest) => useHttpRequest<any, AnswerData>(param);

export const AnswersTwo = () =>{

    const {isLoading, data, error} = useAnswerTwo({
        url:"http://localhost:5000/api/answers/two"
    });

    return <div className="bg-gray-200 shadow-md py-3 px-3 rounded-md">
        <p className="text-sm text-gray-400">la respuesta con la mayor reputacion</p>
        {
            isLoading == false && data
            ? <AnswerContent data={data}/> 
            : <LoadingCard />
        }

        {
            isLoading == false && error && <ErrorCard error={error}/>
        }
    </div>
}
