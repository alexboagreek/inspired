import cn from 'classnames';
import style from './Container.module.scss';

export const Container = ({ className,children }) => (
  <div className={cn(style.container, props.className)}>
    {props.children}
  </div>
);