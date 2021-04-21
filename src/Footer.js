import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h2>Услуги</h2>
                    <p>Проверка на пратката</p>
                    <p>30 дни право на връщане</p>
                    <p>Гаранция и сервиз</p>
                    <div className="footer__paymentCards">
                        <img src="https://s13emagst.akamaized.net/assets/bg/css/font-icons/flag-icons/mastercard.svg?v1" alt="" />
                        <img src="https://s13emagst.akamaized.net/assets/bg/css/font-icons/flag-icons/maestro.svg?v1" alt="" />
                        <img src="https://s13emagst.akamaized.net/assets/bg/css/font-icons/flag-icons/visa.svg?v1" alt="" />
                        <img src="https://s13emagst.akamaized.net/assets/bg/css/font-icons/flag-icons/visa-electron.svg?v1" alt="" />
                    </div>
                </div>
                <div className="footer__section">
                    <h2>Поръчки и доставки</h2>
                    <p>Моят акаунт</p>
                    <p>Как да поръчам онлайн</p>
                    <p>Доставка на поръчките</p>
                    <p>Често задавани въпроси</p>
                    <p>Блог</p>
                </div>
                <div className="footer__section">
                    <h2>Връзка с нас</h2>
                    <p>Контакт</p>
                    <p>Формуляр поправка на продукт</p>
                    <p>Формуляр връщане на продукт</p>
                    <p>Формуляр въпроси и рекламации</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
