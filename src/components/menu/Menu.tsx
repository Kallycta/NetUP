import { useState } from 'react';
import './Menu.scss';
import classNames from 'classnames';
import MenuItem from './MenuItem';

interface IMenu {
        changeSearchStatus: (a: boolean) => void
}
const Menu: React.FC<IMenu> = ({changeSearchStatus}) => {
    const [visible, setVisible] = useState<boolean>(false)



    const clickByHamburger = () => {
        setVisible(!visible)
    }
    const classForSecondBlock = classNames({
        'menu-block second': true,
        'menu-hide':  !visible
    })

    const classForThirdBlock = classNames({
        'menu-block third': true,
        'menu-hide':  !visible
    })
    const onClick = () => {
        changeSearchStatus(true)
        setVisible(false)
    }

    return (
        <div className='menu'>
            <div className="menu-block">
                <img className="menu-block__netUp" src='./icons/netUp.svg' alt="NetUp" />
            </div>
            <div className={classForSecondBlock}>
                <MenuItem  onClick={onClick} />
            </div>
            <div className={classForThirdBlock}>

            <div className="menu-block__parentIcon search1"  onClick={onClick}>
                 <img className="menu-block__icons" src="/icons/search.svg" alt="search" />
            </div>
            <div className="menu-block__parentIcon" onClick={onClick}>
                <img className="menu-block__icons" src="/icons/user.svg"  alt="person" />
            </div>    
            </div>
            <div className="hamburger" onClick={clickByHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Menu;