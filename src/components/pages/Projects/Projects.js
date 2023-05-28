import { Col, Pagination, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../redux/projectsRedux';
import { ProjectTemplate } from '../../features/ProjectTemplate/ProjectTemplate';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { Swipeable } from '../../common/Swipeable/Swipeable';
import { useState } from 'react';

export const Projects = () => {
  const projects = useSelector(getProjects);
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectChange = (newActiveProject) => {
    if (newActiveProject >= 0 && newActiveProject < projects.length) {
      setActiveProject(newActiveProject);
    } else if (newActiveProject < 0) {
      setActiveProject(projects.length - 1); // Go to the last project if at the beginning
    } else {
      setActiveProject(0); // Go to the first project if at the end
    }
  };

  const paginationItems = projects.map((project, index) => (
    <Pagination.Item
      key={index}
      active={index === activeProject}
      onClick={() => handleProjectChange(index)}
    >
      {index + 1}
    </Pagination.Item>
  ));

  return (
    <>
      <Row className='my-4'>
        <Col>
          <Link to={'/'} style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faAnchor} size='3x' />
          </Link>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Pagination>{paginationItems}</Pagination>
        </Col>
      </Row>

      <Swipeable
        className
        leftAction={() => handleProjectChange(activeProject + 1)}
        rightAction={() => handleProjectChange(activeProject - 1)}
      >
        {projects
          .filter((project, index) => index === activeProject)
          .map((project) => {
            return (
              <ProjectTemplate
                key={project.id}
                name={project.name}
                description={project.description}
                gitHubLink={project.gitHubLink}
                appLink={project.appLink}
                technologies={project.technologies}
                photo={project.photo}
              />
            );
          })}
      </Swipeable>
    </>
  );
};
