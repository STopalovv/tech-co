import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct__product">
                <img className='checkoutProduct__image' src={image} alt="" />
                <p className='checkoutProduct__title'>{title}</p>
            </div>
            <div className="checkoutProduct__bill">
                <h3 className='checkoutProduct__price'>{price} лв.</h3>
                <div className="checkoutProduct__links">
                    <button className='checkoutProduct__button'>Добави в Любими</button>
                    <button onClick={removeFromBasket} className='checkoutProduct__button'>Изтрий</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
