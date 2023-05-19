import linkedInBlob from './linkedinBlob.png';
import meBlob from './meBlob.png';
import projectsBlob from './projectsBlob.png';
import gitHubBlob from './gitHubBlob.png';
import certificateBlob from './certificateBlob.png';
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
            <img src={linkedInBlob} alt='linkedInBlob' className='img-fluid' />
          </a>
          <Link to={'/projects'}>
            <img
              src={projectsBlob}
              alt='projectsBlob'
              className={`${styles.projectsBlob} img-fluid`}
            />
          </Link>
          <Link to={'/certificate'}>
            <img
              src={certificateBlob}
              alt='certificateBlob'
              className={`${styles.certificateBlob} img-fluid`}
            />
          </Link>
        </Col>
        <Col>
          <img
            src={meBlob}
            alt='meBlob'
            className={`${styles.meBlob} img-fluid`}
          />
          <a href='https://github.com/pstanke' target='_blank' rel='noreferrer'>
            <img
              src={gitHubBlob}
              alt='gitHubBlob'
              className={`${styles.gitHubBlob} img-fluid`}
            />
          </a>
        </Col>
      </Row>
    </>
  );
};
