import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import React, { Component } from 'react'
import './index.css'
import jcvi from './logo-jcvi.svg';
import forsyth from './logo-forsyth.png';
import uthsc from './logo-uthsc.svg';
import ub from './logo-ub.png';
import nih from './logo-nih-nidcr.png';

class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div id="footer">
        <div class="footer-top">
          <div class="container">
           
              <div id="footer-logos">
                    <ul>
                        <li>
                          <a href="http://www.jcvi.org" title="JCVI Homepage" alt="JCVI Homepage">
                            <img src={jcvi}/>
                          </a>
                        </li>
                        <li><a href="http://www.forsyth.org" title="The Forsyth Institute Homepage" alt="The Forsyth Institute Homepage"><img src={forsyth}/></a></li>
                        <li><a href="http://www.uthsc.edu" title="The Univerisity of Tennessee Health Science Center Homepage" alt="The University of Tennessee Health Science Center Homepage"><img src={uthsc}/></a></li>
                        <li><a href="http://www.buffalo.edu" title="Univerisy of Buffalo Homepage" alt="Univerisy of Buffalo Homepage"><img src={ub}/></a></li>                    
                        <li><a href="http://www.nih.gov" title="NIH Homepage" alt="NIH Homepage"><img src={nih}/></a></li>
                    </ul>
                </div>
                  <div id="footer-text">
                    <ul>
                        <li><a href="About">About HSPW</a></li>
                        <li><a href="Accessibility">Accessibility</a></li>
                        <li><a href="Copyrights">Copyrights</a></li>
                        <li><a href="General_disclaimer">Disclaimers</a></li>
                        <li class="last"><a href="Privacy_policy">Privacy Notice</a></li>
                    </ul>
                    <ul id="last_sentence">
                        <li class="last">Project is funded by NIDCR under grant R01 DE016937-16</li>
                    </ul>
                    <ul>
                        <li> J. Craig Venter Institute</li>
                        <li>4120 Capricorn Lane</li>
                        <li>La Jolla, CA 92037</li>
                        <li class="last"><a href="mailto:help@salivaryproteome.org">Contact Us</a></li>
                    </ul>
                </div>
    
          </div>
        </div>
        </div>
    )
  }
}

const styles = theme => ({
  root: {
    marginTop: 30,
    backgroundColor: `${theme.palette.primary[500]}`,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  },
  invertedBtnDark: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none',
    margin: '8px'
  },
  white: {
    color: '#ffffff'
  },
  flexContainer: {
    display: 'flex'
  }
})

export default withStyles(styles)(Footer)