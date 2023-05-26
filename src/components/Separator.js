import styled from 'styled-components';
import { useRef } from 'react';
import { useIsInViewport } from '../util';

const Root = styled.div`
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    left: -${(props) => props.theme.bodyP}px;
    visibility: ${(props) => props.show ? 'visible' : 'hidden'};
    border-top: 1px solid ${(props) => props.theme.themeColor.main}80;

    ${(props) => {
        if (props.noAnimation) {
            return `
                right: -${props.theme.bodyP}px;
                
                @media ${props.theme.device.mobile} {
                    right: -${props.theme.p}px;
                }
                
            `;
        } else {
            return props.show ? `animation: 0.6s ease-out 1 expand forwards;` : ``;
        }
    }}

    @keyframes expand {
        0% {
            right: 100%;
        }
        100% {
            right: -${props => props.theme.bodyP}px;
        }
    }

    @media ${props => props.theme.device.mobile} {
        @keyframes expand {
            0% {
                right: 100%;
            }
            100% {
                right: -${props => props.theme.p}px;
            }
        }
    }
`;

const Separator = (props) => {
    let { noAnimation = false } = props;
    const ref = useRef(null);
  
    const isInViewport = useIsInViewport(ref);
    
    return (
        <Root ref={ref}>
            <Line show={noAnimation || isInViewport} noAnimation={noAnimation} {...props}/>
        </Root>
    );
}
export default Separator;
