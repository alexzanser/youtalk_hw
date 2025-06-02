import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Подписка успешно оформлена');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__options">
              <ul className="footer__list">
                <li><Link className="footer__list-item" to="#">О нас</Link></li>
                <li><Link className="footer__list-item" to="#">Тарифы</Link></li>
                <li><Link className="footer__list-item" to="#">Для бизнеса</Link></li>
                <li><Link className="footer__list-item" to="#">Психологам</Link></li>
                <li><Link className="footer__list-item" to="#">FAQ</Link></li>
              </ul>
              <ul className="footer__list">
                <li><Link className="footer__list-item" to="#">Блог</Link></li>
                <li><Link className="footer__list-item" to="#">Вебинары</Link></li>
                <li><Link className="footer__list-item" to="#">Подкаст</Link></li>
                <li><Link className="footer__list-item" to="#">Сертификат</Link></li>
                <li><Link className="footer__list-item" to="#">Контакты</Link></li>
              </ul>
            </div>
            <div className="footer__form">
              <div className="footer__form-title">Одно письмо в неделю со свежими <br /> новостями и акциями</div>
              <form className="footer__form-email" onSubmit={handleSubmit}>
                <input className="footer__form-email-info" type="text" placeholder="Ваш e-mail" />
                <button className="footer__form-email-button"></button>
              </form>
              <div className="footer__form-policy">
                Подписываясь, я соглашаюсь на обработку персональных данных в соответствии с ФЗ РФ № 152-ФЗ «О персональных данных», а также с Политикой конфиденциальности
              </div>
            </div>
            <div className="footer__icons">
              <div className="footer__icons-sk">
                <a className="footer__icons-sk-item" href="https://sk.ru/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/sk.svg" alt="участник Сколково" />
                </a>
                <a className="footer__icons-sk-item" href="https://sk.ru/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/member.svg" alt="участник Сколково" />
                </a>
              </div>
              <ul className="footer__icons-social">
                <li>
                  <a className="footer__icons-social-item" href="https://vk.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/img/vk.svg" alt="вконтакте" />
                  </a>
                </li>
                <li>
                  <a className="footer__icons-social-item" href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/img/telegram.svg" alt="телеграм" />
                  </a>
                </li>
                <li>
                  <a className="footer__icons-social-item" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src="/img/twitter.svg" alt="твиттер" />
                  </a>
                </li>
                <li>
                  <a className="footer__icons-social-item" href="https://dzen.ru/" target="_blank" rel="noopener noreferrer">
                    <img src="/img/dzen.svg" alt="дзен" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <ul className="footer__bottom-list">
              <li><Link className="footer__bottom-item" to="#">© Youtalk, 2018 – 2022</Link></li>
              <li><Link className="footer__bottom-item" to="#">Юридические документы</Link></li>
              <li><Link className="footer__bottom-item" to="#">Способы оплаты</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 