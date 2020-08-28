export interface TodoInterface {
    id: number;
    text: string;
    isImportant: boolean;
    isDone: boolean;
    url?: string;
}

export interface StateInterface {
    todoList: TodoInterface[];
    mode: ModeType;
}

export interface ContextInterface {
    state: StateInterface;
    dispatch: Function;
}

export enum ActionType {
    SET_TODO,
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    MODIFY_TODO,
    CHANGE_MODE,
}

export enum ModeType {
    LIGHT = "light",
    DARK = "dark",
}

export type Action =
    | { type: ActionType.SET_TODO; payload: TodoInterface[] }
    | { type: ActionType.ADD_TODO; payload: TodoInterface }
    | { type: ActionType.MODIFY_TODO; payload: { id: number; text: string } }
    | { type: ActionType.DELETE_TODO | ActionType.COMPLETE_TODO; payload: number }
    | { type: ActionType.CHANGE_MODE; payload: ModeType };
