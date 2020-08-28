import React from "react";
import { Popover, TextField } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

import { StyledPaper, StyledButton } from "./../styled/ModifyPopover";

interface Props {
    anchorEl: HTMLElement | null;
    todoText: string;
    handlePopoverClose(): void;
    handlePopoverChange(event: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleModify(): void;
}

export const ModifyPopover: React.FC<Props> = ({
    anchorEl,
    todoText,
    handlePopoverClose,
    handlePopoverChange,
    handleModify,
}: Props) => {
    const open = Boolean(anchorEl);
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <StyledPaper>
                <TextField variant="outlined" name="text" value={todoText} onChange={handlePopoverChange} multiline />
                <StyledButton variant="contained" color="primary" onClick={handleModify}>
                    <DoneIcon />
                </StyledButton>
            </StyledPaper>
        </Popover>
    );
};
