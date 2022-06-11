import React from "react";
import {NavLink} from "react-router-dom";

interface IHeaderBar {
    viewName:string;
}
export const HeaderBar = ({viewName}:IHeaderBar) =>{

    return <head className="flex flex-col md:flex-row bg-slate-800 shadow-md sticky">
        <div className="flex space-x-2 py-4 px-4">
            <img className="h-14 w-14 rounded-full border-green-400 border-4  object-cover" src="https://i.pinimg.com/originals/e9/e0/75/e9e075386271a5449e62e885cd8fa226.jpg" />
            <div className="flex flex-col justify-center">
                <p className="font-bold leading-none text-xl text-gray-400">J Alberto Guillén</p>
                <p className="font-light leading-tight text-lg text-gray-300">Dev Senior</p>
            </div>
        </div>
        <div className="flex-1"></div>
        <div className=" bg-slate-700 md:bg-slate-800">
            <ul className="flex justify-around md:space-x-2 py-4 px-4">
            <NavLink to="/" replace
                    className={ viewName =="home" ? " text-yellow-500" : "text-gray-200" }
                ><li className="hover:text-yellow-500 cursor-pointer">Home</li>
                </NavLink>
                <NavLink to="/answers" replace
                    className={ viewName == "answers" ? " text-yellow-500" : "text-gray-200" }
                ><li className="hover:text-yellow-500 cursor-pointer">Asnwers</li>
                </NavLink>
                <NavLink to="/flights" replace
                    className={ viewName == "flights" ? " text-yellow-500" : "text-gray-200" }
                ><li className="hover:text-yellow-500 cursor-pointer">Flights</li>
                </NavLink>
            </ul>
        </div>
    </head>
}