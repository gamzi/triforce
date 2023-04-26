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

    ${props => props.theme.device.laptop} {
        font-size: ${(props) => props.lFontSize}rem;
        line-height: ${(props) => props.lFontSize * props.lhMultiplier}rem;
    }

    text-decoration: none;
`;

const Typography = (props) => {
    let { size = "medium", opacity = '1', children, inline = false, as = "p", href = "" } = props;
    let fontSize;
    let mFontSize;
    let lFontSize;
    let lhMultiplier;

    switch(size) {
        case "xlarge": 
            fontSize = 3;
            lFontSize = 2.375;
            mFontSize = 2;
            lhMultiplier = 1.2;
            break;
        case "large":
            fontSize = 1.5;
            lFontSize = 1.25;
            mFontSize = 1.5;
            lhMultiplier = 1.5;
            break;
        default:
            fontSize = 1;
            lFontSize = .875;
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
            lFontSize={lFontSize}
            mFontSize={mFontSize} 
            lhMultiplier={lhMultiplier}
            inline={inline}
            {...props}>

            {children}
        </Root>
    );
}
export default Typography;
