import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo.tsx';
import Card from './card';
import Carousel from './carousel';
import Footer from './footer.tsx';
import Box from './box.js'
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
      <Carousel />
      <Card />
      <Box />
      <Footer />
    </StyledEngineProvider>
  </React.StrictMode>
);