import React, { useContext, useRef } from "react";
import { useFormik } from "formik";
import { TextField, Switch, Popper, Typography } from "@material-ui/core";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

import {
    StyledFormGroup,
    StyledFormControlLabel,
    StyledWrapperBox,
    StyledPaper,
    StyledButton,
} from "./../styled/AddForm";
import { ContextInterface, TodoInterface } from "../interfaces-types";
import { addTodo, url } from "../store";
import { StateContext } from ".";

interface FormValues {
    text: string;
    isImportant: boolean;
    isDone: boolean;
}

export const AddForm: React.FC = () => {
    const textFieldRef = useRef<HTMLInputElement | null>(null);
    const { dispatch }: ContextInterface = useContext(StateContext);

    const formik = useFormik({
        initialValues: {
            text: "",
            isImportant: false,
            isDone: false,
        },

        onSubmit: (values: FormValues): void => {
            const todo: TodoInterface = {
                id: getID(),
                text: values.text,
                isImportant: values.isImportant,
                isDone: values.isDone,
            };

            const fetchDataObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todo),
            };

            fetch(`${url}/todoList`, fetchDataObj).then((response) => {
                if (response.ok) {
                    dispatch(addTodo(todo));
                    formik.handleReset(values);
                } else {
                    console.log(response);
                }
            });
        },

        validate: (values: FormValues): { text?: string } => {
            if (!values.text) {
                return { text: "required" };
            } else {
                return {};
            }
        },
    });

    const getID = (): number => new Date().getTime();

    return (
        <StyledWrapperBox>
            <form onSubmit={formik.handleSubmit}>
                <StyledFormGroup row>
                    <StyledFormControlLabel
                        control={
                            <Switch
                                name="isImportant"
                                checked={formik.values.isImportant}
                                onChange={formik.handleChange}
                                color="secondary"
                            />
                        }
                        label="Important"
                    />
                    <StyledFormControlLabel
                        control={
                            <Switch
                                name="isDone"
                                checked={formik.values.isDone}
                                onChange={formik.handleChange}
                                color="primary"
                            />
                        }
                        label="Done"
                    />
                </StyledFormGroup>

                <StyledFormGroup>
                    <TextField ref={textFieldRef} variant="outlined" multiline {...formik.getFieldProps("text")} />
                    <Popper
                        placement="bottom"
                        anchorEl={textFieldRef.current}
                        open={Boolean(formik.errors.text && formik.touched.text)}
                    >
                        <StyledPaper>
                            <ArrowUpward />
                            <Typography>This field is required.</Typography>
                            <ArrowUpward />
                        </StyledPaper>
                    </Popper>
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledButton variant="contained" color="primary" type="submit">
                        Add task
                    </StyledButton>
                </StyledFormGroup>
            </form>
        </StyledWrapperBox>
    );
};
