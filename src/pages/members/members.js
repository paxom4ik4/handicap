import React from 'react';

import './members.css';
import {Member} from "../../components/member/member";

import alvarez from './images/alvarezjpg.jpg';
import anton from './images/anton.jpg';
import vanesy from './images/vanesy.jpg';
import arut from './images/arut.jpg';

const DEFAULT_CLASSNAME = 'members';

export const Members = () => {
    return (
        <div className={DEFAULT_CLASSNAME}>
            <h3 align={'right'}>Состав HRT</h3>
            <div className={`${DEFAULT_CLASSNAME}_list`}>
                <Member text={"Один из главарей HRT Team. Он может сломать, прострелить, пробить и что угодно сделать с твоим коленом, если вдруг твой диалог зайдет в неправильный ракурс. Будь осторожен с ним"} title={"Иван денисенко"} img={vanesy} />
                <Member text={"АД АА - Инициалы говорят сами за себя. Грубо говоря адеватный ровный человек который сможет если что постоять за себя, особенно если дело касается предыдущей персоны"} title={"Аугусто Даниель Альварез Арельяно"} img={alvarez}/>
                <Member text={"Дрочила обыкновенный. В целом информации пока что о нем мало, но обязательно появится. Копаем"} title={'Артур Бобруйск'} img={arut}/>
                <Member text={"Дрочила обыкновенный. В целом информации пока что о нем мало, но обязательно появится. Копаем"} title={'Антонио Сергеевич'} img={anton}/>
            </div>
        </div>
    )
}
