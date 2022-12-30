import List from '../list/List'
import Search from '../search/Search'
import './Main.scss'
import data from '../../../api/discover.json'
import { useRef, useEffect } from 'react';
import  classNames  from 'classnames';
import {  IMain } from '../../interface';



const Main: React.FC<IMain> = ({changeSearchStatus, searchStatus, searchData, setTerm}) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let num = 0;
        const interval =  setInterval(function() {
            const backInfo = data.backgrounds;
            if(num + 1 > backInfo.length) {
                num = 0
            }
            if(ref.current) {
                ref.current.style.backgroundImage =` 
                url('./api/${backInfo[num].url}')`;
                ++num
            }
        }, 5000);
        return () => clearInterval(interval)
    },[])

    const classForMain = classNames({
        'main': true,
        'main_searching': searchStatus
    })

   

    return (
        <div className={classForMain} ref={ref}>
            <Search searchStatus={searchStatus} changeSearchStatus={changeSearchStatus} setTerm={setTerm}/>
            <List searchData={searchData} searchStatus={searchStatus}/>
        </div>
    )
}

export default Main