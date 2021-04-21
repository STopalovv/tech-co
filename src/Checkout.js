import { Link } from 'react-router-dom';
import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';
import BasketFooter from './BasketFooter';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            {basket.length === 0 ? (
                <div className="checkout__emptyBasket">
                    <h1>Количката ти е празна</h1>
                    <p>За да добавиш продукти в количкатата, <br />
                    моля да се върнеш в началото</p>
                    <Link to='/'>
                        <button className="checkout__emptyBasketButton">Към началната страница</button>
                    </Link>
                </div>
            ) : (
            <div className="checkout__container">
                <div className="checkout__left">
                    <h2>Вашите продукти</h2>
                    <div className="checkout__item">
                    {basket?.map((item) => {
                        return (
                            <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        );
                    })}
                    </div>
                    <CurrencyFormat 
                        renderText={(value) => (
                            <div>
                                <div className="checkout__billing">
                                    <p className="checkout__billingTitle">Всички продукти: </p>
                                    <p>{value}</p>
                                </div>
                                <div className="checkout__billing">
                                    <p className="checkout__billingTitle">Доставка: </p>
                                    <p className="checkout__greenParagraph"> БЕЗПЛАТНА</p>
                                </div>
                                <div className="checkout__billing">
                                    <p className="checkout__billingTitle"><strong>Общо: </strong></p>
                                    <p>{value}</p>
                                </div>
                            </div>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandsSeparator={true}
                        prefix={"$"}
                    />
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
            )}
            <BasketFooter />
        </div>
    )
}

export default Checkout
