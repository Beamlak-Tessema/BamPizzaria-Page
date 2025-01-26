import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../component/MenuItem';
import '../Styles/MENU.css'

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">OUR MENU</h1>
        <h2>TRY OUT OUR MENU :)</h2>;
        <div className="menuList">
          {MenuList.map((menuItem, key) => (
            <MenuItem    
             key={key}
             image={menuItem.image}
             name={menuItem.name}
             price={menuItem.price}/>
          ))}
        </div>
    </div>
  );
}

export default Menu;
