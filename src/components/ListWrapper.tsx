import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { ContextInterface } from "../interfaces-types";
import { StateContext, ListItem } from ".";
import { StyledGrid } from "./../styled/ListWrapper";

export const ListWrapper: React.FC = () => {
    const { state }: ContextInterface = useContext(StateContext);
    return (
        <Box height="100%">
            <StyledGrid container spacing={2}>
                {state.todoList.map((elem) => (
                    <ListItem key={elem.id} todo={elem} />
                ))}
            </StyledGrid>
        </Box>
    );
};
