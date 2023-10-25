import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Menu = () => {

    const addTocartHandler = (itemNum) => {

    }

  return (
    <section id='menu'>
        <h1>MENU</h1>
        <div>
          <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="Veg Cheese Burger" handler={addTocartHandler} delay={0.1}/>
          <MenuCard itemNum={2} burgerSrc={burger2} price={450} title="Chicken Cheese Burger" handler={addTocartHandler} delay={0.5} />
          <MenuCard itemNum={3} burgerSrc={burger3} price={700} title="Veg Cheese Burger  with French Fries" handler={addTocartHandler} delay={0.8} />
        </div>
    </section>
  )
}

export default Menu
