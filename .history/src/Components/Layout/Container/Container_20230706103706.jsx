import cn from 'classnames';

export const Container = (props) => (
  <div className={cn('container', props>
    {props.text}
  </div>
);