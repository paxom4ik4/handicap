import React from 'react';

import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';

const DEFAULT_CLASSNAME = 'footer';

export const Footer = () => {
    return (
        <footer className={DEFAULT_CLASSNAME}>
            <a rel="noreferrer" href={'https://www.instagram.com/handicap_race/'} target={"_blank"}>Ждем вас тут <InstagramIcon /></a>
        </footer>
    )
}
