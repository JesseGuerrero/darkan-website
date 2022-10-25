import React, {useContext, useEffect, useState} from 'react';
import axios from '../../utils/axios.js';

import GrandExchangeContext from "../../utils/contexts/GrandExchangeContext.js";

import {getItemIdToName, getSkillIDByName, skills} from '../../utils/constants.js';
import {click} from "@testing-library/user-event/dist/click";

export default function GrandExchangeTable() {
    let { page, setPage, offers, setOffers, sortType, setSortType, isAscending, setIsAscending } = useContext(GrandExchangeContext);
    const clickItemName = () => {
        if(sortType == "name")
            setIsAscending(!isAscending)
        setSortType("name")
    }
    const clickItemsLeft = () => {
        if(sortType == "amount")
            setIsAscending(!isAscending)
        setSortType("amount")
    }
    const clickItemPriceEach = () => {
        if(sortType == "price")
            setIsAscending(!isAscending)
        setSortType("price")
    }
    return (
        <div className='ge-table flex flex-jc-c'>
            <table>
                <thead>
                <tr>
                    <th id='item-name'><a onClick={clickItemName}>Item<i className={"fas fa-caret-down dwn-arrow" + (sortType == "name" ? " green " : " none ") + (isAscending ? "" : "upside-down")}></i></a></th>
                    <th id='item-type'>Type</th>
                    <th id='amount-left'><a onClick={clickItemsLeft}>Amount Left<i className={"fas fa-caret-down dwn-arrow" + (sortType == "amount" ? " green " : " none ") + (isAscending ? "" : "upside-down")}></i></a></th>
                    <th id='price-each'><a onClick={clickItemPriceEach}>Price Each<i className={"fas fa-caret-down dwn-arrow" + (sortType == "price" ? " green " : " none ") + (isAscending ? "" : "upside-down")}></i></a></th>
                </tr>
                </thead>
                <tbody>
                { offers.map((offer, index) => {
                    return (
                        <tr>
                            <td id='item-name'><img className="iron-icon" src={"/ge_icons_tradeable/" + offer.itemId + ".png"}/>{getItemIdToName(offer.itemId)}</td>
                            <td id='item-type'>{offer.offerType}</td>
                            <td id='amount-left'>{offer.amount.toLocaleString('en-US')}</td>
                            <td id='price-each'>{offer.price.toLocaleString('en-US')}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
