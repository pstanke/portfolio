import Container from 'react-bootstrap/Container';

import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }) => {
  return (
    <Container className={styles.container}>
      <div className={styles.children}>{children}</div>
    </Container>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
