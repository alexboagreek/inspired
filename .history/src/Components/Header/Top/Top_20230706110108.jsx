import { Container } from "../../Layout/Container/Container";
import style from './Top.module.scss';
import cn from 'classnames';

export const Top = () => {
  return (
    <div className={style.top}>
      <Container>
        <a href="" className={cn(style.topLink, )}></a>

      </Container>
    </div>
  )
}