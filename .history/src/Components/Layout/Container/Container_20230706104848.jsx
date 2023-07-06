import cn from 'classnames';
import style from './Top.module.scss';

export const Container = (props) => (
  <div className={cn('container', props.className)}>
    {props.children}
  </div>
);