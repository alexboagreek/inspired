import { Container } from "../../Layout/Container/Container";
import style from './Top.module.scss';
import cn from 'classnames';
import logo from './logo.svg';

export const Top = () => {
  return (
    <div className={style.top}>
      <Container className={style.container}>
        <a href="tel:+79304902620" className={cn(style.link, style.phone)}>8 930 490 26 20</a>

        <a href="/" className={style.logo}>
          <img src={logo} alt="Логотип магазина Inspired" />
        </a>

        <div className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <button className={style.topLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.4431 16.4438L20.9994 21.0002" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              </button>
            </li>
            <li className={style.navItem}>
              <a className={style.topLink}></a>
            </li>
            <li className={style.navItem}>
              <a className={style.topLink}></a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}