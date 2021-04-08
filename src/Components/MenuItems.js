import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map(item => {
                    return (
                    <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a rel="noreferrer" href={item.link1 || null} target="_blank">
                                        <FontAwesomeIcon icon={item.icon1} className="portfolio-icon"></FontAwesomeIcon>   
                                    </a>
                                    <a rel="noreferrer" href={item.link2 || null} target="_blank">
                                        <FontAwesomeIcon icon={item.icon2} className="portfolio-icon"></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.subtitle}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default MenuItems;
