import { TodoInterface, StateInterface, ActionType, Action, ModeType } from "../interfaces-types";

// ACTION CREACTORS
export const setTodo = (payload: TodoInterface[]) => ({ type: 0, payload });

export const addTodo = (payload: TodoInterface) => ({ type: ActionType.ADD_TODO, payload });

export const deleteTodo = (payload: number) => ({ type: ActionType.DELETE_TODO, payload });

export const completeTodo = (payload: number) => ({ type: ActionType.COMPLETE_TODO, payload });

export const modifyTodo = (payload: { id: number; text: string }) => ({ type: ActionType.MODIFY_TODO, payload });

export const changeMode = (payload: ModeType) => ({ type: ActionType.CHANGE_MODE, payload: payload });

// REDUCER
export const reducer = (state: StateInterface, action: Action): StateInterface => {
    switch (action.type) {
        case ActionType.SET_TODO:
            return {
                ...state,
                todoList: action.payload,
            };
        case ActionType.ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat(action.payload),
            };
        case ActionType.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((elem) => elem.id !== action.payload),
            };
        case ActionType.COMPLETE_TODO:
            return {
                ...state,
                todoList: state.todoList.map((elem) => {
                    if (elem.id === action.payload) {
                        elem.isDone = !elem.isDone;
                    }
                    return elem;
                }),
            };
        case ActionType.MODIFY_TODO:
            return {
                ...state,
                todoList: state.todoList.map((elem) => {
                    if (elem.id === action.payload.id) {
                        elem.text = action.payload.text;
                    }
                    return elem;
                }),
            };
        case ActionType.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
};
