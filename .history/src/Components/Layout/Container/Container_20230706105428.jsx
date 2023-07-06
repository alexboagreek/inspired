import cn from 'classnames';
import style from './Container.module.scss';

export const Container = (props) => (
  <div className={cn(stylecontainer', props.className)}>
    {props.children}
  </div>
);