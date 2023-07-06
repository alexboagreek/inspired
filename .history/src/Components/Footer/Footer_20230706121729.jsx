import { Container } from '../Layout/Container/Container';
import classNames from 'classnames';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
      <footer>
        <Container>
          <div className={style.container}>
            <div className={style.category}>
              <h2 className='P'></h2>
            </div>
          </div>
        </Container>
      </footer>
  );
};