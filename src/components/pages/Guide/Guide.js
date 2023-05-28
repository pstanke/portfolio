import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Guide = () => {
  return (
    <Row className=' my-4'>
      <Row>
        <Col align='center' xs={12}>
          <h1>Hi, I'm Pawel and I'm a guide here </h1>
        </Col>
        <Col align='center'>
          <small>
            * you can meet me on one of the islands next to the sand castle *
          </small>
        </Col>
      </Row>
      <Col className=' my-4' xs={12} align='center'>
        <div className=' my-3'>
          <h4> I S L A N D S </h4>
        </div>
        <div className=' my-2'>
          <h3>
            Every island here is different, but each of them is very important
          </h3>
        </div>
        <div className=' my-2'>
          <h3>
            * Click on the island with a cactus and it will take you to my
            profile on linkedIn *
          </h3>
        </div>
        <div className=' my-2'>
          <h3>
            * On the island with the dragon you can see my certificate of
            completion of Kodilla's bootcamp *
          </h3>
        </div>
        <div className=' my-2'>
          <h3>
            * Want to see all my projects on github? Go to the island with
            astronaut *
          </h3>
        </div>
        <div className=' my-2'>
          <h3>
            * Sail to the safari island to see my most interesting projects *
          </h3>
        </div>
      </Col>
      <Col className=' my-4' xs={12} align='center'>
        <div className=' my-3'>
          <h4> P R O J E C T S </h4>
        </div>
        <div className=' my-2'>
          <h3>
            * Each project has a laptop that will take you to the project
            website *
          </h3>
        </div>
        <div className=' my-2'>
          <h3>
            * Each project also has a description, used technologies and a link
            to the code *
          </h3>
        </div>
        <div className=' my-2'>
          <h3>* To change the displayed project swipe left or right *</h3>
        </div>
      </Col>
      <Col className=' my-4' xs={12} align='center'>
        <div className=' my-2'>
          <h3>To get back from the island, grab the anchor</h3>
          <Link className=' my-2' to={'/'} style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faAnchor} size='2x' />
          </Link>
        </div>
      </Col>
      <Col className=' my-4' xs={12} align='center'>
        <h5>HAVE FUN!</h5>
      </Col>
    </Row>
  );
};
