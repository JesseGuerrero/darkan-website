import React, {useContext} from "react";
import HighscoresContext from "../../utils/contexts/HighscoresContext";

export default function HighscoresNavigation() {
    let { category, setCategory, page, setPage, skill, setSkill } = useContext(HighscoresContext);
    return (
        <div>
            <div className="pagination-container flex flex-jc-c">
                <div>
                    {(page < 3 ? (
                        <ul className="flex flex-ai-c">
                            {(parseInt(page) <= 1 ? (
                                <li style={{visibility: "hidden"}} className="prev-next"><i className="fas fa-arrow-left"></i>
                                </li>
                            ) : (
                                <li className="prev-next"><a onClick={()=>{setPage(parseInt(page)-1)}}><i
                                    className="fas fa-arrow-left"></i></a></li>
                            ))}
                            <li><a onClick={()=>{setPage(1)}} className={parseInt(page) == 1 ? "pagination-link active" : "pagination-link"}>1</a></li>
                            <li><a onClick={()=>{setPage(2)}} className={parseInt(page) == 2 ? "pagination-link active" : "pagination-link"}>2</a></li>
                            <li><a onClick={()=>{setPage(3)}} className={parseInt(page) == 3 ? "pagination-link active" : "pagination-link"}>3</a></li>
                            <li className="page-dots">...</li>
                            <li><a onClick={()=>{setPage(parseInt(page) + 10)}} className="pagination-link">{parseInt(page) + 10}</a></li>
                            <li className="prev-next"><a onClick={()=>{setPage(parseInt(page)+1)}}><i className="fas fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex flex-ai-c">
                            <li className="prev-next"><a onClick={()=>{setPage(parseInt(page)-1)}}><i
                                className="fas fa-arrow-left"></i></a></li>
                            <li><a onClick={()=>{setPage(1)}} className="pagination-link">1</a></li>
                            <li className="page-dots">...</li>
                            <li><a onClick={()=>{setPage(parseInt(page)-1)}} className="pagination-link">{parseInt(page) - 1}</a></li>
                            <li><a className="pagination-link active">{parseInt(page)}</a></li>
                            <li><a onClick={()=>{setPage(parseInt(page)+1)}} className="pagination-link">{parseInt(page) + 1}</a></li>
                            <li className="page-dots">...</li>
                            <li><a onClick={()=>{setPage(parseInt(page) + 10)}} className="pagination-link">{parseInt(page) + 10}</a></li>
                            <li className="prev-next"><a onClick={()=>{setPage(parseInt(page)+1)}}><i className="fas fa-arrow-right"></i></a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}
