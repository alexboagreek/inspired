import { Container } from '../Layout/Container/Container';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
      <footer>
        <Container>
          <div className={style.container}>
            <div className={style.category}></div>
          </div>
        </Container>
      </footer>
  );
};