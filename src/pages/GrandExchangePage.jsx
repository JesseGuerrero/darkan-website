import React, {useContext, useEffect, useMemo, useState} from 'react';
import axios from '../utils/axios.js';
import '../stylesheets/grand-exchange/GrandExchange.scss';
import GrandExchangeContext from "../utils/contexts/GrandExchangeContext.js";
import {getItemIdToName} from "../utils/constants";
import GrandExchangeTable from "../components/grandexchange/GrandExchangeTable.jsx";
import GrandExchangeNavigation from "../components/grandexchange/GrandExchangeNavigation.jsx";

export default function GrandExchangePage() {
    let [ offers, setOffers ] = useState([]);
    let [ offerType, setOfferType ] = useState("buy")
    let [ sortType, setSortType ] = useState("name")
    let [ isAscending, setIsAscending ] = useState(true)
    let [ page, setPage ] = useState(1)

    let GrandExchangeProvider = useMemo(() => ({ page, setPage, offers, setOffers, sortType, setSortType, isAscending, setIsAscending }), [ page, setPage, offers, setOffers, sortType, setSortType, isAscending, setIsAscending ]);

    useEffect(() => {

        let fetchGrandExchange = async () => {
            try {
                let res = await axios.get(`ge/${offerType}?limit=40`);
                let offerData = res.data
                function compareNames( a, b ) {
                    if ( getItemIdToName(a.itemId) < getItemIdToName(b.itemId) ){
                        if(isAscending)
                            return -1;
                        return 1;
                    }
                    if ( getItemIdToName(a.itemId) > getItemIdToName(b.itemId) ){
                        if(isAscending)
                            return 1;
                        return -1;
                    }
                    return 0;
                }

                function compareAmount( a, b ) {
                    if ( a.amount < b.amount ){
                        if(isAscending)
                            return -1;
                        return 1;
                    }
                    if ( a.amount > b.amount ){
                        if(isAscending)
                            return 1;
                        return -1;
                    }
                    return 0;
                }

                function comparePrice( a, b ) {
                    if ( a.price < b.price ){
                        if(isAscending)
                            return -1;
                        return 1;
                    }
                    if ( a.price > b.price ){
                        if(isAscending)
                            return 1;
                        return -1;
                    }
                    return 0;
                }

                if(sortType == "name")
                    offerData.sort(compareNames)
                if(sortType == "amount")
                    offerData.sort(compareAmount)
                if(sortType == "price")
                    offerData.sort(comparePrice)
                setOffers(offerData);
            } catch(error) {
                console.error(error);
            }

        };

        fetchGrandExchange();

    }, [ offers ]);

    return (
        <GrandExchangeContext.Provider value={GrandExchangeProvider}>
            <div className="ge-container">
                <div className="header-highscores">
                    <h1>Grand Exchange</h1>
                    <h2>Track, Trade Items, Build Wealth</h2>
                </div>
                <div className="sub-header-ge">
                    <button className={"ge-button" + (offerType === 'buy' ? " button-selected" : "")}
                        onClick={(e) => {
                            setOfferType('buy');
                            //setPage(1);
                         }} type="button home-button">
                        Buy
                    </button>
                    <button className={"ge-button" + (offerType === 'sell' ? " button-selected" : "")}
                        onClick={(e) => {
                            setOfferType('sell');
                            //setPage(1);
                        }} type="button contact-button">
                        Sell
                    </button>
                </div>
                <GrandExchangeTable />
                {/*<GrandExchangeNavigation />*/}
            </div>
        </GrandExchangeContext.Provider>
    )
}
