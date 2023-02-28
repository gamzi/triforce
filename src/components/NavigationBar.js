import styled from 'styled-components';
import logo from '../assets/logo.svg';
import "../assets/font/NeurialGrotesk-Regular.otf";

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 43px 28px;

    background-color: rgba(0,0,0,0.8);


    // @media(min-width: 812px) {
    //     max-width: 350px;
    // }

    // @media(min-width: 1024px) {
    //     max-width: 385px;
    // }
`;

const Logo = styled.img`
    height: 37px;
`;

const Actions = styled.div``;

const Button = styled.button`
    margin: 0 10px;
    padding: 0 5px;
    width: 125px;
    height: 37px;
    background-color: transparent;
    border: none;
    user-select: none;
    cursor: pointer;
    color: white;
    font-size: 1rem;
    font-family: "Regular";
`;

const NavigationBar = () => {
    const onNavigate = () => {
        console.log('navigate to page');
    };

    return (
        <Root>
            <Logo src={logo}/>

            <Actions>
                <Button onClick={onNavigate}>WORK</Button>
                <Button onClick={onNavigate}>ABOUT</Button>
                <Button onClick={onNavigate}>BLOG</Button>
                <Button onClick={onNavigate}>CONTACT</Button>
            </Actions>
        </Root>
    );
}
  
export default NavigationBar;