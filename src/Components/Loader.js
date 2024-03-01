import { BarLoader } from 'react-spinners';
import Typewriter from 'typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Loader() {
  return (
    <Container className='loader'>
      <Row className='d-flex justify-content-center align-items-center flex-column gap-3 mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <BarLoader color={'#4682b4'} loading={true} />
        </div>

        <div className='d-flex justify-content-center align-items-center display-6'>
          <Typewriter
            options={{
              strings: ['Getting order information...'],
              autoStart: true,
              loop: true,
              cursor: '|',
              delay: 50,
              deleteSpeed: 35,
            }}
          />
        </div>
      </Row>
    </Container>
  );
}
