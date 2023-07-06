import cn from 'classnames';

export const Container = (props) => (
  <div className={cn('container', props.className>
    {props.text}
  </div>
);