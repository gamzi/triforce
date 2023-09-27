import styled from 'styled-components';
import {Row, Col} from './Grid';
import Typography from './Typography';
import ScrollRevealed from './ScrollRevealed';
import Clock from './Clock';

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

const SubtitleSection = styled(Row)`
    padding: 120px 0 60px 0;

    @media ${props => props.theme.device.laptop} {
        padding: 90px 0 20px 0;
    }

    @media ${props => props.theme.device.mobile} {
        padding: 190px 0 56px 0;
    }
`;

const Subtitle = styled(Typography)`
    max-width: 500px;
`;

const Disclaimer = styled(Typography)`
    margin-top: 130px;
    padding-left: 8px;

    &::before {
        content: '* ';
        margin-left: -8px;
    }
    
    @media ${props => props.theme.device.desktop} {
        margin-top: 230px;
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

            <SubtitleSection padded>
                <Col span={4} className="desktop-only">
                    <ScrollRevealed delay={delay + 0.3} fadeIn>
                        <Typography size="large" opacity={0.3}>
                            Based in New York, USA<br/>
                            40.7565° N, 73.9314° W<br/>
                            Local Time → <Clock timeZone="America/New_York"></Clock>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4} className="desktop-only">
                    <ScrollRevealed delay={delay + 0.4} fadeIn>
                        <Typography size="large" opacity={0.3}>
                            Made in Belgrade, Serbia<br/>
                            44.8125° N, 20.4612° E<br/>
                            Local Time → <Clock timeZone="Europe/Belgrade"></Clock>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4}>
                    <ScrollRevealed delay={delay + 0.5} fadeIn>
                        <Subtitle size="xlarge">
                            We help create visual narratives that move businesses, people and the world forward.
                        </Subtitle>
                        <Disclaimer opacity={0.3}>
                            Our full web presentation is currently in production. In the meantime, please enjoy the short version and feel free to reach out for any additional details.
                        </Disclaimer>
                    </ScrollRevealed>
                </Col>
            </SubtitleSection>
        </Root>
    );
}
  
export default Head;