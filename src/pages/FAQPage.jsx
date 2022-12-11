import React from 'react';
import Faq from 'react-faq-component';
import '../stylesheets/faq/Faq.scss';
import {Link} from "react-router-dom";

const data = {
    title: "Darkan FAQ",
    rows: [
        {
            title: "How many quests are in Darkan?",
            content: "As of July 14th, 2022 there are 33 of 183 quests implemented."
        },
        {
            title: "How often does Darkan get updated?",
            content: "This varies as Darkan is a passion project, it may receive many rapid updates sometimes even daily or it could be a while in-between updates. It also depends on the scope of the changes.\n"
        },
        {
            title: "How many people play the server?",
            content: "The server has a low player count, but with some very dedicated players. World 2 seems to draw more players than world 1 due to it being easier."
        },
        {
            title: "What is the experience rates?",
            content: "Darkan offers multiple experience rates. On world 1, the server has minimal custom features and is a 1x experience rate. World 2 is 25x experience, and offers QOL features that are more often seen in your typical RSPS."
        },
        {
            title: "What revision is Darkan?",
            content: "Darkan is revision 727, with a game cache from roughly July 2012. "
        }]
}

const styles = {
    bgColor: "transparent",
    titleTextColor: "#DEDEDE",
    rowTitleColor: "#DEDEDE",
    rowContentColor: "#DEDEDE",
    arrowColor: "#DEDEDE",
};

export default function FAQPage() {
    return (
        <div className='faq-main-container'>
            <div className="body-container">
                <Faq
                    data={data}
                    styles={styles}
                />
                <p>For launcher issues <Link to="/launcher-issues"><u>click here</u></Link></p>
            </div>
        </div>
    )
}
