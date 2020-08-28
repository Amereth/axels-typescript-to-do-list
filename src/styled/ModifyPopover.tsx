import { styled } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";

export const StyledPaper = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    width: "700px",
    maxWidth: "80vw",
    padding: ".5rem",
});

export const StyledButton = styled(Button)({
    alignSelf: "center",
    width: "9rem",
    marginTop: ".5rem",
});
