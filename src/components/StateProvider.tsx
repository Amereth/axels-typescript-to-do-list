import React, { useReducer, useEffect } from "react";
import { StateInterface, TodoInterface, ContextInterface, ModeType } from "../interfaces-types";
import { reducer, setTodo, url } from "./../store";

const initState: StateInterface = {
    todoList: [],
    mode: ModeType.LIGHT,
};

export const StateContext = React.createContext({} as ContextInterface);

export const StateProvider: React.FC = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        fetch(`${url}/todoList`)
            .then((data) => data.json())
            .then((data: TodoInterface[]) => dispatch(setTodo(data)));
    }, []);

    return <StateContext.Provider value={{ state, dispatch }}>{props.children}</StateContext.Provider>;
};
