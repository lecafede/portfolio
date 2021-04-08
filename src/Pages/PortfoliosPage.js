import React from 'react'
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../data/AllPortfolios';
import { useState } from 'react';



const allCategory = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {

    const [categories] = useState(allCategory);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios);
            return;
        }
        const filterData = portfolios.filter((item) => {
            return item.category === category;
        })

        setMenuItems(filterData);
    }

    return (
        <div className="PortfolioPage">
            
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'}/>
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    )
}

export default PortfoliosPage;
