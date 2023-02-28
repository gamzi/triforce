import styled from 'styled-components';
import { useRef } from 'react';
import { useIsInViewport } from '../util';

const Root = styled.div`
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    left: -80px;
    visibility: ${(props) => props.show ? 'visible' : 'hidden'};
    border-top: 1px solid white;
    ${(props) => props.show && 'animation: 0.6s ease-out 1 expand forwards'};

    @keyframes expand {
        0% {
            right: 100%; //calc(100% + 80px) for full?
        }
        100% {
            right: -80px;
        }
    }
`;

const Separator = () => {
    const ref = useRef(null);
  
    const isInViewport = useIsInViewport(ref);
    console.log('line in viewport', isInViewport);
    return (
        <Root ref={ref}>
            <Line show={isInViewport}/>
        </Root>
    );
}
export default Separator;
