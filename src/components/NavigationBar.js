import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { useState, useEffect } from 'react';
import { debounce } from '../util';

import { ReactComponent as ThemeSwitchImage } from '../assets/theme_switch.svg';
import { ReactComponent as LogoImage } from '../assets/logo.svg';
import { ReactComponent as IconHamburger } from '../assets/hamburger.svg';
import { ReactComponent as IconClose } from '../assets/close.svg';

const Link = styled.a`
    display: inline-block;
    margin: 0 10px;
    padding: 0 20px;
    user-select: none;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;

    @media ${props => props.theme.device.laptop} {
        font-size: 0.875rem;
    }
`;

const Root = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    
    height: 124px;
    top: ${props => !props.visible && !props.menuVisible ? '-124px' : '0'};
    left: 0;
    width: 100%;
    padding: 0 28px;
    transition: top 0.4s;

    color: ${props => props.theme.themeColor.main};

    //"difference" subtracts the darker of the two colors from the lightest color.
    ${props => !props.menuVisible && `
        mix-blend-mode: difference;
        color: ${props.theme.color.light};
    `}

    ${props => props.menuVisible && `
        background-color: ${props.theme.themeColor.bg};
    `}

    ${Link} {
        color: currentColor;
    }
`;

const Logo = styled(LogoImage)`
    height: 37px;

    path {
        fill: currentColor;
    }
`;

const Hamburger = styled(IconHamburger)`
    height: 24px;
    cursor: pointer;

    line {
        stroke: currentColor;
    }
`;

const Close = styled(IconClose)`
    height: 24px;
    cursor: pointer;

    line {
        stroke: currentColor;
    }
`;

const MobileActions = styled.div`
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 100%;
    height: 0;
    width: 100%;
    padding-bottom: 124px;
    background-color: ${props => props.theme.themeColor.bg}80;
    transition: opacity 0.2s, height 0.2s;
    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ${props => props.menuVisible && `
        background-color: ${props.theme.themeColor.bg};
        height: calc(100vh - 100%);
        opacity: 1;
    `}

    ${Link} {
        display: block;
        font-size: 1.5rem;
    }
`;

const Actions = styled.div`
`;

const ThemeButton = styled(ThemeSwitchImage)`
    display: inline-block;
    height: 10px;
    padding: 5px;
    margin-left: 10px;
    vertical-align: middle;
    cursor: pointer;

    ${props => props.toggled && `transform: rotate(180deg);`}

    circle {
        stroke: currentColor;
    }

    circle:first-child {
        fill: currentColor;
    }

    @media ${props => props.theme.device.mobile} {
        margin-left: 0;
    }
`;

const NavigationBar = ({onThemeSwitch}) => {
    const [themeToggled, setThemeToggled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    function toggleTheme() {
        setThemeToggled(!themeToggled);
        onThemeSwitch();
    }

    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
  
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  
      setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  
    }, [handleScroll]);

    return (
        <Root visible={visible} menuVisible={menuVisible}>
            <Logo src={logo}/>
            
            <Actions className="desktop-only">
                <Link href="#about">ABOUT</Link>
                <Link href="#work">WORK</Link>
                <Link href="#how-to">HOW TO</Link>
                <Link href="#contact">CONTACT</Link>
                <ThemeButton onClick={toggleTheme} $toggled={themeToggled}/>
            </Actions>

            {
                menuVisible ?
                    <Close className="mobile-only" onClick={toggleMenu}/>
                    :
                    <Hamburger className="mobile-only" onClick={toggleMenu}/>
            }

            <MobileActions className="mobile-only" menuVisible={menuVisible}>
                <Link href="#about" onClick={() => setMenuVisible(false)}>ABOUT</Link>
                <Link href="#work" onClick={() => setMenuVisible(false)}>WORK</Link>
                <Link href="#how-to" onClick={() => setMenuVisible(false)}>HOW TO</Link>
                <Link href="#contact" onClick={() => setMenuVisible(false)}>CONTACT</Link>
                <ThemeButton onClick={toggleTheme} $toggled={themeToggled}/>
            </MobileActions>
        </Root>
    );
}
  
export default NavigationBar;