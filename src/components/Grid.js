import styled from 'styled-components';

export const Row = styled.div`
    flex-wrap: wrap;
    display: flex;
    position: relative;
    
    margin-right: -20px;
    ${(props) => props.padded && `padding: 70px 0 50px 0`}
`;

export const Col = styled.div`
    position: relative;
    word-break: break-word;
    flex-basis: ${props => `calc(100% / 12 * ${props.span} - 20px)`};
    margin-right: 20px;
    margin-bottom: 20px;

    ${(props) => props.noBottomMargin && `
        margin-bottom: 0;
    `};

    ${(props) => props.alignRight && `text-align: right;`}

    &:last-child {
        margin-right: 0;
    }

    ${(props) => `${props.theme.device.mobile} {
        flex-basis: calc(100% / 12 * ${props.ms || 12} - 20px);

        ${props.mCenterText && `
            text-align: center;
        `}
    }`}

    .max-col-typography-width {
        max-width: 350px; 
    }   
`;
