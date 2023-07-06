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
              <button className={style.topLink}></button>
            </li>
            <li className={style.navItem}>
              <a className={style.topLink}></a>
            </li>
            <li className={style.navItem}>
            <s className={style.topLink}></s>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}