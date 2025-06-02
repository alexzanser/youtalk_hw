import React from 'react';
import { Link } from 'react-router-dom';

const Article: React.FC = () => {
  return (
    <main className="main background">
      <div className="container">
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item"><Link to="/">Главная</Link></li>
          <li className="breadcrumbs__item"><img src="/img/arrow-right.svg" alt="arrow" /></li>
          <li className="breadcrumbs__item"><Link to="/">Блог</Link></li>
          <li className="breadcrumbs__item"><img src="/img/arrow-right.svg" alt="arrow" /></li>
          <li className="breadcrumbs__item"><Link to="#">Как не утонуть в тревоге и управлять своими страхами</Link></li>
        </ul>
        <div className="content">
          <div className="article">
            <h1 className="article__headline">Как не утонуть в тревоге и управлять своими страхами</h1>
            <ul className="article__author-date">
              <li className="article__autor-date-item">Автор: Лиза Файнтух</li>
              <li className="article__autor-date-item">&middot;</li>
              <li className="article__autor-date-item">21.08.2021</li>
            </ul>
            <img className="article__main-image" src="/img/article/swimming-girl.png" alt="иллюстрация" />
            <div className="article__contents">
              <div className="article__contents-heading">Содержание</div>
              <ul className="article__contents-list">
                <li className="article__contents-item">Как понять, что отношения с мамой были дисфункциональными и привели к травме?</li>
                <li className="article__contents-item">
                  Мама привет!
                  <ul className="article__contents--no-bullet">
                    <li>Под под заголовок под заголовком</li>
                    <ul className="article__contents--no-bullet">
                      <li>Под под под заголовок под заголовком</li>
                      <ul className="article__contents--no-bullet">
                        <li>Под под под под заголовок под заголовком</li>
                      </ul>
                    </ul>
                  </ul>
                </li>
                <li className="article__contents-item">Ну вот опять заголовок который как «привет мама»</li>
                <li className="article__contents-item">Как понять, что вы страдаете от материнской травмы?</li>
              </ul>
            </div>
            <h3 className="article__headline-3">Заголовок h3</h3>
            <p className="article__paragraph">
              Один из самых важных навыков, которые может дать работа с психотерапевтом - умение в разных ситуациях по-разному обходиться со своими эмоциями. 
              Снять этот процесс с автопилота и перевести его в поле сознания.
            </p>
            <br />
            <p className="article__paragraph">Давайте, к примеру, разберем тревогу. Можно разложить перед собой целую коллекцию доступных реакций и выбрать нужную:</p>
            <div className="article__quote">
              <p className="article__quote-text">
                Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, 
                и стремимся сделать психотерапию безопасной, удобной и доступной каждому
              </p>
              <img className="article__quote-image" src="/img/article/quote.svg" alt="цитата" />
              <div className="article__quote-author">Ана Крымская</div>
            </div>
            <h3 className="article__question">Что еще можно делать с тревогой?</h3>
            <ul className="article__options">
              <li className="article__option">
                Управлять ей через что-то внешнее: включать музыку, которая создает другое настроение, 
                сесть за работу с цифрами, которая быстренько активизирует другие участки мозга, 
                читать блоги, которые вас успокаивают и отвлекают.
              </li>
              <li className="article__option">
                А еще порой можно разрешить себе тревогу заесть чем-то вкусным. Это, конечно, не самая здоровая стратегия, 
                но в ряде ситуаций можно считать ее вполне рабочей. Особенно, когда внутренний ресурс на нуле, 
                а поддерживающее окружение не в доступе.
              </li>
            </ul>
            <div className="image-description">
              <img className="image__description-pic" src="/img/article/strangers.png" alt="изображение" />
              <p className="image__description-text">Онтогенез речи отражает групповой эриксоновский гипноз.</p>
            </div>
            <div className="article__article">
              <p className="article__article-paragraph">
                Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                депрессии, неопределенности, да и к жизни в целом.
              </p>
              <div className="article__quote--center">
                <img className="article__quote-image--center" src="/img/article/light-orange.png" alt="фон" />
                <p className="article__quote-text text-center">
                  Мы знаем, что нуждаться в помощи и поддержке в трудные периоды жизни абсолютно нормально для любого человека, 
                  и стремимся сделать психотерапию безопасной, удобной и доступной каждому
                </p>
              </div>
              <p className="article__article-paragraph">
                Одна из ключевых задач психотерапии как раз и заключается в том, чтобы этот репертуар расширять и обучать человека 
                пользоваться доступными ему реакциями в той последовательности, пропорции и объеме, которые подходят именно ему. 
                Без оглядки на то, "как правильно" или "как у других".
              </p>
              <div className="article__article-rows">
                <img className="article__article-image" src="/img/article/redhead-woman.png" alt="изображение" />
                <p className="article__article-paragraph">
                  Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                  что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                  депрессии, неопределенности, да и к жизни в целом. А еще порой можно разрешить себе тревогу заесть чем-то вкусным.
                </p>
              </div>
              <p className="article__article-paragraph">
                Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                депрессии, неопределенности, да и к жизни в целом.
              </p>
              <div className="article__article-exercise">
                <h5 className="article__article-exercise-heading">Упражнение #1</h5>
                <p className="article__article-exercise-text">
                  Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. 
                  Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. 
                  Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение 
                  дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление
                </p>
              </div>
              <div className="article__article-question">
                <h3 className="article__question">Что еще можно делать с тревогой?</h3>
                <ul className="article__options">
                  <li className="article__option">
                    Управлять ей через что-то внешнее: включать музыку, которая создает другое настроение, 
                    сесть за работу с цифрами, которая быстренько активизирует другие участки мозга, 
                    читать блоги, которые вас успокаивают и отвлекают.
                  </li>
                  <li className="article__option">
                    А еще порой можно разрешить себе тревогу заесть чем-то вкусным. Это, конечно, не самая здоровая стратегия, 
                    но в ряде ситуаций можно считать ее вполне рабочей. Особенно, когда внутренний ресурс на нуле, 
                    а поддерживающее окружение не в доступе.
                  </li>
                </ul>
              </div>
              <div className="article__article-rows">
                <img className="article__article-image" src="/img/article/hands.png" alt="изображение" />
                <p className="article__article-paragraph">
                  Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                  что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу.
                </p>
              </div>
              <p className="article__article-paragraph">
                Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                депрессии, неопределенности, да и к жизни в целом.
              </p>
              <div className="article__article-exercise background-orange">
                <h5 className="article__article-exercise-heading">Упражнение #2</h5>
                <p className="article__article-exercise-text">
                  Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. 
                  Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. 
                  Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение 
                  дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление
                </p>
              </div>
              <div className="article__article-columns">
                <div className="article__article-column">
                  <img className="article__article-image" src="/img/article/chair.png" alt="изображение" />
                  <p className="article__article-paragraph">
                    Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                    что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                    депрессии, неопределенности, да и к жизни в целом.
                  </p>
                </div>
                <div className="article__article-column">
                  <img className="article__article-image" src="/img/article/beach.png" alt="изображение" />
                  <p className="article__article-paragraph">
                    Чем шире доступный вам репертуар реакций и чем более осознанно вы можете выбирать из него то, 
                    что лучше всего подойдет в каждой конкретной ситуации, тем больше будет ваша устойчивость к стрессу, 
                    депрессии, неопределенности, да и к жизни в целом.
                  </p>
                </div>
              </div>
              <img className="article__article-icon" src="/img/article/lightning.svg" alt="векторная иконка" />
              <p className="article__article-paragraph">
                Одна из ключевых задач психотерапии как раз и заключается в том, чтобы этот репертуар расширять и обучать 
                человека пользоваться доступными ему реакциями в той последовательности, пропорции и объеме, которые подходят 
                именно ему. Без оглядки на то, "как правильно" или "как у других".
              </p>
              <div className="article__article-exercise background-blue">
                <h5 className="article__article-exercise-heading">Упражнение #1</h5>
                <p className="article__article-exercise-text">
                  Нужно последовательно напрягать и расслаблять каждую мышцу в теле на несколько секунд. 
                  Напрягать стоит довольно сильно, чтобы потом отчетливее ощущать расслабляющий эффект. 
                  Начать можно с пальцев ног и постепенно подниматься вверх. Смысл в том, чтобы через напряжение 
                  дать стрессу выход, а затем вновь привести себя в спокойное состояние через расслабление
                </p>
              </div>
              <div className="article__article-links">
                <ul className="article__article-links-list">
                  <li className="article__article-links-item"><Link to="#">Self</Link></li>
                  <li className="article__article-links-item"><Link to="#">Самооценка и самопринятие</Link></li>
                  <li className="article__article-links-item"><Link to="#">Самооценка и самопринятие</Link></li>
                  <li className="article__article-links-item"><Link to="#">Упражнения</Link></li>
                  <li className="article__article-links-item"><Link to="#">Чувства и эмоции</Link></li>
                  <li className="article__article-links-item"><Link to="#">Самооценка и самопринятие</Link></li>
                  <li className="article__article-links-item"><Link to="#">Тревога</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="sidebar">
            <div className="sidebar__section-1">
              <div className="sidebar__qlick">
                <img className="sidebar__qlick-image" src="/img/article/sidebar/qlick-image.png" alt="изображение" />
                <span className="sidebar__qlick-heading">Загружаем свободные окошки</span>
                <p className="sidebar__qlick-text">
                  Все в порядке, сейчас мы перенаправим вас в сервис записи Qlick, 
                  через который удобно выбрать дату, время встречи и оплатить её
                </p>
                <button className="sidebar__button">Подробнее</button>
              </div>
              <div className="sidebar__contact">
                <img className="sidebar__contact-image" src="/img/article/sidebar/Lilia.png" alt="фотография психолога" />
                <ul className="sidebar__contact-option">
                  <li className="sidebar__option-item">📝 Переписка</li>
                  <li className="sidebar__option-item">📹 Видео</li>
                </ul>
                <span className="sidebar__contact-name">Лилия</span>
                <span className="sidebar__contact-job">Психолог</span>
                <ul className="sidebar__contact-exp">
                  <li className="sidebar__contact-exp-item">Опыт: 6 лет</li>
                  <li className="sidebar__contact-exp-item">&bull;</li>
                  <li className="sidebar__contact-exp-item">43 года</li>
                </ul>
                <p className="sidebar__contact-info">С чем работает психолог</p>
                <ul className="sidebar__contact-specialty">
                  <li className="sidebar__specialty-item">Тревога, тревожности</li>
                  <li className="sidebar__specialty-item">Подавленность</li>
                  <li className="sidebar__specialty-item">Тревога и панические атаки</li>
                </ul>
                <button className="sidebar__button">Подробнее</button>
              </div>
            </div>
            <div className="sidebar__section-2">
              <Link to="#" className="sidebar__gift">
                <h2 className="sidebar__gift-text">Дарите заботу</h2>
                <img className="sidebar-gift-image-yellow" src="/img/article/sidebar/yellow-present-sidebar.png" alt="изображение подарка" />
                <img className="sidebar-gift-image-blue" src="/img/article/sidebar/blue-present-sidebar.png" alt="изображение подарка" />
                <img className="sidebar-gift-image-red" src="/img/article/sidebar/red-present-sidebar.png" alt="изображение подарка" />
                <img className="sidebar-gift-image-confetti" src="/img/article/sidebar/confetti.png" alt="изображение" />
              </Link>
              <div className="sidebar__offer">
                <div className="sidebar__offer-heading">
                  <span className="sidebar__offer-heading-number">8</span>
                  <span className="sidebar__offer-heading-text">Видео сессий</span>
                </div>
                <p className="sidebar__offer-text">
                  Проработать небольшие проблемы и продвинуться в решении сложных запросов
                </p>
                <h3 className="sidebar__offer-price">18 500 ₽</h3>
                <button className="sidebar__button short">Купить</button>
                <img className="sidebar__offer-gift-red" src="/img/article/sidebar/red-present.png" alt="изображение подарка" />
                <img className="sidebar__offer-gift-blue" src="/img/article/sidebar/blue-present.png" alt="изображение подарка" />
              </div>
            </div>
          </aside>
        </div>
        <div className="closing-section">
          <div className="closing-section-separate">
            <h1 className="closing-section__question">Откликается проблема?</h1>
            <p className="closing-section-text">Поможем подобрать специалиста по работе с подобным запросом</p>
            <button className="closing-section__button">Подобрать психолога</button>
          </div>
          <img className="closing-section-heroes" src="/img/article/closing-section/heroes.png" alt="изображение" />
        </div>
      </div>
    </main>
  );
};

export default Article; 