import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Head from '../components/Head';
import {Row, Col} from '../components/Grid';
import Typography from '../components/Typography';
import ScrollRevealed from '../components/ScrollRevealed';
import Separator from '../components/Separator';
import Carousel from '../components/Carousel';

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
        margin-bottom: 20px;

        ${props.theme.device.mobile} {
            height: 480px;
            padding: 0;
        }
    `};

    ${(props) => props.square && `
        padding-top: 100%;
    `};

    ${(props) => props.horizontal && `
        padding-top: 56.25%;
    `};

    ${(props) => props.tall && `
        width: 100%;
        height: 100%;
    `};
    
    background-size: cover;
    background-position: center center;  
`;

const Root = styled.div`
    position: relative;

    a {
        color: inherit;
    }

    .work-row {
        margin-top: 112px;
    }

    .work-row > ${Col} {
        align-self: flex-start;
    }
    
    ${props => props.theme.device.desktop} {
        .work-row > ${Col}.sticky {
            position: sticky;
            top: 120px;
        }
    }

    .work-row > ${Col} ${Image}:not(:last-child) {
        margin-bottom: 20px;
    }

    .max-col-typography-width {
        max-width: 350px; 

        ${(props) => `${props.theme.device.mobile} {
            max-width: initial;
        }`}
    }  
`;

const About = styled(Row)`{
    padding-bottom: 145px;

    ${props => props.theme.device.laptop} {
        padding-bottom: 130px;
    }

    ${props => props.theme.device.mobile} {
        padding: 74px 0 70px;
    }
}`;

const AboutItem = styled(Typography)`{
    &:not(:first-child) {
        ${props => props.theme.device.desktop} {
            margin-top: 74px;
        }

        ${props => props.theme.device.laptop} {
            margin-top: 50px;
        }
    }
    
    ${props => props.theme.device.mobile} {
        margin-top: 50px;
        
        &:first-child {
            margin-top: 30px;
        }
    }
}`;

const HowTo = styled(Row)`{
    padding-bottom: 260px;

    ${props => props.theme.device.laptop} {
        padding-bottom: 180px;
    }

    ${props => props.theme.device.mobile} {
        padding: 120px 0 170px;
    }
}`;

const HowToItem = styled(Typography)`{
    &:not(:first-child) {
        ${props => props.theme.device.desktop} {
            margin-top: 74px;
        }
        
        ${props => props.theme.device.laptop} {
            margin-top: 74px;
        }
    }
    
    ${props => props.theme.device.mobile} {
        margin-top: 70px;
        
        &:first-child {
            margin-top: 55px;
        }
    }
}`;

const Contact = styled(Row)`{
    padding-bottom: 127px;

    ${props => props.theme.device.mobile} {
        padding-bottom: 40px;

        ${Col}:nth-of-type(2) {
            margin: 40px 0 95px;
        }
    }
}`;

const Footer = styled(Row)`{
    ${props => props.theme.device.mobile} {
        padding: 65px 0 72px 0;
    
        >${Col}:nth-of-type(2) {
            margin: 58px 0 102px;
        }
    }
}`;

const SocialLink = styled(Typography)`{
    box-sizing: border-box;
    min-width: 33.33%;
    padding-right: 20px;

    ${props => props.theme.device.mobile} {
        text-align: center;
        width: 100%;
        padding-right: 0;
        margin-top: 50px;
    }
}`

const WorkDescription = styled.div`
    padding: 120px 20px 0 0;
    max-width: 285px;

    ${props => props.theme.device.mobile} {
        max-width: none;
        padding: 0;
    }
`;

const Anchor = styled.span`
    position: absolute;
    top: -122px;
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

    const referralList = [
        {
            url: 'https://www.linkedin.com/company/remasterlegal/',
            info: ['Remaster', 'Ralph Wertheimer', 'CBDO'],
            description: 'We\'ve felt very lucky to have met and gotten to work with Jovan and his team at Triforce Studio. Reliable, Agile, and has a solution for what seems for everything, I highly recommend Triforce Studio.'
        },
        {
            info: ['1A Labs', 'Keegan Sard', 'Director'],
            description: 'Their approach to creativity is distinctive. The outcome of their work exceeded our expectations, demonstrating the exceptional quality and attention to detail that they apply to their craft.'
        },
        {
            url: 'https://www.linkedin.com/company/fairxyz/',
            info: ['Fair.xyz', 'Isaac Kamlish', 'Founder'],
            description: 'Triforce, a multi-modal studio, provided us with invaluable support in achieving our goals in a truly impactful way. Their innovative approach and exceptional talent enabled us to go from zero to one.'
        },
        {
            url: 'https://www.linkedin.com/company/forcemstudios/',
            info: ['Force Majeure', 'Dario Kriola', 'Founder'],
            description: 'As a company in a creative industry - we frequently need top notch design work. It has been notoriously difficult for us to find a reliable partner in this domain, until we came across Triforce studio.'
        },
        {
            url: 'https://www.linkedin.com/company/serbiangamesassociation/',
            info: ['SGA', 'Kristina Jankovic', 'Executive Manager'],
            description: 'Always forward-thinking and out-of-the-box. These two traits combined with punctuality and a sense of responsibility always made working with Triforce something I was looking forward to.'
        }
    ];

    return (
        <Root className={rootClass}>
            <Head delay={1}/>

            <Separator/>

            <About padded>
                <Anchor id="about"></Anchor>
                <Col span={4} style={{opacity: '0.3'}} mCenterText>
                    <ScrollRevealed delay={delay} fadeIn>
                        <Typography size="large">
                            Working worldwide for:
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4} mCenterText>
                    <ScrollRevealed delay={delay + 0.1} fadeIn>
                        <AboutItem size="large">Web3</AboutItem>
                        <AboutItem size="large">Tech</AboutItem>
                        <AboutItem size="large">Culture</AboutItem>
                    </ScrollRevealed>
                </Col>
                <Col span={4} mCenterText>
                    <ScrollRevealed delay={delay + 0.2} fadeIn>
                        <AboutItem size="large">Realestate</AboutItem>
                        <AboutItem size="large">Non-For-Profit</AboutItem>
                        <AboutItem size="large">Craft</AboutItem>
                    </ScrollRevealed>
                </Col>
            </About>

            <Separator/>

            <Row className="work-row">
                <Anchor id="work"></Anchor>

                <Col span={12} className="mobile-only">
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_big_1} large></Image>
                    </ScrollRevealed>
                </Col>

                <Col span={4} className="sticky">
                    <ScrollRevealed fadeIn>
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
                </Col>
                <Col span={8}>
                    <ScrollRevealed fadeIn className="desktop-only">
                        <Image src={work_preview_big_1} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col span={6}>
                            <ScrollRevealed fadeIn>
                                <Image className="desktop-only" src={work_preview_square_left_1} square></Image>
                                <Image className="mobile-only" src={work_preview_square_right_1} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col span={6}>
                            <ScrollRevealed delay={0.1} fadeIn>
                                <Image className="desktop-only" src={work_preview_square_right_1} square></Image>
                                <Image className="mobile-only" src={work_preview_square_left_1} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_horizontal_1} horizontal></Image>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Row className="work-row">
                <Col span={12} className="mobile-only">
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_big_2} large></Image>
                    </ScrollRevealed>
                </Col>

                <Col span={4} className="sticky">
                    <ScrollRevealed fadeIn>
                        <WorkDescription>
                            <Typography size="large">Remaster</Typography>
                            <Typography size="large">Branding, UI</Typography>
                            <Typography size="large">New York, USA</Typography>
                            <Typography size="large">2023</Typography>
                            <br/>
                            <Typography>
                                Remaster is turning legal contracts into enforceable protocols. Their mission is to accelerate commerce through the right legal infrastructure. Working on bringing Web2 brands into Web3, supporting them with the legal infrastructure they need.
                            </Typography>
                        </WorkDescription>
                    </ScrollRevealed>
                </Col>
                <Col span={8}>
                    <ScrollRevealed fadeIn className="desktop-only">
                        <Image src={work_preview_big_2} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col span={6}>
                            <ScrollRevealed fadeIn>
                                <Image className="desktop-only" src={work_preview_square_left_2} square></Image>
                                <Image className="mobile-only" src={work_preview_square_right_2} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col span={6}>
                            <ScrollRevealed delay={0.1} fadeIn>
                                <Image className="desktop-only" src={work_preview_square_right_2} square></Image>
                                <Image className="mobile-only" src={work_preview_square_left_2} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <ScrollRevealed fadeIn>
                                <Image src={work_preview_square_left_5} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col span={6}>
                            <ScrollRevealed delay={0.1} fadeIn>
                                <Image src={work_preview_square_right_5} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="work-row">
                <Col span={12} className="mobile-only">
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_big_5} large></Image>
                    </ScrollRevealed>
                </Col>

                <Col span={4} className="sticky">
                    <ScrollRevealed fadeIn>
                        <WorkDescription>
                            <Typography size="large">Venato</Typography>
                            <Typography size="large">Branding, UI, Web</Typography>
                            <Typography size="large">New York, USA</Typography>
                            <Typography size="large">2023</Typography>
                            <br/>
                            <Typography>
                                Venato is a revolutionary portfolio tracking software, engineered to address the unique pricing and tracking challenges presented by DeFi investments. Venato provides users with a comprehensive solution to effectively manage and monitor investments in this rapidly growing sector.
                            </Typography>
                        </WorkDescription>
                    </ScrollRevealed>
                </Col>
                <Col span={8}>
                    <ScrollRevealed fadeIn className="desktop-only">
                        <Image src={work_preview_big_5} large></Image>
                    </ScrollRevealed>
                    <Row>
                        <Col span={6}>
                            <ScrollRevealed fadeIn>
                                <Image className="desktop-only" src={work_preview_square_left_3} square></Image>
                                <Image className="mobile-only" src={work_preview_square_right_3} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col span={6}>
                            <ScrollRevealed delay={0.1} fadeIn>
                                <Image className="desktop-only" src={work_preview_square_right_3} square></Image>
                                <Image className="mobile-only" src={work_preview_square_left_3} square></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_horizontal_3} horizontal></Image>
                    </ScrollRevealed>
                </Col>
            </Row>

            <Row className="work-row">
                <Col span={12} className="mobile-only">
                    <ScrollRevealed fadeIn>
                        <Image src={work_preview_big_6} large></Image>
                    </ScrollRevealed>
                </Col>

                <Col span={4} className="sticky">
                    <WorkDescription>
                        <ScrollRevealed delay={delay} fadeIn>
                            <Typography size="large">Sequence Groovebox</Typography>
                            <Typography size="large">Branding, UI</Typography>
                            <Typography size="large">Belgrade, Serbia</Typography>
                            <Typography size="large">2019</Typography>
                            <br/>
                            <Typography>
                                Sequence Groovebox is an appealing and flexible Android app for music creation and performance. Unlock your creativity with different instruments and sounds, without stopping the music flow. Produce beats, bass lines and melodies using a powerful synthesizer and punchy drum machine.
                            </Typography>
                        </ScrollRevealed>
                    </WorkDescription>
                </Col>

                <Col span={8}>
                    <ScrollRevealed fadeIn className="desktop-only">
                        <Image src={work_preview_big_6} large></Image>
                    </ScrollRevealed>
                    
                    <Row>
                        <Col span={6} noBottomMargin>
                            <ScrollRevealed fadeIn>
                                <Image src={work_preview_square_left_4} square></Image>
                                <Image src={work_preview_square_left_6} square></Image>
                            </ScrollRevealed>
                        </Col>
                        <Col span={6} noBottomMargin>
                            <ScrollRevealed delay={0.1} fadeIn>
                                <Image src={work_preview_square_right_4} tall></Image>
                            </ScrollRevealed>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Separator/>

            <HowTo padded>
                <Anchor id="how-to"></Anchor>
                <Col span={4} style={{opacity: '0.3'}} mCenterText>
                    <ScrollRevealed delay={delay} fadeIn>
                        <Typography size="large">
                            How to:
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4} mCenterText>
                    <ScrollRevealed delay={delay + 0.1} fadeIn>
                        <HowToItem size="large">Create Branding Strategy</HowToItem>
                        <HowToItem size="large">Communicate Visually</HowToItem>
                    </ScrollRevealed>
                </Col>
                <Col span={4} mCenterText>
                    <ScrollRevealed delay={delay + 0.2} fadeIn>
                        <HowToItem size="large">Form a Brand Identity</HowToItem>
                        <HowToItem size="large">Design a Product</HowToItem>
                    </ScrollRevealed>
                </Col>
            </HowTo>

            <Separator/>

            <Row padded>
                <Col span={4}>
                    <ScrollRevealed delay={delay} fadeIn>
                        <Typography size="large" className="max-col-typography-width">
                            We are dedicated to meeting customers unique needs and providing them with the highest quality solutions. Here are a few statements from our clients:
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={8}>
                    <ScrollRevealed delay={delay + 0.1} fadeIn>
                        <Carousel items={referralList}></Carousel>
                    </ScrollRevealed>
                </Col>
            </Row>
            
            <Separator/>

            <Contact padded>
                <Anchor id="contact"></Anchor>
                <Col span={4}>
                    <ScrollRevealed delay={delay} fadeIn>
                        <Typography size="xlarge">Lets work together</Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4}>
                    <ScrollRevealed delay={delay + 0.1} fadeIn>
                        <Typography size="large" className="max-col-typography-width">
                            We are enthusiastic about discovering more about your organization and helping you achieve a unique and clearly defined visual strategy.
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4}>
                    <ScrollRevealed delay={delay + 0.2} fadeIn>
                        <Typography size="large">Reach out at:</Typography>
                        <Typography size="large">hello@triforcestudio.com</Typography>
                    </ScrollRevealed>
                </Col>
            </Contact>

            <Separator/>

            <Footer padded>
                <Col span={4} mCenterText>
                    <ScrollRevealed delay={delay} fadeIn>
                        <Typography size="large">Feel free to reach out if you want to collaborate with us, or simply have a chat.</Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4} style={{opacity: '0.3'}} mCenterText>
                    <ScrollRevealed delay={delay + 0.1} fadeIn>
                        <Typography size="large">
                            <a href="mailto:hello@triforcestudio.com">hello@triforcestudio.com</a>
                        </Typography>
                    </ScrollRevealed>
                </Col>
                <Col span={4}>
                    <ScrollRevealed delay={delay + 0.2} fadeIn>
                        <Row>
                            <Col span={3} mCenterText>
                                <Typography size="large">Follow us:</Typography>
                            </Col>
                            <Col span={9}>
                                <SocialLink size="large" opacity={0.3} inline href="https://www.instagram.com/triforcecreates/" target="_blank">Instagram</SocialLink>
                                <SocialLink size="large" opacity={0.3} inline href="https://www.linkedin.com/company/triforcestudio" target="_blank">Linkedin</SocialLink>
                                <SocialLink size="large" opacity={0.3} inline href="https://www.behance.net/triforcestudio" target="_blank">Behance</SocialLink>
                            </Col>
                        </Row>
                    </ScrollRevealed>
                </Col>
            </Footer>
        </Root>
    );
}

export default Home;
