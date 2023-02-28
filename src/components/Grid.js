import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    position: relative;
    margin: 0 -11px;
    ${(props) => props.padded && `padding: 70px 0`}
`;

const media = {
    xs: (styles) => `
        @media only screen and (max-width: 480px) {
            ${styles}
        }
    `,
};

export const Col = styled.div`
    flex: ${(props) => props.size};
    margin-left: 11px;
    margin-right: 11px;

    ${(props) => props.collapse && media[props.collapse](`
        display: none;
    `)};
`;
