import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  InputBase,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: '30px',
  },
  wrapper: {
    height: '100%',
  },
  searchInput: {
    borderBottom: '1px solid white',
    color: 'white',
    marginLeft: '10px',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="flex-start" alignItems="stretch">
            <Typography variant="h6" className={classes.title}>
              Movie App
            </Typography>
            <SearchIcon fontSize="large" />
            <InputBase className={classes.searchInput} placeholder="Search movie" />
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
