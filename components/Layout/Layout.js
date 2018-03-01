import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
				<meta charSet="utf-8" key="utf" />
				<title>{props.htmlTitle}</title>
				<link
					href="https://fonts.googleapis.com/css?family=Raleway|Lusitana"
					rel="stylesheet"
					key="globalFonts"
				/>
				<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
				<script defer src="https://static.mailerlite.com/data/webforms/778608/m9q1i7.js?v1" />
			</Head>
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
