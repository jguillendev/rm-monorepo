import { Counter } from "../components/Counter";
import { ErrorCard } from "../components/ErrorCard";
import { LoadingCard } from "../components/LoadingCard";
import { useHttpRequest } from "../hooks/useHttpRequest";
import { IRequest } from "../interfaces/interfaces";
import { config } from "../configuration/config";
interface IAnswerOne {
    answered:number;
    notAnswered:number;
}

export const useAnswerOne = (param: IRequest) => useHttpRequest<any,IAnswerOne>(param);


export const AnswersOne = () =>{


    const {isLoading, data, error} = useAnswerOne({
        url:`${config.apis.answers.url}/one`
    });

    return <div className="bg-gray-200 shadow-md py-3 px-3 rounded-md">
        <p className="text-sm text-gray-400">respuestas contestadas y no contestadas</p>
        {
            isLoading === false && data 
            ?   <div className="flex space-x-2 justify-center items-center py-2">
                    <Counter title="respondidas" number={data.answered}/>
                    <Counter title="no respondidas" number={data.notAnswered}/>
                </div> 
            : <LoadingCard />
        }

        {
            isLoading === false && error && <ErrorCard error={error}/>
        }
    </div>
}
