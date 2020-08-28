import React from "react";
import { styled } from "@material-ui/core/styles";
import { Grid, Typography, Paper, PaperProps, Box, BoxProps } from "@material-ui/core";

interface StyledPaperWrapperProps {
    isDone: boolean;
}

export const StyledPaperWrapper = styled(
    ({ isDone, ...other }: StyledPaperWrapperProps & Omit<PaperProps, keyof StyledPaperWrapperProps>) => (
        <Paper {...other} />
    )
)({
    backgroundColor: ({ isDone }: StyledPaperWrapperProps) => (isDone ? "grey" : "white"),
    color: ({ isDone }: StyledPaperWrapperProps) => (isDone ? "white" : "black"),
    marginBottom: "1rem",
});

interface StyledBoxProps {
    isImportant: boolean;
}

export const StyledBox = styled(({ isImportant, ...other }: StyledBoxProps & Omit<BoxProps, keyof StyledBoxProps>) => (
    <Box {...other} />
))({
    borderRadius: "50%",
    width: "1rem",
    height: "1rem",
    backgroundColor: ({ isImportant }: StyledBoxProps) => (isImportant ? "red" : "transparent"),
});

export const StyledTypography = styled(Typography)({
    height: "100%",
    display: "flex",
    alignItems: "center",
});

export const StyledGrid = styled(Grid)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 2rem",
});
