import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import React from 'react';
import jcvi from './logo-jcvi.svg';
import forsyth from './logo-forsyth.png';
import uthsc from './logo-uthsc.svg';
import ub from './logo-ub.png';
import nih from './logo-nih-nidcr.png';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding:0,
}
export default function Footer() {
  return (
    <div sx = {{ml:303,mt:60,alignItems: 'center',}}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        sx = {{ml:303,mt:60,alignItems: 'center',}}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={2} sm={2} display="flex">
            <img src={jcvi} alt={'title'} loading="lazy" />
            </Grid>
            <Grid item xs={2} sm={2} display="flex">
            <img src={forsyth} alt={'title'} loading="lazy"/>
            </Grid>
            <Grid item xs={2} sm={2} display="flex">
            <img src={uthsc} alt={'title'} loading="lazy"/>
            </Grid>
            <Grid item xs={2} sm={2} display="flex">
            <img src={ub} alt={'title'} loading="lazy"/>
            </Grid>
            <Grid item xs={2} sm={2} display="flex">
            <img src={nih} alt={'title'} loading="lazy"/>
            </Grid>
          </Grid>
        </Container>
        <Typography align='center' color="common.black">Project is funded by NIDCR under grant R01 DE016937-16</Typography>
      </Box>
      
    </div>
  );
}