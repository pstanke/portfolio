import { Col, Row } from 'react-bootstrap';

export const CodeLink = ({ link }) => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col xs={8}>
        <h6>SEE CODE</h6>
      </Col>
      <Col>
        <a href={`${link}`} target='_blank' rel='noreferrer'>
          <img
            src={process.env.PUBLIC_URL + '/codeIcon.png'}
            alt='codeIcon'
            width='40'
            height='40'
          />
        </a>
      </Col>
    </Row>
  );
};
