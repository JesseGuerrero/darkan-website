import React, { useContext, useEffect, useState } from 'react';
import axios from '../../utils/axios.js';
import '../../stylesheets/grand-exchange/GrandExchange.scss';
import HighscoresContext from '../../utils/contexts/HighscoresContext.js';
import {getItemIdToName} from "../../utils/constants";

export default function GrandExchangeTable() {
    let [ offers, setOffers ] = useState([]);

    useEffect(() => {

        let fetchGrandExchange = async () => {
            try {
                let res = await axios.get(`ge`);
                setOffers(res.data);
            } catch(error) {
                console.error(error);
            }

        };

        fetchGrandExchange();

    }, [ offers ]);

    return (
        <div className="ge-container flex flex-jc-c">
            <table>
                <thead>
                    <tr>
                        <th id='item-name'>Item</th>
                        <th id='item-type'>Type</th>
                        <th id='amount-left'>Amount Left</th>
                        <th id='price-each'>Price Each</th>
                    </tr>
                </thead>
                <tbody>
                    { offers.map((offer, index) => {
                        return (
                            <tr className='ge-table'>
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
