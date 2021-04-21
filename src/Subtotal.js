import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch ] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <div className="subtotal__container">
                        <h2>Информация за поръчката</h2>
                        <div className="subtotal__item">
                            <p>Всички продукти:</p>
                            <p>{ value }</p>
                        </div>
                        <div className="subtotal__itemSecond">
                            <p>Доставка:</p>
                            <p className="subtotal__greenParagraph"> БЕЗПЛАТНА</p>
                        </div>

                        <hr></hr>
                        <div className="subtotal__total">
                            <p>Общо:</p>
                            <p> { value } </p>
                        </div>
                        <button onClick={e => history.push('./payments')} className="subtotal__button">Продължи</button>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
