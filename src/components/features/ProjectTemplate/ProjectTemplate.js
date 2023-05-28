import { Col, Image, Row } from 'react-bootstrap';
import { Technologies } from '../../common/Technologies/Technologies';
import { CodeLink } from '../../common/CodeLink/CodeLink';
import { TextComponent } from '../../common/TextComponent/TextComponent';

export const ProjectTemplate = ({
  name,
  description,
  gitHubLink,
  appLink,
  technologies,
  photo,
}) => {
  return (
    <Row>
      <Col xs={12} className='mt-4'>
        <div align='center'>
          <h3>{name}</h3>
        </div>
      </Col>
      <Col xs={12} className='d-flex justify-content-center'>
        <a href={appLink} target='_blank' rel='noreferrer'>
          <Image
            src={process.env.PUBLIC_URL + `/projectsImages/${photo} `}
            alt={photo}
            fluid
          />
        </a>
      </Col>
      <Col className='d-flex align-items-center'>
        <Row>
          <Col xs={12}>
            <TextComponent text={description} maxTextLength={250} />
          </Col>
          <Row>
            <Col className='d-flex justify-content-center' xs={12}>
              <Technologies stack={technologies} />
            </Col>
            <Col className='d-flex justify-content-center m-3' xs={12}>
              <CodeLink link={gitHubLink} />
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};
