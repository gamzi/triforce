import styled from 'styled-components';

export const Root = styled.p`
    font-size: ${(props) => props.fontSize}rem;
    line-height: ${(props) => props.fontSize * props.lhMultiplier}rem;
    margin: 0;
    opacity: ${(props) => props.opacity};

    ${props => props.inline && `
        display: inline-block;
    `}

    ${props => props.theme.device.mobile} {
        font-size: ${(props) => props.mFontSize}rem;
        line-height: ${(props) => props.mFontSize * props.lhMultiplier}rem;
    }

    text-decoration: none;
`;

const Typography = (props) => {
    let { size = "medium", opacity = '1', children, inline = false, as = "p", href = "" } = props;
    let fontSize = '';
    let mFontSize = '';
    let lhMultiplier;

    switch(size) {
        case "large":
            fontSize = 1.5;
            mFontSize = 1.25;
            lhMultiplier = 1.5;
            break;
        case "xlarge": 
            fontSize = 3;
            mFontSize = 2;
            lhMultiplier = 1.2;
            break;
        default:
            fontSize = 1;
            mFontSize = .75;
            lhMultiplier = 1.5;
    }

    if (href) {
        as = "a";
    }

    return (
        <Root 
            as={as}
            href={href}
            opacity={opacity} 
            fontSize={fontSize} 
            mFontSize={mFontSize} 
            lhMultiplier={lhMultiplier}
            inline={inline}
            {...props}>

            {children}
        </Root>
    );
}
export default Typography;
