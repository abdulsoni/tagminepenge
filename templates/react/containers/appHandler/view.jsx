import React from 'react';
var view = function () {
	
	const {routeInfo, navLinks, user, config, categories, filters} = this.props;

		return (
			<html>
			<head>

				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta property="og:url" content={this.state.productLink} />
				<meta property="og:title" content={this.state.title}  />
				<meta property="og:type" content="shoping website" />
				<meta property="og:image" content={this.state.image}/>
				<meta property="og:description" content={this.state.description} />


				<title>{this.state.metaTitle}</title>

				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

				<link href="/styles/site.css" rel="stylesheet"/>
				{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
				{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				
				{this.props.user && this.props.user.canAccessKeystone
				&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
				}

				
			</head>

			<body>


			<div id="body" >
				{
					// - The children block should contain the body of your template's content
					this.props.children
				}
			</div>

			{
				// - jQuery 1.11.3 is included by default, and required by both Bootstrap
				// - and the KeystoneJS Content Editor. If you are not targeting IE8,
				// - you can upgrade to 2.1.4 (also bundled) for better performance.
			}
			<script src="/js/jquery/jquery-1.11.3.min.js"></script>

			{
				// - Customise which Bootstrap javascript files are served by including
				// - them specifically here, instead of bootstrap-3.3.5.min.js
			}
			<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>

			{this.props.user && this.props.user.canAccessKeystone
			// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
			// - which generate links to edit content for users who can access Keystone
			&& <script src="/keystone/js/content/editor.js"></script>
			}

			<script src="/js/bundle.js"></script>

			{
				// - Add scripts that are globally required by your site here.

				// - Include template-specific javascript files by extending the js block
				this.props.js
			}

			</body>
			</html>
		);
	    
};
export default view;