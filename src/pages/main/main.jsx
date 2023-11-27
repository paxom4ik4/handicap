import React from 'react';

import './main.css';
import {Card, CardComponent} from "../../components/card/card";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const DEFAULT_CLASSNAME = 'main';

export const Main = () => {
    return (
        <div className={DEFAULT_CLASSNAME}>
            <h3 align={'right'}>Добро пожаловать</h3>

            <div>
                ...в сообщество <b>"Handicap Race Team" </b>
                На этой странице вы найдете подробную информацию о нашем составе,
                о самых ярких личностях, машинах и не только!
            </div>
            <div >
                Чтобы оставаться всегда в курсе событий из жизни HRT
                ругелярно посещайте эту страничку. Будет пополнение новым контеном,
                а именно: Как альварез променял JDM на BMW по низу рынка, разрыве барабанной перепонки
                от сабвуфера Ивана, и новом участнике дорожного движения Даниила - он же Toyota Chaser
            </div>

            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px'}}><NewspaperIcon /> Последние новости</h3>

            <div className={`${DEFAULT_CLASSNAME}_news`}>
                <CardComponent title={"Альварез и его e36"} subtitle={"JDM ONE LOVE"} text={"Раздвать круги на парковке Простора не простая задача - но справится ли он?"} />
                <CardComponent title={"Иван.. Ваня... Vanos???"} subtitle={"езч по низу рынка"} text={"Вы когда нибудь задавались вопросом? Почему хондаводы активно переходят на баварский автопром? Читайте подробнее последние сводки"}/>
            </div>
        </div>
    )
}
