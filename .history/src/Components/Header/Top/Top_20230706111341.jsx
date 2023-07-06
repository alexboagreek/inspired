import { Container } from "../../Layout/Container/Container";
import style from './Top.module.scss';
import cn from 'classnames';

export const Top = () => {
  return (
    <div className={style.top}>
      <Container className={style.container}>
        <a href="tel:+79304902620" className={cn(style.topLink, style.topPhone)}>8 930 490 26 20</a>

      </Container>
    </div>
  )
}