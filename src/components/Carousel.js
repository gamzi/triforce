import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';


import { ReactComponent as IconLink } from '../assets/link.svg';
import Typography from '../components/Typography';
    
const Root = styled.div`
    display:block;
    white-space: nowrap;
    width: 100%;

    margin-left: calc(((100% - 20px) * 1/2 + 20px) * -1 * ${(props) => props.offset});
    transition: margin-left 1s;

    ${props => props.theme.device.mobile} {
        margin-left: calc( (100% + 20px) * -1 * ${(props) => props.offset});
    }
`;

const Header = styled.div`
    position: relative;
    max-width: 405px;
    padding-right: 20px;

    ${props => props.theme.device.mobile} {
        max-width: initial;
    }
`;

const Link = styled(IconLink)`
    position: absolute;
    right: 0;
    top: 10px;
    cursor: pointer;

    path {
        fill: currentColor;
    }
`;

const Item = styled.div`
    white-space: initial;
    display: inline-block;
    vertical-align: top;
    width: calc((100% - 20px) * 1/2);
    margin-right: 20px;

    ${props => props.theme.device.mobile} {
        width: 100%;
    }
`;

const Description = styled(Typography)`
    margin-top: 82px !important;
    max-width: 405px;

    ${props => props.theme.device.mobile} {
        max-width: initial;
    }
`;

function Carousel({items = []}) {
    const [offset, setOffset] = useState(1);
    const maxOffset = items.length - 1;

    const handleOffset = useCallback(() => {
        let newOffset = offset + 1;

        if (newOffset >= maxOffset) {
            newOffset = 0;
        }

        setOffset(newOffset);
    }, [offset, maxOffset]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleOffset();
        }, 10000);
        
        return () => clearInterval(interval);
    }, [handleOffset]);

    const openLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <Root offset={offset}>
            {
                items.map((item) => 
                    <Item key={item.info[0]}>
                        <Header>
                            {   
                                item.url && 
                                    <Link onClick={() => openLink(item.url)}/>
                            }
                            {
                                item.info.map(infoItem => 
                                    <Typography key={infoItem} size="large">{infoItem}</Typography>
                                )
                            }
                        </Header>
                        <Description>{item.description}</Description>
                    </Item>
                )
            }
        </Root>
    )
}
  
export default Carousel;