import styled from 'styled-components';

export const Root = styled.p`
    font-size: ${(props) => props.fontSize}rem;
    line-height: ${(props) => props.fontSize * props.lhMultiplier}rem;
    margin: 0;
    opacity: ${(props) => props.opacity};

    ${props => props.inline && `
        display: inline-block;
    `}

    @media ${props => props.theme.device.mobile} {
        font-size: ${(props) => props.mFontSize}rem;
        line-height: ${(props) => props.mFontSize * props.lhMultiplier}rem;
    }

    @media ${props => props.theme.device.laptop} {
        font-size: ${(props) => props.lFontSize}rem;
        line-height: ${(props) => props.lFontSize * props.lhMultiplier}rem;
    }

    text-decoration: none;
`;

const Typography = (props) => {
    let { size = "medium", opacity = '1', children, inline = false, as = "p", href = "", fontSize, lFontSize, mFontSize } = props;
    let fontSizeDefault;
    let mFontSizeDefault;
    let lFontSizeDefault;
    let lhMultiplier;

    switch(size) {
        case "xlarge": 
            fontSizeDefault = 3;
            lFontSizeDefault = 2.375;
            mFontSizeDefault = 2;
            lhMultiplier = 1.2;
            break;
        case "large":
            fontSizeDefault = 1.5;
            lFontSizeDefault = 1.25;
            mFontSizeDefault = 1.5;
            lhMultiplier = 1.5;
            break;
        default:
            fontSizeDefault = 1;
            lFontSizeDefault = .875;
            mFontSizeDefault = .75;
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
            fontSize={fontSize || fontSizeDefault} 
            lFontSize={lFontSize || lFontSizeDefault}
            mFontSize={mFontSize || mFontSizeDefault} 
            lhMultiplier={lhMultiplier}
            inline={inline}
            {...props}>

            {children}
        </Root>
    );
}
export default Typography;
