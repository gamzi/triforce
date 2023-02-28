import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import {Row, Col} from './components/Grid';
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

const Root = styled.div`
    position: relative;
    font-family: "Light";
    color: white;
`;

function App() {
    return (
        <Root className="App">
            <NavigationBar />
            <Home/>
            
            <div>
              <Row>
                  <Col size={4}>
                      © 2023 Triforce
                  </Col>
                  <Col size={8} style={{textAlign: 'right'}}>
                      Lorem Ipsum Dolor Sit Amet
                  </Col>
              </Row>
            </div>
        </Root>
    );
}

export default App;
