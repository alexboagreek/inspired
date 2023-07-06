import { Container } from "../../Layout/Container/Container";
import style from './Top.module.scss';
 
export const Top = () => {
  return (
    <div className="top">
      <Container text='React' className='header__container'>
        Top
        <p>телефон</p>
        <p>лого</p>
        <p>icons</p>

      </Container>
    </div>
  )
}