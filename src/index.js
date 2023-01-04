import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo.tsx';
import Card from './card';
import BasicCard from './basic-card.js';
import Carousel from './carousel';
import Hero from './hero.js';
import Footer from './footer.js';
import Box from './box.js';

/*
  Note: I've tried to be non-destructive with the changes where I can.  Depending on what
  you keep, you likely can remove reference to unused components and libraries.
*/

/*
  A React Component that controls the operation of the application.
  
  The data loading the state of this component likely needs to be refactored and expanded,
  but it serves as a jumping off point for styling simply the front page.
  
  The state is set up ultimately so that page changes can be handled here, so that in the
  future, updating the activePage variable should be enough to load future page content.

  Properties:
    activePage (string) : Used to specify which current page is loaded.
    pages (Object): A list of path:option pairs with information regarding page content.
    pages.layout (string): Either 'fixed' or 'fluid'.  'fixed' constrains the page width
      to the defined maximum in the CSS while 'fluid' allows the page to expand to take up
      all of the browser width.
    pages.hero (Object): An object containing configuration for a Hero element.
    pages.basicCards (Array): A list of configurations used to populate BasicCards on the 
      page.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    const base = '/react-gh-pages/';
    const iconFolder = base + 'assets/images/icons/';
    this.state = {
      activePage: '/',
      pages: {
        '/' : {
          layout: 'fixed',
          hero: {
            width: 'fullscreen',
            title: 'Welcome to the Human Salivary Proteome Wiki (HSPW)',
            blurb: 'HSPW is a collaborative, community-based Web portal to more than 1,000 unique human saliva proteins identified by high-throughput proteomic technologies. The wiki is developed for the research community and the public to harness the knowledge in the data and to further enhance the value of the proteome. You are very welcome to share your thoughts in the forums; add your own data to the growing database; annotate the proteins; or just explore the site.'
          },
          basicCards: [
            {
              imageSrc: iconFolder + 'icon-salivary-protein.png',
              title: 'Protein Search',
              blurb: 'Search for specific salivary proteins found in our database.'
            },
            {
              imageSrc: iconFolder + 'icon-analyze.png',
              title: 'Protein Analysis',
              blurb: 'Evaluate proteins, quantify abundance and perform statistics.'
            },
            {
              imageSrc: iconFolder + 'icon-upload.png',
              title: 'Upload Experiment',
              blurb: 'Upload experiment to the database. Files have to be in mzTab format.'
            },
            {
              imageSrc: iconFolder + 'icon-download.png',
              title: 'Download Datasets',
              blurb: 'Download datasets from database with protein abundance and sequence.'
            },
            {
              imageSrc: iconFolder + 'icon-pubmed.png',
              title: 'PubMed',
              blurb: 'Includes links to full text articles and other related resources.'
            },
            {
              imageSrc: iconFolder + 'icon-gene.png',
              title: 'Find Gene',
              blurb: 'A locatable region of genomic sequence, corresponding to a unit of inheritance.'
            },
            {
              imageSrc: iconFolder + 'icon-clustering.png',
              title: 'Cluster Search',
              blurb: 'Search clusters that share one or more common proteins are merged further.'
            },
            {
              imageSrc: iconFolder + 'icon-api.png',
              title: 'API',
              blurb: 'Allows access to the datasets by retrieving requested data in JSON format.'
            },
            {
              size: '2',
              destination: false,
              rawContent:
                <div className='basic-card-content basic-card-content-centered'>
                  <h4>Statistics</h4>
                  <ul className="bulletless">
                    <li>7 Contributing Institutions</li>
                    <li>7 Studies</li>
                    <li>946 Datasets</li>
                    <li>5 Tissue Types</li>
                    <li>3 Diseases + Healthy Controls</li>
                  </ul>
                </div>
            },
            {
              size: '2',
              destination: false,
              rawContent: 
                <div className="basic-card-content basic-card-content-centered embed-responsive" style={{height: '300px'}}>
                  <iframe className="embed-responsive-item" src="https://youtube.com/embed/u4JN1FmLGE4" width="100%"></iframe>
                </div>
            },
            {
              size: '4',
              destination: false,
              rawContent:
                <div className='basic-card-content basic-card-content-centered'>
                  <h4>Recent News</h4>
                  <ul className="bulletless">
                    <li>Bookmark our new URL: <a href="https://salivaryproteome.org/">https://salivaryproteome.org/</a></li>
                    <li>Our new JCVI covid-19 data is available</li>
                  </ul>
                </div>
            }
          ]
        }
      }
    };
  }

  render() {
    let page = this.state.pages[this.state.activePage];
    return (
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <div id="application" data-layout={page.layout}>
            <Demo />
            <div id="page-content">
              <Hero 
                width={page.hero.width} 
                title={page.hero.title}
                blurb={page.hero.blurb}
              />
              <div className="basic-card-container">
                { 
                  page.basicCards.map((props, i) => {
                    return (
                      <BasicCard
                        key={i}
                        rawContent={props.rawContent}
                        size={props.size}
                        destination={props.destination}
                        imageSrc={props.imageSrc}
                        title={props.title}
                        blurb={props.blurb}
                      />
                    );
                  })
                }
              </div>
              { /* <Carousel /> */ }
              { /* <Card /> */ }
              { /* <Box /> */ }
            </div>
            <Footer />
          </div>
        </StyledEngineProvider>
      </React.StrictMode>      
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Add a scroll handler 
function addScrollClass(e) {
	if(window.pageYOffset === 0) {
	  document.body.classList.remove('scrolled');
	} else {
	  document.body.classList.add('scrolled');
	}
}
window.addEventListener('scroll', addScrollClass, false);
addScrollClass();