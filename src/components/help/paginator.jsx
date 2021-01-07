import React, {useState} from 'react';
import u from "../users/UsersCss/users.module.css";
import left from "../../IMAGES/leftArrow.png";
import right from "../../IMAGES/rightArrow.png";
import PartOfPortions from "../users/UsersHelp/UsersHelp";

const Paginator = React.memo(({PortionSize = 1, ...props}) =>  {
    let PagesCount = Math.ceil(props.TotalCount / props.PageSize);
    let pages = [];
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i);
    }
    let EndPagesCount = [pages.length]
    let MidPagesCount = [Math.ceil(pages.length / 2)]
    let portionCount = Math.ceil(PagesCount / PortionSize)
    let portionNumSettings = Math.ceil(props.CurrentValue / PortionSize)
    let [portionNum,setPortionNum] = useState(portionNumSettings)
    let leftPortionPoint = (portionNum - 1) * PortionSize + 1;
    let rightPortionPoint = portionNum * PortionSize
    let EndPortionPoint = Math.ceil(EndPagesCount / PortionSize)
    let MidPointPortion = Math.ceil(MidPagesCount / PortionSize)
    let StartingPoint = (EndPagesCount / EndPagesCount)
    console.log(MidPointPortion)

    return <>
    <div style={{display:'flex'}}>
        {pages.length !== 0 && StartingPoint !== portionNum && <div className={u.points}><PartOfPortions setPortion={setPortionNum}
                                                                                    pointPortion={StartingPoint}
                                                                                    pointCount={"Start"}
        /></div>}
        {pages.length !== 0 && MidPointPortion !== portionNum && <div className={u.points}>
            <PartOfPortions setPortion={setPortionNum} pointPortion={MidPointPortion}
                            pointCount={"Middle"}/>
        </div>}
        {pages.length !== 0 && EndPortionPoint > portionNum && <div className={u.points}>
        <PartOfPortions setPortion={setPortionNum} pointPortion={EndPortionPoint}
                        pointCount={"End"}/>
    </div>}
    </div>

    <div className={u.paginator}>
            { portionNum > 1 && <div className={u.leftArrow}><img onClick={ () => setPortionNum(portionNum - 1)} src={left}/></div>
            }

        {
            pages.filter((p) => {
                    return p >= leftPortionPoint && p <= rightPortionPoint
                })
                .map((p) => {
                return (
                        <span key={p} className={props.CurrentValue === p ? u.fatBoy : null}
                              onClick={() => {
                                  props.onPageChanged(p)
                              }}>{p}</span>

                )
            })
        }


            {portionCount > portionNum &&
            <div className={u.rightArrow}><img onClick={() => setPortionNum(portionNum + 1)} src={right}/></div>
            }
        </div>
        </>
})


export {Paginator}