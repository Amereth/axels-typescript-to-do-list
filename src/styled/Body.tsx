import React from "react";
import { styled } from "@material-ui/core/styles";
import { Container, ContainerProps } from "@material-ui/core";

import { ModeType } from "./../interfaces-types";

interface StyledContainerProps {
    mode: ModeType;
}

export const StyledContainer = styled(
    ({ mode, ...other }: StyledContainerProps & Omit<ContainerProps, keyof StyledContainerProps>) => (
        <Container {...other} />
    )
)({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: "2rem",
    backgroundColor: ({ mode }: StyledContainerProps) => (mode === "light" ? "white" : "lightslategrey"),
});
