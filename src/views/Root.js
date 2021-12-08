import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainTemplate from "templates/MainTemplate";
import MainView from "./MainView";
import DetailsView from "./DetailsView";

const Root = () => (
    <BrowserRouter>
    <MainTemplate>
        <Routes>
           <Route exact='true' path='/' element={<MainView />} />
           <Route path='/details' element={<DetailsView />} />
        </Routes>
    </MainTemplate>
    </BrowserRouter>
);

export default Root;