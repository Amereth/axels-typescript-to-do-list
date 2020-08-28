import { styled } from "@material-ui/core/styles";
import { FormGroup, FormControlLabel, Box, Paper, Button } from "@material-ui/core";

export const StyledFormGroup = styled(FormGroup)({
    justifyContent: "center",
    marginBottom: "1rem",
});

export const StyledFormControlLabel = styled(FormControlLabel)({
    margin: "0 1rem",
});

export const StyledWrapperBox = styled(Box)({
    margin: "2rem 0",
});

export const StyledPaper = styled(Paper)({
    display: "flex",
    alignItems: "center",
    padding: "1rem",
});

export const StyledButton = styled(Button)({
    width: "9rem",
    margin: "0 auto",
});
