import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, FormControlLabel, Switch, Box } from "@material-ui/core";

import { ModeType } from "./../interfaces-types";
import { StateContext } from ".";
import { changeMode } from "./../store";

export const Header: React.FC = () => {
    const { state, dispatch } = useContext(StateContext);
    const [checked, setChecked] = useState(false);

    const handleChange = (): void => {
        if (state.mode === ModeType.LIGHT) {
            dispatch(changeMode(ModeType.DARK));
        } else {
            dispatch(changeMode(ModeType.LIGHT));
        }
        setChecked(!checked);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" color="inherit">
                    Typescript, Formik and Material-UI To-Do-List
                </Typography>
                <Box marginLeft="auto">
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange} />}
                        label="Dark Mode"
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};
