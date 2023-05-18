import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import {Row, Col} from './components/Grid';
import Separator from './components/Separator';
import './App.css';

//fonts
import "./assets/font/NeurialGrotesk-Bold.otf";
import "./assets/font/NeurialGrotesk-BoldItalic.otf";
import "./assets/font/NeurialGrotesk-Extrabold.otf";
import "./assets/font/NeurialGrotesk-ExtraboldItalic.otf";
import "./assets/font/NeurialGrotesk-Italic.otf";
import "./assets/font/NeurialGrotesk-Light.otf";
import "./assets/font/NeurialGrotesk-LightItalic.otf";
import "./assets/font/NeurialGrotesk-Medium.otf";
import "./assets/font/NeurialGrotesk-MediumItalic.otf";
import "./assets/font/NeurialGrotesk-Regular.otf";
import Typography from './components/Typography';



const bodyPadding = 100;
const padding = 20;

const Root = styled.div`
    position: relative;
    font-family: "Light";
    color: ${props => props.theme.themeColor?.main};
    padding: 0 ${bodyPadding}px;
    margin: 0 auto;

    @media only screen and (max-width: 768px) {
        padding: 0 ${padding}px;
    } 
`;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.themeColor?.bg};
        margin: 0;
        font-family: 'Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 16px;
    }

    @media only screen and (max-width: 768px) {
        .desktop-only {
            display: none !important;
        }
    }
    
    @media only screen and (min-width: 769px) {
        .mobile-only {
            display: none !important;
        }
    }
`;

const VerticalLine = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    border-left: 1px dashed ${props => props.theme.themeColor?.main}15;
    border-right: 1px dashed ${props => props.theme.themeColor?.main}15;

    &.start {
        left: calc(${bodyPadding - padding}px);
    }

    &.first-third {
        left: calc((100% - ${2 * bodyPadding + 2 * padding}px) * 1/3 + ${bodyPadding}px);

    }

    &.second-third {
        right: calc((100% - ${2 * bodyPadding + 2 * padding}px) * 1/3 + ${bodyPadding}px);
    }

    &.end {
        left: initial;
        right: calc(${bodyPadding - padding}px);
    }

    @media only screen and (max-width: 768px) {
        &.start {
            left: 0;
        }

        &.end {
            right: 0;
        }
    }
`;

const Footer = styled(Row)`
    padding-top: 30px;
    padding-bottom: 30px;

    ${props => props.theme.device.mobile} {
        padding-top: 25px;
        padding-bottom: 5px;
    }
`;

const colorDark = '#000000';
const colorLight = '#F3F3F3';

function App() {
    const [themeToggled, setThemeToggled] = useState(localStorage.getItem('triforceStudioThemeToggle') === 'true');

    const [theme, setTheme] = useState({
        p: padding,
        bodyP: bodyPadding,
        device: {
            mobile: '@media only screen and (max-width: 768px)',
            laptop: '@media only screen and (min-width: 769px) and (max-width: 1919px)',
            desktop: '@media only screen and (min-width: 1920px)'
        },
        color: {
            light: '#F3F3F3',
            dark: '#000000'
        },
        themeColor: {
            main: themeToggled ? colorDark : colorLight,
            bg: themeToggled ? colorLight : colorDark
        },
    });

    function switchTheme() {
        localStorage.setItem('triforceStudioThemeToggle', !themeToggled);
        setThemeToggled(!themeToggled);

        setTheme({
            ...theme,
            themeColor: {
                main: theme.themeColor.bg,
                bg: theme.themeColor.main
            }
        })
    }

    return (
        <Root className="App" theme={theme}>
            <GlobalStyle theme={theme}/>
            <ThemeProvider theme={theme}>
                <div >
                    <VerticalLine className="start" />
                    <VerticalLine className="desktop-only first-third"/>
                    <VerticalLine className="desktop-only second-third"/>
                    <VerticalLine className="end"/>
                </div>

                <NavigationBar onThemeSwitch={switchTheme}/>

                <Home/>

                <Separator noAnimation/>

                <Footer>
                    <Col span={4} ms={6}>
                        <Typography>© 2023 Triforce</Typography>
                    </Col>
                    <Col span={8} ms={6} alignRight>
                        <Typography>2019-2023</Typography>
                    </Col>
                </Footer>
            </ThemeProvider>
        </Root>
    );
}

export default App;
