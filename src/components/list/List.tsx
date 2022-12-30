import './List.scss';
import ListItem from './ListItem';
import {IDataItems} from '../../interface';
import classNames from 'classnames';

interface IList  {
    searchData: Array<IDataItems>,
    searchStatus: boolean
}

const List: React.FC<IList> = ({ searchData, searchStatus}) => {

    const classNameForHeader = classNames({
        'list-active' : searchStatus,
        'list-passive' : !searchStatus,
        'list-none' : searchStatus && !searchData.length
    })

    return (
    
        <div className='list'>
        <h2 className={classNameForHeader}>{!searchStatus ? 'in the spotlight' : `TV Shows (${searchData.length})`}</h2>
            {searchData.map((item:IDataItems, i: number) => {
                return (
                     <ListItem item={item} key={i}/>
                )
            })}
       
        </div>
     
    )
}

export default List