import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from './navbar/navbar';
import CarouselComponent from './carousel/carousel';
import FooterComponent from './footer/footer';
import CardComponent from './card/card';
import FriendComponent from './friends/friend';

ReactDOM.render(
    <span>
        <NavBar></NavBar>
        <CarouselComponent></CarouselComponent>
        <FriendComponent></FriendComponent>
        <CardComponent></CardComponent>
        <FooterComponent></FooterComponent>
    </span>
    ,document.getElementById('root'))