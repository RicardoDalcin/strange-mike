import { useCallback, useState } from 'react';
import { Spring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

type ScrollTransitionProps = {
  children: (props: object, isVisible: boolean) => JSX.Element | null;
  from: object;
  to: object;
  delay: number;
  once?: boolean;
};

const ScrollTransition: React.FC<ScrollTransitionProps> = ({
  children,
  from,
  to,
  delay,
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = useCallback(
    (newIsVisible: boolean) => {
      setIsVisible(state => (!once || (once && !state) ? newIsVisible : state));
    },
    [once],
  );

  return (
    <VisibilitySensor partialVisibility onChange={handleChange}>
      <Spring to={isVisible ? to : from} delay={delay}>
        {(props: any) => children(props, isVisible)}
      </Spring>
    </VisibilitySensor>
  );
};

export default ScrollTransition;
