import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Switcher.css';
import Icon from '@mdi/react'
import { mdiTranslate } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='switcher'>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Icon path={mdiTranslate}  size={1} />
        English
        <Icon path={mdiChevronDown}  size={1}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className='switcher-link'
      >
        <MenuItem onClick={handleClose}><a href="https://www.mohamud.dev/">English - Default</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="https://so.mohamud.dev/">Somali </a></MenuItem>
        <MenuItem onClick={handleClose}><a href="#">Arabic</a></MenuItem>
      </Menu>
    </div>
  );
}
