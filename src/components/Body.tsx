import React, { useContext } from "react";

import { ContextInterface } from "./../interfaces-types";
import { AddForm, ListWrapper, StateContext } from ".";

import { StyledContainer } from "./../styled/Body";

export const Body: React.FC = () => {
    const { state }: ContextInterface = useContext(StateContext);
    return (
        <StyledContainer maxWidth="xl" mode={state.mode}>
            <AddForm />
            <ListWrapper />
        </StyledContainer>
    );
};
