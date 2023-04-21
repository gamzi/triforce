import styled from 'styled-components';
import { useRef } from 'react';
import { useIsInViewport } from '../util';

const Root = styled.div`
    height: 100%;
    overflow: hidden;
`;

const Content = styled.div`
    -webkit-transform: translate3d(0,0,0);
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    
    height: 100%;
    transform: translateY(110%);
    ${(props) => props.show && props.animation};
`;

const ScrollRevealed = ({delay = 0, children, fadeIn = false, className}) => {
    const ref = useRef(null);

    let animation = `animation: 0.5s cubic-bezier(.7,.57,.27,.82) ${delay}s 1 slideInFromBottom both`;

    if (fadeIn) {
        animation += `, 0.5s ease-in 0s 1 fade-in both`;
    }
  
    const isInViewport = useIsInViewport(ref);
    console.log('is in viewport: ', isInViewport);
  
    return (
        <Root ref={ref} className={className}>
            <Content show={isInViewport} delay={delay} animation={animation}>
                {children}
            </Content>
        </Root>
    );
}
export default ScrollRevealed;
