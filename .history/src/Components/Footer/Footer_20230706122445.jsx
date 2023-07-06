import { Container } from '../Layout/Container/Container';
import cn from 'classnames';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
      <footer>
        <Container>
          <div className={style.container}>
            <div className={style.category}>
              <h2 className={cn(style.title, style.categoryTitle)}>Каталог</h2>
            </div>
          </div>

          <div className={style.social}>
            <h2 className={cn(style.title, style.socialTitle)}>Связаться с нами</h2>

            <p className={style.socialSubtitle}>Контакты и адреса магазинов</p>

            <ul className={style.socialList}>
              <li>
                <a href="#" className=></a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
  );
};