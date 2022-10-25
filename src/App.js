import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState('');

  const music = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  ];

  useEffect(() => {
    document.addEventListener('keydown', keySound)
  }, []);

  function keySound(e) {sound(e.key.toUpperCase())};

  function sound(e) {
    const audio = document.getElementById(e);
    audio.play();
    setState(e)
  };

  return (
    <div className="App" id="drum-machine">
      <Card className="text-center" bg='light' style={{ width: '13rem' }}>
      <Card.Header>Drum Machine</Card.Header>
      <Container fluid>
      <Row>
      <Col>
        {music.map((buttons) =>
        (<Button variant='primary' className="drum-pad" id={buttons.id} key={buttons.keyCode} onClick={() => {sound(buttons.keyTrigger)}}>
        {buttons.keyTrigger}<audio className='clip' id={buttons.keyTrigger} src={buttons.url}></audio></Button>))}
      </Col>
      </Row>
      </Container>
      </Card>
        <div id="display">{state}</div>
    </div>
  );
}

export default App;
