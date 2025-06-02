import React from 'react';
import { Link } from 'react-router-dom';
import BlogArticle from './BlogArticle';

const Blog: React.FC = () => {
  const articles = [
    {
      image: '/img/heroes/hero-eggs.png',
      categories: ['Самооценка и самопринятие', 'Self'],
      title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
      author: 'Лиза Файнтух',
      text: 'Изначально термин «эмоциональное профессиональной сфере и относился...',
      date: '21.08.2021'
    },
    {
      image: '/img/heroes/hero-jogging.png',
      categories: ['Self'],
      title: 'Как не утонуть в тревоге и управлять своими страхами',
      author: 'Екатерина Бельтюкова',
      text: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться...',
      date: '11.08.2021'
    },
    {
      image: '/img/heroes/hero-girl.png',
      categories: ['Самооценка и самопринятие', 'Психология питания'],
      title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
      author: 'Лиза Файнтух',
      text: 'Изначально термин «эмоциональное профессиональной сфере и относился...',
      date: '21.08.2021'
    },
    {
      image: '/img/heroes/hero-swimming.png',
      categories: ['Self'],
      title: 'Как не утонуть в тревоге и управлять своими страхами',
      author: 'Екатерина Бельтюкова',
      text: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться...',
      date: '11.08.2021'
    },
    {
      image: '/img/heroes/hero-angry-face.png',
      categories: ['Self'],
      title: 'Как управлять своими эмоциями: 8 шагов',
      author: 'Екатерина Бельтюкова',
      text: 'Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!',
      date: '07.08.2021'
    },
    {
      image: '/img/heroes/hero-woman-typing.png',
      categories: ['Self'],
      title: 'Эмоциональное выгорание – стадии и симптомы, методы восстановления и профилактики',
      author: 'Лиза Файнтух под редакцией Екатерины Бельтюковой',
      text: 'Изначально термин «эмоциональное я...',
      date: '21.08.2021'
    },
    {
      image: '/img/heroes/hero-woman-videocall.png',
      categories: ['Self'],
      title: 'Как не утонуть в тревоге и управлять своими страхами',
      author: 'Екатерина Бельтюкова',
      text: 'Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться ...',
      date: '11.08.2021'
    },
    {
      image: '/img/heroes/hero-strangers.png',
      categories: ['Self'],
      title: 'Как управлять своими эмоциями: 8 шагов',
      author: 'Екатерина Бельтюкова',
      text: 'Клиенты часто спрашивают, как КОНТРОЛИРОВАТЬ свои негативные эмоции. Пришло время об этом написать!',
      date: '07.08.2021'
    }
  ];

  return (
    <main className="main main-background-image">
      <div className="container">
        <div className="main__inner">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item"><Link to="/">Главная</Link></li>
            <li className="breadcrumbs__item"><img src="/img/arrow-right.svg" alt="arrow" /></li>
            <li className="breadcrumbs__item"><Link to="#">Блог</Link></li>
          </ul>
          <h1 className="main__headline">Блог</h1>
          <ul className="main__section-menu">
            <li className="main__section-menu-item"><Link to="#">&#128522; Все</Link></li>
            <li className="main__section-menu-item"><Link to="#">Самооценка и самопринятие</Link></li>
            <li className="main__section-menu-item"><Link to="#">&#129412; Self</Link></li>
            <li className="main__section-menu-item"><Link to="#">Чувства и эмоции</Link></li>
            <li className="main__section-menu-item"><Link to="#">Тревога</Link></li>
            <li className="main__section-menu-item"><Link to="#">Упражнения</Link></li>
            <li className="main__section-menu-item"><Link to="#">Психология питания</Link></li>
            <li className="main__section-menu-item"><Link to="#">Насилие</Link></li>
            <li className="main__section-menu-item"><Link to="#">Личное здоровье</Link></li>
          </ul>
          <section className="main__article-selection">
            {articles.map((article, index) => (
              <BlogArticle
                key={index}
                {...article}
                isSmallImage={index >= 2}
              />
            ))}
          </section>
          <div className="main-btn-wrap">
            <button className="main__button">Ещё</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog; 