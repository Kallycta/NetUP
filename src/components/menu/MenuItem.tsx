import './Menu.scss';

interface IMenu {

    onClick: () => void;
}
const MenuItem: React.FC<IMenu> = ({onClick}) => {


    const data = [{
        src: './icons/Discover.svg',
        title: 'Discover',    
    }, 
    {
        src: "/icons/LineTV.svg",
        title: 'Line TV',    
    },
    {
        src: './icons/tvShow.svg',
        title: 'TV Shows',    
    },
    {
        src: './icons/movies.svg',
        title: 'Movies',    
    },
    {
        src: '/icons/myStuff.svg',
        title: 'My Stuff',    
    },]



    return (
            <>
                { data.map((item:{ [key:string] : string}, index: number) => {
                    return (
                        <div key={index}>
                            <div className="menu-block__item" onClick={onClick}>
                            <img className="menu-block__item-img" src={item.src} alt={item.title} />
                            <span className="menu-block__item-span" >{item.title}</span>
                        </div>
                       
                    </div>
                    )
                })}
                </>
                      
    )
}

export default MenuItem;