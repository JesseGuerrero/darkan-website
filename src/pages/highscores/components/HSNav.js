import React from "react";

function HSNav({pageState, pathHS}) {
    return (
        <div>
            <div className="pagination-container flex flex-jc-c">
                <div>
                    {(pageState <= 3 ? (
                        <ul className="flex flex-ai-c">
                            {(pageState <= 1 ? (
                                <li style={{visibility: "hidden"}} className="prev-next"><i className="fas fa-arrow-left"></i>
                                </li>
                            ) : (
                                <li className="prev-next"><a href={pathHS + (pageState - 1)}><i
                                    className="fas fa-arrow-left"></i></a></li>
                            ))}
                            <li><a href={pathHS + "1"}
                                   className={pageState == 1 ? "pagination-link active" : "pagination-link"}>1</a></li>
                            <li><a href={pathHS + "2"}
                                   className={pageState == 2 ? "pagination-link active" : "pagination-link"}>2</a></li>
                            <li><a href={pathHS + "3"}
                                   className={pageState == 3 ? "pagination-link active" : "pagination-link"}>3</a></li>
                            <li className="page-dots">...</li>
                            <li><a href={pathHS + String(pageState + 10)} className="pagination-link">{pageState + 10}</a></li>
                            <li className="prev-next"><a href={pathHS + (pageState + 1)}><i className="fas fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex flex-ai-c">
                            <li className="prev-next"><a href={pathHS + (pageState - 1)}><i
                                className="fas fa-arrow-left"></i></a></li>
                            <li><a href={pathHS + "1"} className="pagination-link">1</a></li>
                            <li className="page-dots">...</li>
                            <li><a href={pathHS + String(pageState - 1)} className="pagination-link">{pageState - 1}</a></li>
                            <li><a href={pathHS + String(pageState)} className="pagination-link active">{pageState}</a></li>
                            <li><a href={pathHS + String(pageState + 1)} className="pagination-link">{pageState + 1}</a></li>
                            <li className="page-dots">...</li>
                            <li><a href={pathHS + String(pageState + 10)} className="pagination-link">{pageState + 10}</a></li>
                            <li className="prev-next"><a href={pathHS + (pageState + 1)}><i className="fas fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HSNav;
