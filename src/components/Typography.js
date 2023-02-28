import styled from 'styled-components';

export const Root = styled.p`
    font-size: ${(props) => props.fontSize}rem;
    line-height: ${(props) => props.fontSize * props.lhMultiplier}rem;
    margin: 0;
    opacity: ${(props) => props.opacity};
`;

const Typography = ({size = "medium", opacity = '1', children}) => {
    let fontSize = '';
    let lhMultiplier;

    switch(size) {
        case "large":
            fontSize = 1.5;
            lhMultiplier = 1.5;
            break;
        case "xlarge": 
            fontSize = 3;
            lhMultiplier = 1.2;
            break;
        default:
            fontSize = 1;
            lhMultiplier = 1.5;
    }


    return (
        <Root opacity={opacity} fontSize={fontSize} lhMultiplier={lhMultiplier}>{children}</Root>
    );
}
export default Typography;
