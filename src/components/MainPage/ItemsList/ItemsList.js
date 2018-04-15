import React, { Component } from 'react';
import classes from './ItemsList.css';
import Worker from "./Worker/Worker";
let items = [
    {
        "id": 1,
        "first_name": "Hakim",
        "last_name": "Gillice",
        "email": "hgillice0@meetup.com",
        "avatar": "https://robohash.org/dolorumfugitoptio.jpg?size=150x150&set=set1",
        "company": "Aimbo",
        "adress": "953 Heffernan Circle",
        "phone": "842-376-3072"
    },
    {
        "id": 2,
        "first_name": "Lisha",
        "last_name": "Mashal",
        "email": "lmashal1@geocities.jp",
        "avatar": "https://robohash.org/estetlaborum.jpg?size=150x150&set=set1",
        "company": "Brainlounge",
        "adress": "86 Grasskamp Terrace",
        "phone": "690-289-5789"
    },
    {
        "id": 3,
        "first_name": "Lisha",
        "last_name": "Mashal",
        "email": "lmashal1@geocities.jp",
        "avatar": "https://robohash.org/estetlaborum.jpg?size=150x150&set=set1",
        "company": "Brainlounge",
        "adress": "86 Grasskamp Terrace",
        "phone": "690-289-5789"
    },
];

const ItemsList = (props)=> {
    return <div className={classes.ItemsList}>
        {items.map(item=> <Worker data={item} key={item.id}/>)}
    </div>
};

export default ItemsList;

