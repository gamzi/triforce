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

const ScrollRevealed = ({delay = 0, duration = 0.5, children, fadeIn = false, className, style}) => {
    const ref = useRef(null);

    let animation = `animation: ${duration}s cubic-bezier(.7,.57,.27,.82) ${delay}s 1 slideInFromBottom both`;

    if (fadeIn) {
        animation += `, ${duration}s ease-in 0s 1 fade-in both`;
    }
  
    const isInViewport = useIsInViewport(ref);
  
    return (
        <Root ref={ref} className={className} style={style}>
            <Content show={isInViewport} delay={delay} duration={duration} animation={animation}>
                {children}
            </Content>
        </Root>
    );
}
export default ScrollRevealed;
