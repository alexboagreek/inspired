import { API_URL } from '../../const';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/Heart.svg';
import { ColorList } from '../ColorLIst/ColorList';
import styles from './Product.module.scss';

export const Product = ({ id, pic, title, price, colors }) => {
  return (
    <article className={styles.product}>
      <NavLink href={`product/${id}`} className={styles.link}>
        <img className={styles.image} src={`${API_URL}/${pic}`}/>
        <h3 className={styles.title}>{title}</h3>
      </NavLink>

      <div className={styles.row}>
        <p className={styles.price}>руб {price}</p>

        <button className={styles.favorite}>
          <Like />
        </button>
        <ColorList colors={ colors }/>
      </div>
    </article>
  )
}