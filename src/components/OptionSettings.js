import React, { useState } from 'react';
import {
  withStyles,
  Grid,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Delete, ExitToApp } from '@material-ui/icons';

const OptionSettings = (props) => {
  const { chat, chats, activeChat } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload();
  }

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const handleClick = (e) => {
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container justify="center">
        <Button
          aria-controls='customized-menu'
          aria-haspopup='true'
          variant='outlined'
          color='primary'
          onClick={handleClick}
        >
          Options
        </Button>
        <StyledMenu
          id='customized-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <Delete fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Delete chat' />
          </StyledMenuItem>
          <StyledMenuItem onClick={handleLogout}>
            <ListItemIcon>
              <ExitToApp fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </StyledMenuItem>
        </StyledMenu>
      </Grid>
    </>
  );
};

export default OptionSettings;
