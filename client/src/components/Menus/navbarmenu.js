import * as React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { LandingPageButtonsVar } from '../../variables/landingPageButtons';
import { useNavigate } from 'react-router-dom'

export default function NavbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const navegationButtons = LandingPageButtonsVar({navigate: navigate})
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlenavigate = (action) => {
    action()
    handleClose()
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'navbar-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="navbar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
              {
                  navegationButtons.map(bot => {
                      return (
                        <MenuItem key={bot.title} onClick={() => handlenavigate(bot.action) }>{bot.title}</MenuItem>
                      )
                  })
        }
      </Menu>
    </div>
  );
}