import cn from 'classnames';
import style from './Category.module.scss';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Category = ({ list }) => {

  const location = useLocation();
  const gender = location.pathname.split('/')[1] || 'women';
  const categoriesList = list.find(item => item.link === gender);

  return (
    <ul className={style.category}>
      {categoriesList.categories.map((item) => (
        <li key={item.link} className={style.item}>
          <NavLink
            className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
            to={`${gender}/${item.link}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
