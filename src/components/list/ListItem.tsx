import { useState } from 'react';
import './ListItem.scss';
import  classNames  from 'classnames';
import { IDataItems } from '../../interface';

interface IListItem {
    item: IDataItems
}

const ListItem: React.FC<IListItem> = ({item}) => {


    const [focusInfo, setFocusInfo] = useState(false)

    const mouseOver = () => { setFocusInfo(true) }
    const mouseOut = () =>  { setFocusInfo(false) }

    const styleForImg = classNames({
        'listItem-img__image': true,
        'imgDarkness': focusInfo
    })
   const styleForBackground = focusInfo ?  {backgroundImage: `url(./api/${item.keyframe}) `} :
                                           {backgroundImage: `url(./api/${item.poster}) `} 
    const styleForHeader = classNames({
        'listItem-img__header': true,
        'listItem-img__header-focus': focusInfo
    })
    const styleForDetails = classNames({
        'listItem-img__moreDetails': true,
        "listItem-img__moreDetails-focus": focusInfo
    })
    

    return (
        <div className='listItem' onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <div className="listItem-img">
                <div className={styleForImg} style={styleForBackground} ></div>
                <div className={styleForHeader}>
                    <div style={item.is_new ? {display: 'flex'} : {display: 'none'}} className="listItem-img__header-item">New on NetUP TV</div>
                    <div className="listItem-img__header-item imdb">IMDB<span>{item.imdb_rate}/10</span></div>
                </div>
                <div className={styleForDetails}>
                    More details
                </div>
            </div>
            <h3>{item.title}</h3>
            <div  className='listItem-description'>
               {item.country} | {item.year} | {item.length / 60} min | {item.num_seasons} seasons | {item.min_age}+
            </div>
            <div className="listItem-genres">
                {item.genres.join().replaceAll(',', ', ')}
            </div>
        </div>
    )
}

export default ListItem;