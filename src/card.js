import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import salivary_protein from './icon-salivary-protein.png';
import analysis from './icon-analyze.png';
import download from './icon-download.png';
import upload from './icon-upload.png';
import pubmed from './icon-pubmed.png';
import gene from './icon-gene.png';
import protein_cluster from './icon-clustering.png';
import api from './icon-api.png';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: "1px",
}));

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)"
};


export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 2}} >
      <Grid container direction='row' spacing={1} p={2} display="flex" columns={{xs: 4, sm: 8, md: 12}}>
        <Grid xs={2} md={2.1} display="flex">
          <Item>
            <img src={salivary_protein} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Search for specific salivary proteins found in our database.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Salivary Protein</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={analysis} display="flex" width="90%" height="40%"/>
            <Typography variant = "h5" gutterBottom>Evaluate proteins, quantify abundance and perform statistics.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%'}}>Analyze</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={upload} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Upload experiment to the database. Files have to be in mzTab format.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Upload</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={download} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Download datasets from database with protein abundance and sequence.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Download</Button>
          </Item>
        </Grid>
        <Grid display="flex" sx={{ml:4}}>
          <Item>
            <Typography variant="h3" gutterBottom sx={{mb:"5"}}>Statistics</Typography>
            <Typography variant="body1" color="common.black">7 Contributing Institutions</Typography>
            <Typography variant="body1" color="common.black">7 Studies </Typography>
            <Typography variant="body1" color="common.black">946 Datasets </Typography>
            <Typography variant="body1" color="common.black">5 Tissue Types </Typography>
            <Typography variant="body1" color="common.black">3 Diseases + Healthy Controls</Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid container direction='row' spacing={1} p={2} display="flex" >
        <Grid xs={2} md={2.1} display="flex">
          <Item>
            <img src={pubmed} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Includes links to full text articles and other related resources.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%',mb:'10%' }}>PubMed</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={gene} display="flex" width="90%" height="40%"/>
            <Typography variant = "h5" gutterBottom>A locatable region of genomic sequence, corresponding to a unit of inheritance.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Gene</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={protein_cluster} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Search clusters that share one or more common proteins are merged further.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Protein Cluster</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.1}display="flex">
          <Item>
            <img src={api} display="flex" width="90%" height="40%"/>
            <Typography variant="h5" gutterBottom>Allows access to the datasets by retrieving requested data in JSON.</Typography>
            <Divider sx={{pb: 2}}/>
            <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>API</Button>
          </Item>
        </Grid>
        <Grid xs={2} md={2.2} display="flex" sx={{ml:4}}>
          <Item>
          <iframe src="https://youtube.com/embed/u4JN1FmLGE4" width="100%"></iframe>
          <Button variant="text" href="" sx={{ fontSize: 20,mt:'10%' }}>Watch Video</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}