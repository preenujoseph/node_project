import React from 'react';
import ReactDOM from 'react-dom'
import HeaderComponent from './header/header';
import ProfileData from './profile/profile';
import ImageComponent from './card/card';
import TravelComponent from './travel/travel';

ReactDOM.render(
    <span>
        <HeaderComponent></HeaderComponent>
        <ProfileData></ProfileData>
        <ImageComponent></ImageComponent>
        <TravelComponent></TravelComponent>
    </span>
    ,document.getElementById('root'))