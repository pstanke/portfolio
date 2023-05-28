import styles from './Home.module.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Hero } from '../../layout/Hero/Hero';
import { Footer } from '../../layout/Footer/Footer';
export const Home = () => {
  return (
    <>
      <Hero />
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
              className='img-fluid overfow-hidden'
            />
          </a>
          <Link to={'/projects'}>
            <img
              src={process.env.PUBLIC_URL + '/blobs/projectsBlob.png'}
              alt='projectsBlob'
              className={`${styles.projectsBlob} img-fluid `}
            />
          </Link>
          <Link to={'/certificate'}>
            <img
              src={process.env.PUBLIC_URL + '/blobs/certificateBlob.png'}
              alt='certificateBlob'
              className={`${styles.certificateBlob} img-fluid `}
            />
          </Link>
        </Col>
        <Col>
          <Link to={'/guide'}>
            <img
              src={process.env.PUBLIC_URL + '/blobs/guideBlob.png'}
              alt='guideBlob'
              className={`img-fluid `}
            />
          </Link>
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
      <Footer />
    </>
  );
};
