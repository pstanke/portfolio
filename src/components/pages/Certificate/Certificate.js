import { Col } from 'react-bootstrap';
import certificate from './EN certificate.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

export const Certificate = () => {
  return (
    <Col className='d-flex flex-column align-items-center mt-3'>
      <Link to={'/'} style={{ color: 'white' }}>
        <FontAwesomeIcon icon={faAnchor} size='2x' />
      </Link>
      <img src={certificate} alt='certificate' className='img-fluid mt-3' />
    </Col>
  );
};
