import { useSwipeable } from 'react-swipeable';

import styles from './Swipeable.module.scss';

export const Swipeable = ({ children, leftAction, rightAction }) => {
  const config = {
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
    trackTouchPad: true,
    trackMouse: true,
    rotationAngle: 0,
  };

  const handlers = useSwipeable({
    onSwipedLeft: leftAction,
    onSwipedRight: rightAction,
    ...config,
  });

  return (
    <div {...handlers} className={styles.noSelect}>
      {children}
    </div>
  );
};
