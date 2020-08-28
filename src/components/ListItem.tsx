import React, { useState, useContext, useRef } from "react";
import { Grid, Switch, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";

import { ModifyPopover, StateContext } from ".";
import { StyledPaperWrapper, StyledTypography, StyledGrid, StyledBox } from "./../styled/ListItem";
import { ContextInterface, TodoInterface } from "../interfaces-types";
import { completeTodo, deleteTodo, modifyTodo, url } from "./../store";

interface Props {
    todo: TodoInterface;
}

export const ListItem: React.FC<Props> = ({ todo }: Props) => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const [todoText, setTodoText] = useState(todo.text);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const { dispatch }: ContextInterface = useContext(StateContext);

    const handlePopoverOpen = (): void => {
        setAnchorEl(textRef.current);
    };

    const handlePopoverClose = (): void => {
        setAnchorEl(null);
        setTodoText(todo.text);
    };

    const handlePopoverChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTodoText(event.currentTarget.value);
    };

    const handleChange = (): void => {
        dispatch(completeTodo(todo.id));
    };

    const handleDelete = (): void => {
        const fetchDataObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(`${url}/todoList/${todo.id}`, fetchDataObj).then((response) => {
            response.ok ? dispatch(deleteTodo(todo.id)) : console.log(response);
        });
    };

    const handleModify = (): void => {
        const fetchDataObj = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...todo,
                text: todoText,
            }),
        };

        fetch(`${url}/todoList/${todo.id}`, fetchDataObj).then((response) => {
            if (response.ok) {
                dispatch(modifyTodo({ id: todo.id, text: todoText }));
                handlePopoverClose();
            } else {
                console.log(response);
            }
        });
    };

    return (
        <Grid item xs={12}>
            <StyledPaperWrapper isDone={todo.isDone}>
                <Grid container spacing={3}>
                    <StyledGrid item xs={3} sm={2} lg={1}>
                        <Switch checked={todo.isDone} onChange={handleChange} name="checkedB" color="primary" />
                        <StyledBox isImportant={todo.isImportant} />
                    </StyledGrid>

                    <Grid item xs>
                        <StyledTypography ref={textRef}>{todo.text}</StyledTypography>
                        <ModifyPopover
                            anchorEl={anchorEl}
                            todoText={todoText}
                            handlePopoverClose={handlePopoverClose}
                            handlePopoverChange={handlePopoverChange}
                            handleModify={handleModify}
                        />
                    </Grid>

                    <StyledGrid item xs={4} sm={3} lg={2} xl={1}>
                        <Button variant="contained" onClick={handlePopoverOpen}>
                            <EditIcon />
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleDelete}>
                            <ClearIcon />
                        </Button>
                    </StyledGrid>
                </Grid>
            </StyledPaperWrapper>
        </Grid>
    );
};
