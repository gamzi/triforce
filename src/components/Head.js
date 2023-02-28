import styled from 'styled-components';
import title from '../assets/title.svg';
import {Row, Col} from './Grid';
import Typography from './Typography';
import ScrollRevealed from './ScrollRevealed';
import "../assets/font/NeurialGrotesk-Regular.otf";

const Root = styled.div`
`;

const TitleWrapper = styled.div`
    overflow: hidden;
    margin-top: calc(50vh - 7%);
`;

const Title = styled.img`
    display: block;
    width: 100%;
    transform: translateY(110%);
    animation: 0.5s cubic-bezier(.7,.57,.27,.82) ${(props) => props.delay}s 1 slideInFromBottom forwards;
`;

const Head = ({delay = 1}) => {
    return (
        <Root>
            <TitleWrapper>
                <Title src={title} delay={delay}/>
            </TitleWrapper>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.3}>
                        <Typography size="large" opacity={0.3}>
                            Made in Belgrade, Serbia<br/>
                            44.8125° N, 20.4612° E<br/>
                            Local Time → 5:27 PM
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.4}>
                        <Typography size="large" opacity={0.3}>
                            Based in Miami, USA<br/>
                            25.7617° N, 80.1918° W<br/>
                            Local Time → 11:27 PM
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.5}>
                        <Typography size="xlarge">
                            We help create visual narratives that move businesses, people and the world forward.
                        </Typography>
                    </ScrollRevealed>
                </Col>
            </Row>
        </Root>
    );
}
  
export default Head;