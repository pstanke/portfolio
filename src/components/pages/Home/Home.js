import styles from './Home.module.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <a
            href='https://www.linkedin.com/in/pawe%C5%82-stanke-a4419a26b/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={process.env.PUBLIC_URL + '/blobs/linkedinBlob.png'}
              alt='linkedInBlob'
              className='img-fluid'
            />
          </a>
          <Link to={'/projects'}>
            <img
              src={process.env.PUBLIC_URL + '/blobs/projectsBlob.png'}
              alt='projectsBlob'
              className={`${styles.projectsBlob} img-fluid`}
            />
          </Link>
          <Link to={'/certificate'}>
            <img
              src={process.env.PUBLIC_URL + '/blobs/certificateBlob.png'}
              alt='certificateBlob'
              className={`${styles.certificateBlob} img-fluid`}
            />
          </Link>
        </Col>
        <Col>
          <img
            src={process.env.PUBLIC_URL + '/blobs/meBlob.png'}
            alt='meBlob'
            className={`${styles.meBlob} img-fluid`}
          />
          <a href='https://github.com/pstanke' target='_blank' rel='noreferrer'>
            <img
              src={process.env.PUBLIC_URL + '/blobs/gitHubBlob.png'}
              alt='gitHubBlob'
              className={`${styles.gitHubBlob} img-fluid`}
            />
          </a>
        </Col>
      </Row>
    </>
  );
};
