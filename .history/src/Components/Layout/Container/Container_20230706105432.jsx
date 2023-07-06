import cn from 'classnames';
import style from './Container.module.scss';

export const Container = (props) => (
  <div className={cn(style.container, props.className)}>
    {props.children}
  </div>
);