import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const useStyles = makeStyles({
  contentWrapper: {
    minHeight: '80vh',
    marginTop: '30px',
  },
});

const NavigationTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Container className={classes.contentWrapper} maxWidth="lg">
        {children}
      </Container>
    </>
  );
};

export default NavigationTemplate;

NavigationTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
