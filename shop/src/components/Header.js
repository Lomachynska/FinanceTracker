import React, { useState } from 'react'; // імпортуємо useState
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order key={el.id} item={el} />
        ))}
    </div>)
}

const showNothinsg = () => {
    return (<div className='empty'>
        <h2>Товарів немає</h2>
    </div>)

}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false); // використовуємо useState

    return (
        <header>
            <div>
                <span className='logo'>AVTO shop</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothinsg()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}
