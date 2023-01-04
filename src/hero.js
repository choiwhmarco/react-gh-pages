import React from 'react';
import './hero.css';

/*
	Handles the construction of the large "hero" section of pages.  This section is typically
	right under the Header, containing high level page information.
	
	Properties:
		width (string): Either 'fullscreen' or 'constrained'.  'constrained' limits
			the size of the Hero to the width of the page while 'fullscreen' causes the Hero 
			to span the full width of the browser, regardless of page layout.
		title (string): The Hero title, rendered in a header tag.
		blurb (string): A description rendered below the title that provides some extra
			information about the page.
*/

class Hero extends React.Component {

	render() {
		return (
			<div className="hero" data-width={ this.props.width }>
				<div>
					<h1>{this.props.title}</h1>
					<p>{this.props.blurb}</p>
				</div>
			</div>
		)
	};

}

export default Hero;