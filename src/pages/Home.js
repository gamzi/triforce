import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Head from '../components/Head';
import {Row, Col} from '../components/Grid';
import Typography from '../components/Typography';
import ScrollRevealed from '../components/ScrollRevealed';
import Separator from '../components/Separator';

import work_preview_big_1 from '../assets/work_preview_big_1.png';
import work_preview_square_right_1 from '../assets/work_preview_square_right_1.png';
import work_preview_square_left_1 from '../assets/work_preview_square_left_1.png';
import work_preview_horizontal_1 from '../assets/work_preview_horizontal_1.png';

import work_preview_big_2 from '../assets/work_preview_big_2.png';
import work_preview_square_left_2 from '../assets/work_preview_square_left_2.png';
import work_preview_square_right_2 from '../assets/work_preview_square_right_2.png';
import work_preview_square_left_5 from '../assets/work_preview_square_left_5.png';
import work_preview_square_right_5 from '../assets/work_preview_square_right_5.png';


import work_preview_big_5 from '../assets/work_preview_big_5.png';
import work_preview_square_left_3 from '../assets/work_preview_square_left_3.png';
import work_preview_square_right_3 from '../assets/work_preview_square_right_3.png';
import work_preview_horizontal_3 from '../assets/work_preview_horizontal_3.png';

import work_preview_big_6 from '../assets/work_preview_big_6.png';
import work_preview_square_left_4 from '../assets/work_preview_square_left_4.png';
import work_preview_square_left_6 from '../assets/work_preview_square_left_6.png';
import work_preview_square_right_4 from '../assets/work_preview_square_right_4.png';


const Image = styled.div`
    width: 100%;
    display: block;
    background: url(${(props) => props.src});
    background-size: cover;
    background-position: center center; 

    height: 0;

    ${(props) => props.large && `
        padding-top: 73%;
    `};

    ${(props) => props.square && `
        padding-top: 100%;
    `};

    ${(props) => props.horizontal && `
        padding-top: 56.25%;
    `};

    ${(props) => props.fill && `
        width: 100%;
        height: 100%;
    `};
    
    background-size: cover;
    background-position: center center;  
`;

//TO DO DELAY RENDER
const Root = styled.div`
    position: relative;

    a {
        color: inherit;
    }
`;

const WorkWrapper = styled.div`
    position: relative;

    margin: 122px 0;

    ${Row} {
        margin-left: -5px;
        margin-right: -5px;

        ${Col} {
            margin-left: 5px;
            margin-right: 5px;
        }
    }

    ${Col}, ${Image} {
        margin-bottom: 10px;
    }
    
    ${Col} ${Image}:last-child {
        margin-bottom: 0;
    }
`;

const WorkDescriptionWrapper = styled.div`
    float: left;
    width: 33.33%;
    position: sticky;
    top: 120px;
`;

const WorkDescription = styled.div`
    padding: 120px 80px 0 0;
    margin-bottom: 10px;
    max-width: 265px;
`;

const WorkImagesWrapper = styled.div`
    display: inline-block;
    width: 66.66%;
    overflow: hidden;
`;

const delay = 0.3;

function Home() {
    const [rootClass, setRootClass] = useState('');

    useEffect(() => {
        if (rootClass !== 'shown') {
            setTimeout(() => {
                setRootClass('shown');
            }, delay * 1000);
        }
    }, [rootClass]);

    return (
        <Root className={rootClass}>
            <Head delay={1}/>

            <Separator/>

            <Row padded>
                <Col size={4} style={{opacity: '0.3'}}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="large">
                            Working worldwide for:
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            Web3<br/>
                            Tech<br/>
                            Culture
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">
                            Realestate<br/>
                            Non-For-Profit<br/>
                            Craft
                        </Typography>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Separator/>

            <WorkWrapper>
                <WorkDescriptionWrapper>
                    <ScrollRevealed>
                        <WorkDescription>
                            <Typography size="large">Fodl</Typography>
                            <Typography size="large">Branding, UI, Web</Typography>
                            <Typography size="large">New York, USA</Typography>
                            <br/>
                            <Typography>
                                FODL is a fully decentralized (non-custodial) leverage trading platform using liquidity from collateral lending platforms like Compound and Aave instead of funding rate and margin markets.
                            </Typography>
                        </WorkDescription>
                    </ScrollRevealed>
                </WorkDescriptionWrapper>
                <WorkImagesWrapper>
                    <ScrollRevealed>
                        <Image src={work_preview_big_1} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_left_1} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_right_1} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <ScrollRevealed>
                        <Image src={work_preview_horizontal_1} horizontal></Image>
                    </ScrollRevealed>
                </WorkImagesWrapper>
            </WorkWrapper>

            <WorkWrapper>
                <WorkDescriptionWrapper>
                    <ScrollRevealed>
                        <WorkDescription>
                            <Typography size="large">Fodl</Typography>
                            <Typography size="large">Branding, UI, Web</Typography>
                            <Typography size="large">New York, USA</Typography>
                            <br/>
                            <Typography>
                                FODL is a fully decentralized (non-custodial) leverage trading platform using liquidity from collateral lending platforms like Compound and Aave instead of funding rate and margin markets.
                            </Typography>
                        </WorkDescription>
                    </ScrollRevealed>
                </WorkDescriptionWrapper>
                <WorkImagesWrapper>
                    <ScrollRevealed>
                        <Image src={work_preview_big_2} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_left_2} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_right_2} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_left_5} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_right_5} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                </WorkImagesWrapper>
            </WorkWrapper>

            <WorkWrapper>
                <WorkDescriptionWrapper>
                    <ScrollRevealed>
                        <WorkDescription>
                            <Typography size="large">Fodl</Typography>
                            <Typography size="large">Branding, UI, Web</Typography>
                            <Typography size="large">New York, USA</Typography>
                            <br/>
                            <Typography>
                                FODL is a fully decentralized (non-custodial) leverage trading platform using liquidity from collateral lending platforms like Compound and Aave instead of funding rate and margin markets.
                            </Typography>
                        </WorkDescription>
                    </ScrollRevealed>
                </WorkDescriptionWrapper>
                <WorkImagesWrapper>
                    <ScrollRevealed>
                        <Image src={work_preview_big_5} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_left_3} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_right_3} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <ScrollRevealed>
                        <Image src={work_preview_horizontal_3} horizontal></Image>
                    </ScrollRevealed>
                </WorkImagesWrapper>
            </WorkWrapper>

            <WorkWrapper>
                <WorkDescriptionWrapper>
                    <WorkDescription>
                        <ScrollRevealed delay={delay}>
                            <Typography size="large">Sequence Groovebox</Typography>
                            <Typography size="large">Branding, UI</Typography>
                            <Typography size="large">Belgrade, Serbia</Typography>
                            <Typography size="large">2019</Typography>
                            <br/>
                            <Typography>
                                Sequence Groovebox is appealing and flexible Android app for music creation and performance. Unlock your creativity with different instruments and sounds, without stopping the music flow. Produce beats, bass lines and melodies using powerful synthesizer and punchy drum machine.
                            </Typography>
                        </ScrollRevealed>
                    </WorkDescription>
                </WorkDescriptionWrapper>

                <WorkImagesWrapper>
                    <ScrollRevealed>
                        <Image src={work_preview_big_6} large></Image>
                    </ScrollRevealed>
                    
                    <Row>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_left_4} square></Image>
                                <Image src={work_preview_square_left_6} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col size={6}>
                            <ScrollRevealed>
                                <Image src={work_preview_square_right_4} fill></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                </WorkImagesWrapper>
            </WorkWrapper>

            <Separator/>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="large">
                            How to
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            Create Branding Strategy<br/>
                            Communicate Visually
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">
                            Form a Brand Identity<br/>
                            Design a Product
                        </Typography>
                    </ScrollRevealed>
                </Col>
            </Row>
            
            <Separator/>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="large">
                            This is the part where we brag about our client experiance
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            Create Branding Strategy<br/>
                            Communicate Visually<br/>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">
                            Form a Brand Identity<br/>
                            Design a Product<br/>
                        </Typography>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Separator/>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="large">This is the part where we brag about our client experiance</Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            Project Name<br/>
                            Gospodin Petrovic<br/>
                            Founder<br/>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">
                            Project Name<br/>
                            Gospodin Petrovic<br/>
                            Founder<br/>
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </Typography>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Separator/>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="xlarge">Work with us</Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">Work with us</Typography>
                        <Typography size="large">hello@triforcestudio.com</Typography>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Separator/>

            <Row padded>
                <Col size={4}>
                    <ScrollRevealed delay={delay}>
                        <Typography size="large">Feel free to reach out if you want to collaborate with us, or simply have a chat.</Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4} style={{opacity: '0.3'}}>
                    <ScrollRevealed delay={delay + 0.1}>
                        <Typography size="large">
                            <a href="mailto:hello@triforcestudio.com">hello@triforcestudio.com</a>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col size={4}>
                    <ScrollRevealed delay={delay + 0.2}>
                        <Typography size="large">Follow us:</Typography>
                    </ScrollRevealed>
                </Col>
            </Row>
        </Root>
    );
}

export default Home;