import styled from 'styled-components';
import { useRef } from 'react';
import { useIsInViewport } from '../util';

const Root = styled.div`
    height: 100%;
    overflow: hidden;
`;

const Content = styled.div`
    height: 100%;
    transform: translateY(100%);
    ${(props) => props.show && props.animation};
`;

const ScrollRevealed = ({delay = 0, children}) => {
    const ref = useRef(null);

    const animation = `animation: 0.5s cubic-bezier(.7,.57,.27,.82) ${delay}s 1 slideInFromBottom forwards, 0.5s ease-in 1 fade-in forwards`;
  
    const isInViewport = useIsInViewport(ref);
    console.log('is in viewport: ', isInViewport);
  
    return (
        <Root ref={ref}>
            <Content show={isInViewport} delay={delay} animation={animation}>
                {children}
            </Content>
        </Root>
    );
}
export default ScrollRevealed;
