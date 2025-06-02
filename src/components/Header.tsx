import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__container-logo-menu">
            <div className="header__logo">
              <Link to="/">
                <img className="logo" src="/img/YouTalk.svg" alt="логотип" />
              </Link>
            </div>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item"><Link to="#">О нас</Link></li>
                <li className="header__menu-item"><Link to="#">Тарифы</Link></li>
                <li className="header__menu-item"><Link to="#">Для бизнеса</Link></li>
                <li className="header__menu-item"><Link to="#">Психологам</Link></li>
                <li className="header__menu-item"><Link to="#">Сертификат</Link></li>
                <li className="header__menu-item"><Link to="#">Материалы</Link></li>
                <li className="header__menu-item"><Link to="#">FAQ</Link></li>
              </ul>
            </nav>
          </div>
          <div className="header__burger">
            <span></span>
          </div>
          <button className="header__button">Подобрать психолога</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 