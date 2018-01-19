import React from 'react';
import FlashMessages from '../mixins/flash-messages';

const Default = props => {
	
	return (
		<html>
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
			<meta name="og:type" content="website"/>
			<meta name="twitter:card" content="summary" />
			<meta property="og:title" content="Online Shopping Website tagminepenge.com"/>
			<meta property="og:image" content="http://res.cloudinary.com/tagminepenge/image/upload/v1513439651/u18duf7qtfhgsgp7fabg.png" />
			<meta property="og:description" content="Tagminepenge is online leading shopping sucha as En historisk oplevelse pakket med hæsblæsende action, som finder sted i selveste Ungarn." />
			<meta property="og:url" content="http://www.tagminepenge.dk" />
			<meta name="og:locale" content="Denmark" />
				<meta name="fb:admins" content="140586622674265" />
					<meta name="fb:app_id" content="175421933053003" />
							
			<title>{props.pageTitle?props.pageTitle:"TAG MINE PENGE!"}</title>

			<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

			<link href="/styles/site.css" rel="stylesheet"/>
			{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
			{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
				{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
				{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
			<style dangerouslySetInnerHTML={{__html: props.children}} />
			{props.user && props.user.canAccessKeystone
			&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
			}

			{props.css}
			{props.head}
		</head>

		<body>


		<div id="body" >
			{
				// - The children block should contain the body of your template's content
				props.children
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

		{props.user && props.user.canAccessKeystone
		// - The KeystoneJS Content Editor provides support for ks-editable data attributes,
		// - which generate links to edit content for users who can access Keystone
		&& <script src="/keystone/js/content/editor.js"></script>
		}
		
		<script src="/js/bundle.js"></script>

		{
			// - Add scripts that are globally required by your site here.

			// - Include template-specific javascript files by extending the js block
			props.js
		}

		
		</body>
		</html>
	);
};

export default Default;
