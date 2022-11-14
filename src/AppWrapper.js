import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Person from "./pages/Person";
const AppWrapper = () => {

    return (
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/person/:username" exact component={Person} />
        </Routes>
    );
};

export default AppWrapper;
