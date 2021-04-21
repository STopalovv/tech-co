import React from 'react'
import './BasketFooter.css'
import AllInboxIcon from '@material-ui/icons/AllInbox';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Replay30Icon from '@material-ui/icons/Replay30';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function BasketFooter() {
    return (
        <footer className="basketFooter">
            <h4>Възползвайте се от: </h4>
            <div className="basketFooter__container">
                <div className="basketFooter__item">
                    <AllInboxIcon className="basketFooter__icon" />
                    <div>
                        <h5>Проверка на пратката</h5>
                        <p>за предлаганите продукти</p>
                    </div>
                </div>
                <div className="basketFooter__item">
                    <LocalShippingIcon className="basketFooter__icon"/>
                    <div>
                        <h5>Проследяване на пратката</h5>
                        <p>в твоя акаунт</p>
                    </div>
                </div>
                <div className="basketFooter__item">
                    <Replay30Icon className="basketFooter__icon"/>
                    <div>
                        <h5>30 дни право на връщане</h5>
                        <p>за предлаганите продукти</p>
                    </div>
                </div>
                <div className="basketFooter__item">
                    <LockOutlinedIcon className="basketFooter__icon"/>
                    <div>
                        <h5>Купуваш сигурно</h5>
                        <p>Всички данни са криптирани за едно по-<br />сигурно пазаруване</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default BasketFooter
