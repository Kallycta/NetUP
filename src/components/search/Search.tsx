import './Search.scss';
import classNames from 'classnames';
import useClosableRef from '../../hooks/useClosableRef';
import { useEffect, useState ,KeyboardEvent } from 'react';
import { ISearch } from '../../interface';


const Search: React.FC<ISearch> = ({searchStatus, changeSearchStatus, setTerm}) => {
    const [value, setValue] = useState('')
    const {ref} = useClosableRef<HTMLInputElement>(searchStatus, changeSearchStatus, value);

    useEffect(()=> {
        if(searchStatus === false) {
            const timer = setTimeout(function() {
                setValue('')
                setTerm('')
            }, 800)
            return () => {
                clearTimeout(timer)
            }
        }

    }, [searchStatus, setTerm])
    
    const classNameInput = classNames({
        'search-input': true,
        'search-input__active-status': searchStatus
    })

    const classNameDel = classNames({
        'search-del': true,
        'search-input__active-status': searchStatus
    })
    const classNameImg = classNames({
        'search-input__active-status': searchStatus
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        const timer = setTimeout(function() {
            setTerm(value)
        }, 800)
        return () => {
            clearTimeout(timer)
        }}

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {    
        if(e.code === 'Enter') {
            const timer = setTimeout(function() {
                setTerm(value)
            }, 900)
            return () => {
                clearTimeout(timer)
            }}}

    const onClickDelete = () => {
        const timer = setTimeout(function() {
            setTerm('')
            setValue('')
            changeSearchStatus(false)
        }, 800)
        return () => {
            clearTimeout(timer)
        }}


    return (
        <div className="search">
        <input className={classNameInput} 
               type="text" 
               onClick={() => changeSearchStatus(true)} 
               ref={ref}
               onKeyDown={onKeyDown}
               value={value}
               onChange={onChange}/>
        <div className={classNameDel}>
            <img className={classNameImg} src="./api/logo/del.svg" alt="delete"  onClick={onClickDelete}/>
        </div>
        <button type="button" onClick={onClick}>
            <span>search</span>
            <img src="./icons/miniSearch.svg" alt="" />
        </button>
    </div>
    )
}

export default Search