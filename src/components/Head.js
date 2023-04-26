import styled from 'styled-components';
import {Row, Col} from './Grid';
import Typography from './Typography';
import ScrollRevealed from './ScrollRevealed';

import { ReactComponent as TitleImage } from '../assets/title.svg';

const Root = styled.div`
`;

const TitleWrapper = styled.div`
    overflow: hidden;
`;

const Title = styled(TitleImage)`
    display: block;
    width: 100%;
    height: auto;
    margin-top: calc(50vh - 7%);

    path {
        fill: ${props => props.theme.themeColor?.main};
    }
`;

const ImageScrollWrapper = styled.div`
    display: flex;
    margin-right: -20px;
    margin-top: 140px;
`;

const ImageScrollItem = styled(TitleImage)`
    flex: 0 0 auto;
    height: 125px;
    margin-right: 20px;
    animation: scrollAnimation 20s linear infinite;

    path {
        fill: ${props => props.theme.themeColor?.main};
    }
`;

const Disclaimer = styled(Typography)`
    margin-top: 130px;
    padding-left: 8px;

    &::before {
        content: '* ';
        margin-left: -8px;
    }
    
    ${props => props.theme.device.desktop} {
        margin-top: 230px;
    }
`;

const Subtitle = styled(Row)`
    padding: 120px 0 60px 0;

    ${props => props.theme.device.laptop} {
        padding: 90px 0 20px 0;
    }

    ${props => props.theme.device.mobile} {
        padding: 190px 0 56px 0;
    }
`;

const Head = ({delay = 1}) => {
    return (
        <Root>
            <TitleWrapper>
                <ScrollRevealed delay={delay} className="desktop-only">
                    <Title />
                </ScrollRevealed>

                <ImageScrollWrapper className="mobile-only">
                    <ImageScrollItem />
                    <ImageScrollItem />
                </ImageScrollWrapper>
            </TitleWrapper>

            <Subtitle padded>
                <Col span={4} className="desktop-only">
                    <ScrollRevealed delay={delay + 0.3} fadeIn>
                        <Typography size="large" opacity={0.3}>
                            Made in Belgrade, Serbia<br/>
                            44.8125° N, 20.4612° E<br/>
                            Local Time → 5:27 PM
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4} className="desktop-only">
                    <ScrollRevealed delay={delay + 0.4} fadeIn>
                        <Typography size="large" opacity={0.3}>
                            Based in Miami, USA<br/>
                            25.7617° N, 80.1918° W<br/>
                            Local Time → 11:27 PM
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4}>
                    <ScrollRevealed delay={delay + 0.5} fadeIn>
                        <Typography size="xlarge">
                            We help create visual narratives that move businesses, people and the world forward.
                        </Typography>
                        <Disclaimer opacity={0.3}>
                            Our full web presentation is currently in production. In the meantime, please enjoy the short version and feel free to reach out for any additional details.
                        </Disclaimer>
                    </ScrollRevealed>
                </Col>
            </Subtitle>
        </Root>
    );
}
  
export default Head;