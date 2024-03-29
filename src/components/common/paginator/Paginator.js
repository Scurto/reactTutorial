import React, {useState} from "react";
import css from './Paginator.module.css';

let Paginator = ({totalItemsCount, pagesSize, currentPage, onPageChange, portionSize=10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pagesSize);

    let pages = [];

    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber -1) * portionSize+1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return <div className={css.paginator}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber -1)}}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
            return <span className={css.pageNumber + " " + (currentPage === p && css.selectedPage)} key={p} onClick={(e) => {
                onPageChange(p)
            }}>{p}</span>
        })}
        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber +1)}}>NEXT</button>}
    </div>
}

export default Paginator;