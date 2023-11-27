import React from 'react';

import './index.css';

import headerLogo from '../../assets/logo.png'
import {Link} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const DEFAULT_CLASSNAME = 'header';

export const Header = () => {

    return (
        <div className={DEFAULT_CLASSNAME} style={{ backgroundImage: `url(${headerLogo})` }}>
            <nav className={`${DEFAULT_CLASSNAME}_navigation`}>
                <Link to={'/'}> <HomeIcon /> Главная</Link>
                <Link to={'/members'}><PeopleAltIcon /> Участники</Link>
            </nav>
        </div>
    )
}
