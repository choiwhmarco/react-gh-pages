import { AppBar,Toolbar,IconButton,Typography,Stack,Button, MenuItem,Menu,Box } from "@mui/material";
import logo from './hspw_logo.png';
import React, { useState } from "react";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material/styles';

export const MuiDrawer = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar 
        sx={{
          'justifyContent': 'space-between'
        }}
      >
        <Box
          component="img"
          sx={{
            height: '100%',
          }}
          alt="The house from the offer."
          src={logo}
        />
        <Stack direction="row" spacing={2} sx={{ ml: 45 }}>
          <Button color="primary">Home</Button>
          <PopupState
            variant="popover"
            popupId="demo-popup-menu"
            sx={{ ml: 5 }}
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindTrigger(popupState)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Browse
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    Salivary proteins
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Protein clusters
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Protein signatures
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>Genes</MenuItem>
                  <MenuItem onClick={popupState.close}>Citations</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState
            variant="popover"
            popupId="demo-popup-menu"
            sx={{ ml: 5 }}
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindTrigger(popupState)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Search
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Basic search</MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Advanced Search
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Semantic search
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Experiment Search
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Protein search by identifiers
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState
            variant="popover"
            popupId="demo-popup-menu"
            sx={{ ml: 5 }}
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindTrigger(popupState)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Analyze
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    3D Structure Prediction
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Annotation report
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Multiple sequence alignment
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Differential Expression Analysis
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Protein signature search
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Protein similarity search (BLAST)
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState
            variant="popover"
            popupId="demo-popup-menu"
            sx={{ ml: 5 }}
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindTrigger(popupState)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Help
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>About</MenuItem>
                  <MenuItem onClick={popupState.close}>Contact Us</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState
            variant="popover"
            popupId="demo-popup-menu"
            sx={{ ml: 5 }}
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  {...bindTrigger(popupState)}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Team
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Current Team</MenuItem>
                  <MenuItem onClick={popupState.close}>Founding</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiDrawer;