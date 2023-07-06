import cn from 'classnames';
import style from './Container.module.scss';

export const Container = ({ cla}) => (
  <div className={cn(style.container, props.className)}>
    {props.children}
  </div>
);