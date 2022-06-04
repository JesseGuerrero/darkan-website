import React, {useEffect, useState} from "react";
import "./GrandExchange.scss"
import fetch from "node-fetch";

function GrandExchange({props}) {
    const [geBuyData, setBuyGEData] = useState([]);
    const [geSellData, setSellGEData] = useState([]);
    const fetchGrandExchangeJSON = async () => {
        let response = await fetch(window.location.origin + "/api/grand-exchange/buy");
        let buyJSON = await response.json();
        response = await fetch(window.location.origin + "/api/grand-exchange/sell");
        let sellJSON = await response.json();

        let geBuyDataJSON = []
        let geSellDataJSON = []
        for(let i = 0; i < buyJSON.length; i++) {
            let offer = {}
            response = await fetch(window.location.origin + "/api/grand-exchange/map/item-id/" + buyJSON[i].itemId);
            offer.name = await response.text()
            offer.itemid = buyJSON[i].itemId
            offer.amount = (buyJSON[i].amount - buyJSON[i].completedAmount)
            offer.price = buyJSON[i].price
            offer.total = offer.amount * offer.price
            geBuyDataJSON.push(offer)
        }
        for(let i = 0; i < sellJSON.length; i++) {
            let offer = {}
            response = await fetch(window.location.origin + "/api/grand-exchange/map/item-id/" + sellJSON[i].itemId);
            offer.name = await response.text()
            offer.itemid = sellJSON[i].itemId
            offer.amount = (sellJSON[i].amount - sellJSON[i].completedAmount)
            offer.price = sellJSON[i].price
            offer.total = offer.amount * offer.price
            geSellDataJSON.push(offer)
        }

        setBuyGEData(geBuyDataJSON)
        setSellGEData(geSellDataJSON)
    }

    useEffect(() => {
        fetchGrandExchangeJSON();
    }, []);
    return(
        <div className="App">
            <header className="App-header">
                <div className="main-container-grandexchange">
                    <div className="sub-container-grandexchange">
                        <div className="header-grandexchange">
                            <h1>Grand Exchange Tracker</h1>
                            <h2>Buy & Sell in-game</h2>
                        </div>
                        <div className="flex flex-jc-c">
                            <table>
                                {geSellData.map(
                                    (offer) => {
                                            return (<thead>
                                            <th id="type">To Sell</th>
                                            <th id="name"><img src={"ge_icons/" + offer.itemid + ".png"}/>{offer.name}</th>
                                            <th id="amount-left">{offer.amount}</th>
                                            <th id="price-per-item">{offer.price}</th>
                                            <th id="price-for-rest">{offer.total}</th>
                                            </thead>)
                                    }
                                )}
                                {geBuyData.map(
                                    (offer) => {
                                        return (<thead>
                                        <th id="type">Purchasable</th>
                                        <th id="name"><img src={"ge_icons/" + offer.itemid + ".png"}/>{offer.name}</th>
                                        <th id="amount-left">{offer.amount}</th>
                                        <th id="price-per-item">{offer.price}</th>
                                        <th id="price-for-rest">{offer.total}</th>
                                        </thead>)
                                    }
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default GrandExchange;
