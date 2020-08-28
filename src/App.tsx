import React from "react";

import { Header, Body, AddForm, ListWrapper, StateProvider } from "./components";
import { StyledBox } from "./styled/App";

const App: React.FC = () => {
    return (
        <StateProvider>
            <StyledBox>
                <Header />
                <Body>
                    <AddForm />
                    <ListWrapper />
                </Body>
            </StyledBox>
        </StateProvider>
    );
};

export default App;
