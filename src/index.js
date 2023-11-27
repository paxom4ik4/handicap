import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Main} from "./pages/main/main";
import {Header} from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Members} from "./pages/members/members";
import {Footer} from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/members" element={<Members />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
